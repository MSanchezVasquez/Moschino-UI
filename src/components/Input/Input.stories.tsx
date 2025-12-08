// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Escribe tu nombre...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "No puedes escribir aquí",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

// Un ejemplo más realista combinando Label (simulado) + Input
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email" className="text-sm font-medium text-slate-700">
        Email
      </label>
      <Input type="email" id="email" placeholder="usuario@moschino.com" />
    </div>
  ),
};
