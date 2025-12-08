import React from "react";
import { Button } from "../Button/Button";
import { cn } from "../../lib/utils";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  image: string;
  category?: string;
  onAddToCart?: () => void;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    { className, title, price, image, category, onAddToCart, ...props },
    ref
  ) => {
    return (
      <article
        ref={ref}
        className={cn(
          "group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md",
          className
        )}
        {...props}
      >
        {/* Imagen con efecto Zoom al hacer hover */}
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="p-4">
          {category && (
            <span className="mb-2 block text-xs font-medium text-slate-500 uppercase tracking-wider">
              {category}
            </span>
          )}

          <h3 className="mb-1 text-lg font-semibold text-slate-900 line-clamp-1">
            {title}
          </h3>

          <p className="mb-4 text-slate-600">${price.toFixed(2)}</p>

          {/* Reutilizamos TU Botón (Átomo) */}
          <Button onClick={onAddToCart} variant="moschino" className="w-full">
            Añadir al Carrito
          </Button>
        </div>
      </article>
    );
  }
);

ProductCard.displayName = "ProductCard";
