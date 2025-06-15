import { Button } from "@/components/ui/button";

interface ProviderButtonProps {
  provider: string;
  icon: string;
  alt: string;
  invert?: boolean;
}

export default function ProviderButton({ provider, icon, alt, invert = false }: ProviderButtonProps) {
  return (
    <Button
      className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4"
      type="button"
    >
      <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
        <div className={`overflow-hidden rounded-full ${invert ? 'dark:invert' : ''}`}>
          <img
            width="32"
            height="32"
            alt={alt}
            src={icon}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Button>
  );
}