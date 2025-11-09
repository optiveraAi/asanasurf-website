import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * WAVE BACKGROUND COMPONENT
 *
 * Beautiful animated shader-based wave background with:
 * - Custom vertex/fragment shaders for organic wave motion
 * - Dynamic gradient colors (ocean blues to sunset pinks)
 * - Mouse-interactive elements
 * - Particle system for water droplets/foam
 * - Optimized for 60fps performance
 */

// Custom Wave Shader
const waveVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uWaveIntensity;

  varying vec2 vUv;
  varying float vWave;
  varying vec3 vPosition;

  // Simplex noise function for organic movement
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vUv = uv;
    vPosition = position;

    // Create layered wave effect
    vec3 pos = position;
    float time = uTime * 0.3;

    // Multiple octaves of noise for complex wave patterns
    float wave1 = snoise(vec3(pos.x * 0.5 + time, pos.y * 0.5, time)) * 0.5;
    float wave2 = snoise(vec3(pos.x * 1.0 - time * 0.7, pos.y * 1.0, time * 1.3)) * 0.3;
    float wave3 = snoise(vec3(pos.x * 2.0 + time * 0.5, pos.y * 2.0, time * 0.8)) * 0.15;

    // Mouse interaction - create ripples
    vec2 mouseInfluence = uMouse - pos.xy;
    float mouseDistance = length(mouseInfluence);
    float mousePower = smoothstep(2.0, 0.0, mouseDistance) * 0.5;

    float finalWave = (wave1 + wave2 + wave3) * uWaveIntensity + mousePower;
    pos.z += finalWave;

    vWave = finalWave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const waveFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorDeep;
  uniform vec3 uColorShallow;
  uniform vec3 uColorFoam;
  uniform vec3 uColorSunset;
  uniform float uGradientCycle;

  varying vec2 vUv;
  varying float vWave;
  varying vec3 vPosition;

  void main() {
    // Create dynamic gradient that cycles through time of day
    float gradientPhase = sin(uGradientCycle * 0.2) * 0.5 + 0.5;

    // Base ocean colors with depth
    vec3 deepOcean = mix(uColorDeep, uColorShallow, vUv.y);
    vec3 sunsetTint = mix(deepOcean, uColorSunset, gradientPhase * 0.4);

    // Add foam/highlights on wave peaks
    float foamMask = smoothstep(0.3, 0.6, vWave);
    vec3 finalColor = mix(sunsetTint, uColorFoam, foamMask * 0.6);

    // Add depth with vignette effect
    float vignette = 1.0 - length(vUv - 0.5) * 0.8;
    finalColor *= vignette;

    // Add subtle shimmer effect
    float shimmer = sin(vPosition.x * 10.0 + uTime * 2.0) * 0.5 + 0.5;
    shimmer *= sin(vPosition.y * 10.0 - uTime * 1.5) * 0.5 + 0.5;
    finalColor += uColorFoam * shimmer * 0.1;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface WaveMeshProps {
  mousePosition: { x: number; y: number };
}

const WaveMesh: React.FC<WaveMeshProps> = ({ mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uWaveIntensity: { value: 0.8 },
      uColorDeep: { value: new THREE.Color('#0A1F44') }, // Deep ocean blue
      uColorShallow: { value: new THREE.Color('#1E3A5F') }, // Lighter ocean
      uColorFoam: { value: new THREE.Color('#FFFFFF') }, // White foam
      uColorSunset: { value: new THREE.Color('#FF6B6B') }, // Sunset pink/orange
      uGradientCycle: { value: 0 },
    }),
    []
  );

  // Update shader uniforms each frame
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
      material.uniforms.uGradientCycle.value = state.clock.getElapsedTime();

      // Smooth mouse tracking
      material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mousePosition.x * 5 - 2.5, mousePosition.y * 5 - 2.5),
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 6, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10, 128, 128]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Floating Particles Component
const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;

      // Animate particles up and down
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.getElapsedTime() + i) * 0.002;

        // Reset particles that go too high
        if (positions[i3 + 1] > 5) {
          positions[i3 + 1] = -5;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4ECDC4"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface WaveBackgroundProps {
  className?: string;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ className }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: 1 - event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]} // Adaptive pixel ratio for performance
        performance={{ min: 0.5 }} // Adaptive performance
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Main wave mesh with shader */}
        <WaveMesh mousePosition={mousePosition} />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Fog for depth */}
        <fog attach="fog" args={['#0A1F44', 5, 15]} />
      </Canvas>

      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ocean-900/30 pointer-events-none" />
    </div>
  );
};

export default WaveBackground;
