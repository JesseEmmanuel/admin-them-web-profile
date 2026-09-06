import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  icon,
  color, // 1. Destructure the color prop
  ...props
}: any) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {/* 2. Remove the Tailwind bg class and use the style prop instead */}
        <div
          className="h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"
          style={{ backgroundColor: color || 'var(--primary)' }}
        ></div>

        <span className="inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-100">
        <span>{children}</span>
        {icon}
      </div>
    </button>
  )
}