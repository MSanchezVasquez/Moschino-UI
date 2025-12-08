// src/components/Button/Button.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils"; // Importamos nuestra utilidad

// 1. Definimos las variantes (La Receta)
const buttonVariants = cva(
  // Clases base (siempre presentes)
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
        moschino:
          "bg-moschino-500 text-white hover:bg-moschino-600 shadow-md hover:shadow-lg transition-all", // <--- Tu variante personalizada
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 2. Definimos la interfaz combinando props de HTML y nuestras variantes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Preparado para polimorfismo futuro (opcional)
}

// 3. El Componente
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
