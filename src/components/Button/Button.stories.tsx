// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button", // Categoría en el sidebar
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // Genera documentación automática
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "moschino",
      ],
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia Principal
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

// Historia de tu marca
export const Moschino: Story = {
  args: {
    variant: "moschino", // Usando tu variante personalizada
    children: "Comprar Ahora",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Cancelar",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Click Me Big",
  },
};
