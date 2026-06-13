'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            {/* Step Circle */}
            <div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors',
                index <= currentStep
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground border border-border'
              )}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </div>

            {/* Step Label */}
            <p
              className={cn(
                'text-xs mt-2 text-center',
                index <= currentStep
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {step}
            </p>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'h-1 flex-1 mx-2 -mt-11 transition-colors',
                  index < currentStep ? 'bg-primary' : 'bg-border'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
