import React from 'react';

interface RatingProps {
  value: number;
  max?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export function Rating({
  value,
  max = 5,
  interactive = false,
  onChange,
  className,
}: RatingProps) {
  const [hoverRating, setHoverRating] = React.useState(0);

  return (
    <div className={className}>
      <div className="flex gap-1">
        {Array.from({ length: max }).map((_, i) => {
          const rating = i + 1;
          const isFilled = rating <= (hoverRating || value);

          return (
            <button
              key={i}
              onClick={() => interactive && onChange?.(rating)}
              onMouseEnter={() => interactive && setHoverRating(rating)}
              onMouseLeave={() => interactive && setHoverRating(0)}
              disabled={!interactive}
              className="transition-colors"
            >
              <span
                className={`text-2xl ${
                  isFilled ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
