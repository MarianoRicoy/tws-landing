import React from 'react';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: string;
  pauseOnHover?: boolean;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  children,
  speed = '40s',
  pauseOnHover = true 
}) => {
  const marqueeStyle = {
    '--animation-duration': speed,
  } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden py-12 group">
      <div className="relative flex">
        <div 
          className={`flex animate-marquee whitespace-nowrap ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
          style={marqueeStyle}
        >
          {children}
          {children}
        </div>
        <div 
          className={`absolute top-0 flex animate-marquee2 whitespace-nowrap ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
          style={marqueeStyle}
          aria-hidden="true"
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
