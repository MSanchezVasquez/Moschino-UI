import "./index.css";

// Exportamos los componentes
export * from "./components/Button/Button";
export * from "./components/Input/Input";
export * from "./components/SearchBar/SearchBar";

// Exportamos las utilidades (opcional, pero muy útil)
// Esto permite que quien use tu librería pueda usar tu función 'cn' para mezclar clases
export { cn } from "./lib/utils";
