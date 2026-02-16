"use client";

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/components/lib/utils'; 

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-[#63DEF1] shadow-[0_0_15px_rgba(99,222,241,0.5)] transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = "Progress"; // Simplificado para evitar erro de referência

export { Progress };