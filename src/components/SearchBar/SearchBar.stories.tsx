import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar", // ¡Nota que cambiamos la categoría a Molecules!
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSearch: { action: "buscando..." }, // Esto registrará el evento en la consola de Storybook
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Buscar productos...",
    buttonText: "Ir",
  },
};

export const CustomText: Story = {
  args: {
    placeholder: "Ingresa tu correo",
    buttonText: "Suscribirse",
  },
};
