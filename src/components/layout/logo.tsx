import { cn } from '@/lib/utils';

// Placeholder mark until the official Nuvio logo is supplied.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('size-8', className)}
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="8"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path
        d="M10 22V10l12 12V10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="10" r="2.25" className="fill-star" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={cn(
        'text-foreground flex items-center gap-2.5 text-xl font-bold tracking-tight',
        className,
      )}
    >
      <LogoMark className={markClassName} />
      Nuvio
    </span>
  );
}
