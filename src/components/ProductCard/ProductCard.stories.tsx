import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Organisms/ProductCard", // ¡Categoría Organisms!
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Auriculares Premium",
    price: 299.99,
    category: "Electrónica",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    onAddToCart: () => alert("¡Añadido!"),
  },
};

export const Minimal: Story = {
  args: {
    title: "Camiseta Básica",
    price: 25.0,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
  },
};
