import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="hidden font-bold sm:inline-block">
                OpenRouter
              </span>
            </div>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/models"
            >
              Models
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/chat"
            >
              Chat
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/rankings"
            >
              Rankings
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/enterprise"
            >
              Enterprise
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
            >
              Docs
            </a>
          </nav>
        </div>
        <Button variant="ghost" size="icon" className="mr-2 px-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 md:w-[200px] lg:w-[300px]"
              />
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}