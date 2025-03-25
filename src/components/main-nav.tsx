import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <a
        href=""
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </a>
      <a
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Receitas
      </a>
      <a
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Despesas
      </a>
      <a
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Categorias
      </a>
    </nav>
  )
}