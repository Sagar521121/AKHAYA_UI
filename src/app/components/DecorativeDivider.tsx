interface DecorativeDividerProps {
  variant?: 'diamond' | 'circle' | 'star';
  className?: string;
}

export function DecorativeDivider({ variant = 'diamond', className = '' }: DecorativeDividerProps) {
  return (
    <div className={`container mx-auto px-6 py-8 ${className}`}>
      {/* Decorative divider removed */}
    </div>
  );
}