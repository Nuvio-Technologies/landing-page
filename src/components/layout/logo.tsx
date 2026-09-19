import Image from 'next/image';

import { cn } from '@/lib/utils';

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/nuvio-mark.webp"
      alt=""
      width={128}
      height={128}
      className={cn('size-8', className)}
    />
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
        'text-foreground flex items-center gap-2 text-xl font-bold tracking-tight',
        className,
      )}
    >
      <LogoMark className={markClassName} />
      Nuvio
    </span>
  );
}
