
import React from 'react';
import { useScrollAnimation, ScrollAnimationOptions } from '@/hooks/useScrollAnimation';
import '@/styles/scroll-animations.css';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  className?: string;
  options?: ScrollAnimationOptions;
  stagger?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade-in',
  className = '',
  options = {},
  stagger = 0
}) => {
  const { ref, isVisible } = useScrollAnimation(options);

  const animationClass = `scroll-${animation}`;
  const staggerClass = stagger > 0 ? `scroll-stagger-${stagger}` : '';
  const visibleClass = isVisible ? 'visible' : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${staggerClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
