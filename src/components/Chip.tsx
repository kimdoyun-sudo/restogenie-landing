import React from 'react';

export type ChipVariant = 'success' | 'error' | 'warning' | 'info';

export interface ChipProps {
  variant: ChipVariant;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Chip({ variant, children, className = '', animate = false }: ChipProps) {
  const variantClass = `rt-chip--${variant}`;
  const animateClass = animate ? 'animate' : '';

  return (
    <span className={`rt-chip ${variantClass} ${animateClass} ${className}`}>
      {children}
    </span>
  );
}

// Preset Chip components for common use cases
export function PercentChip({ value, direction = 'up' }: { value: number; direction?: 'up' | 'down' }) {
  const variant = direction === 'up' ? 'success' : 'error';
  const arrow = direction === 'up' ? '↑' : '↓';

  return (
    <Chip variant={variant}>
      {arrow} <span className="ml-2">{Math.abs(value)}%</span>
    </Chip>
  );
}

export function BadgeChip({ label, variant = 'info' }: { label: string; variant?: ChipVariant }) {
  return <Chip variant={variant}>{label}</Chip>;
}
