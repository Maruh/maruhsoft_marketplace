import React from 'react';
import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertType = 'info' | 'warning' | 'error' | 'success';

interface AlertProps {
  type?: AlertType;
  title?: string;
  message: string;
  className?: string;
}

const icons = {
  info: <Info className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  success: <CheckCircle className="h-5 w-5" />,
};

const styles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  success: 'bg-green-50 border-green-200 text-green-800',
};

export function Alert({
  type = 'info',
  title,
  message,
  className,
}: AlertProps) {
  return (
    <div
      className={cn(
        'flex gap-3 p-4 rounded-lg border',
        styles[type],
        className
      )}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1">
        {title && <h3 className="font-semibold">{title}</h3>}
        <p className={title ? 'text-sm mt-1' : ''}>{message}</p>
      </div>
    </div>
  );
}
