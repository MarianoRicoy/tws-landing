import React from 'react';

interface FlagProps {
  className?: string;
}

export const ArgentinaFlag: React.FC<FlagProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <clipPath id="ar-flag-clip">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#ar-flag-clip)">
        <rect width="32" height="32" fill="#fff" />
        <rect width="32" height="10.66" y="0" fill="#74ACDF" />
        <rect width="32" height="10.66" y="21.34" fill="#74ACDF" />
        <circle cx="16" cy="16" r="2.6" fill="#F6B40E" stroke="#85340A" strokeWidth="0.4" />
      </g>
    </svg>
  );
};

export const UsaFlag: React.FC<FlagProps> = ({ className }) => {
  const stripeHeight = 32 / 13;

  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <clipPath id="us-flag-clip">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#us-flag-clip)">
        <rect width="32" height="32" fill="#fff" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x="0" y={i * stripeHeight * 2} width="32" height={stripeHeight} fill="#B22234" />
        ))}
        <rect x="0" y="0" width="14.5" height={stripeHeight * 7} fill="#3C3B6E" />
      </g>
    </svg>
  );
};
