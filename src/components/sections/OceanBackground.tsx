import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * REALISTIC OCEAN BACKGROUND
 *
 * Aerial view ocean texture inspired by reference photo
 * Focus: Visual realism first, interactions later
 * - Deep ocean blues and greens
 * - White foam on wave crests
 * - Natural shadows and depth
 * - Diagonal wave patterns
 */

const oceanVertexShader = `
  uniform float u_time;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // Subtle wave height variation
    float wave1 = sin(pos.x * 2.0 + pos.y * 1.5 + u_time * 0.3) * 0.1;
    float wave2 = sin(pos.x * 1.5 - pos.y * 2.0 + u_time * 0.25) * 0.08;

    vElevation = wave1 + wave2;
    pos.z = vElevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const oceanFragmentShader = `
  uniform float u_time;

  varying vec2 vUv;
  varying float vElevation;

  // Noise functions
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Quintic interpolation for smoother results
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for(int i = 0; i < 6; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv * 12.0;

    // Slow diagonal movement
    uv += vec2(u_time * 0.03, -u_time * 0.02);

    // Multi-layer noise for organic texture (increased detail)
    float noise1 = fbm(uv * 0.3);
    float noise2 = fbm(uv * 0.8 + 100.0);
    float noise3 = fbm(uv * 1.5 + 200.0);
    float noise4 = fbm(uv * 3.0 + 300.0);
    float noise5 = fbm(uv * 5.0 + 400.0);

    // Combine noise layers with smooth blending
    float pattern = noise1 * 0.35 + noise2 * 0.25 + noise3 * 0.20 + noise4 * 0.12 + noise5 * 0.08;

    // Ocean colors from reference image
    vec3 deepOcean = vec3(0.02, 0.15, 0.25);      // Very deep blue-green
    vec3 darkWater = vec3(0.05, 0.25, 0.35);      // Dark water
    vec3 midWater = vec3(0.08, 0.35, 0.45);       // Mid-tone blue
    vec3 lightWater = vec3(0.15, 0.50, 0.60);     // Lighter blue
    vec3 shallowWater = vec3(0.25, 0.65, 0.70);   // Shallow turquoise
    vec3 foam = vec3(0.90, 0.95, 0.97);           // White foam
    vec3 creamFoam = vec3(0.85, 0.90, 0.88);      // Cream colored foam

    // Create depth variation
    float depth = smoothstep(0.2, 0.8, pattern);
    vec3 waterColor = mix(deepOcean, darkWater, depth);
    waterColor = mix(waterColor, midWater, smoothstep(0.3, 0.6, pattern));
    waterColor = mix(waterColor, lightWater, smoothstep(0.5, 0.8, noise2) * 0.4);

    // Add shallow areas (turquoise patches)
    float shallowMask = smoothstep(0.75, 0.85, pattern) * smoothstep(0.6, 0.8, noise3);
    waterColor = mix(waterColor, shallowWater, shallowMask * 0.6);

    // FOAM PATTERNS - diagonal wave crests
    vec2 foamUv = vUv * 10.0;
    foamUv += vec2(u_time * 0.04, -u_time * 0.03);

    // Create diagonal foam lines with more detail
    float foamNoise1 = fbm(foamUv * 1.0);
    float foamNoise2 = fbm(foamUv * 2.5 + 50.0);
    float foamNoise3 = fbm(foamUv * 5.0 + 100.0);

    // Wave crests detection (smoother)
    float waveCrest = smoothstep(0.58, 0.78, foamNoise1);

    // Breaking foam texture with multiple layers
    float foamTexture = smoothstep(0.45, 0.75, foamNoise2);
    float foamDetail = smoothstep(0.6, 0.8, foamNoise3);
    float breakingFoam = waveCrest * foamTexture * (0.8 + foamDetail * 0.2);

    // Add scattered foam patches
    float scatteredFoam = smoothstep(0.72, 0.88, noise5) * smoothstep(0.65, 0.92, pattern);

    // Turbulent foam (small details)
    float turbulentFoam = smoothstep(0.78, 0.92, foamNoise3) * 0.25;

    // Combine all foam with smooth transitions
    float totalFoam = breakingFoam * 0.65 + scatteredFoam * 0.45 + turbulentFoam;
    totalFoam = smoothstep(0.0, 1.0, totalFoam);

    // Mix foam into water
    vec3 finalColor = mix(waterColor, foam, totalFoam * 0.85);
    finalColor = mix(finalColor, creamFoam, totalFoam * scatteredFoam * 0.4);

    // SHADOWS - add depth with darker areas
    float shadowNoise = fbm(uv * 0.8 - vec2(u_time * 0.01));
    float shadows = smoothstep(0.3, 0.5, shadowNoise) * 0.3;
    finalColor = mix(finalColor, deepOcean, shadows);

    // Subtle highlights on water surface
    float highlight = pow(noise3, 4.0) * 0.15;
    finalColor += vec3(highlight * 0.8, highlight * 0.9, highlight);

    // Slight darkening at wave troughs for depth
    float waveShadow = smoothstep(-0.05, 0.0, vElevation);
    finalColor *= mix(0.85, 1.0, waveShadow);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const OceanSurface: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height, 512, 512]} />
      <shaderMaterial
        vertexShader={oceanVertexShader}
        fragmentShader={oceanFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const OceanScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.0} />
      <OceanSurface />
    </>
  );
};

interface OceanBackgroundProps {
  className?: string;
}

const OceanBackground: React.FC<OceanBackgroundProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        orthographic
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <OceanScene />
      </Canvas>

      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 pointer-events-none" />
    </div>
  );
};

export default OceanBackground;
