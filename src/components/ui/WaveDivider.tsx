import React from 'react';

/**
 * Wave-shaped divider component for section transitions
 * Creates smooth, ocean-inspired borders between sections
 */

interface WaveDividerProps {
  /** Position of the wave: top or bottom */
  position?: 'top' | 'bottom';
  /** Color of the wave fill */
  fillColor?: string;
  /** Background color behind the wave */
  backgroundColor?: string;
  /** Wave style variant */
  variant?: 'gentle' | 'dramatic' | 'layered';
  /** Flip the wave horizontally */
  flip?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  position = 'bottom',
  fillColor = '#f5f5f0', // cream-100
  backgroundColor = '#ffffff',
  variant = 'gentle',
  flip = false,
}) => {
  // Different wave path variants - subtle, flowing waves
  const wavePaths = {
    gentle: 'M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z',
    dramatic: 'M0,48L48,53.3C96,59,192,69,288,69.3C384,69,480,59,576,58.7C672,59,768,69,864,74.7C960,80,1056,80,1152,74.7C1248,69,1344,59,1392,53.3L1440,48L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z',
    layered: 'M0,40L48,45.3C96,51,192,61,288,64C384,67,480,63,576,58.7C672,55,768,51,864,53.3C960,56,1056,64,1152,64C1248,64,1344,56,1392,52L1440,48L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z',
  };

  const transform = flip ? 'scale(-1, 1)' : 'scale(1, 1)';

  return (
    <div
      className={`relative w-full -my-1 ${position === 'top' ? 'rotate-180' : ''}`}
      style={{ backgroundColor }}
    >
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-auto"
        style={{
          display: 'block',
          transform,
          height: '60px',
        }}
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          d={wavePaths[variant]}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
