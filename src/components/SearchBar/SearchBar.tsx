import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  buttonText?: string;
}

export const SearchBar = ({
  placeholder = "Buscar...",
  onSearch,
  buttonText = "Buscar",
}: SearchBarProps) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="moschino">
        {buttonText}
      </Button>
    </form>
  );
};
