import { render, screen, waitFor } from "@testing-library/react";
import ListaElementos from "./ListaElementos";

test("debería mostrar el nuevo ítem de manera asincrónica", async () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  render(<ListaElementos items={items} />);

  // Verificamos que los ítems iniciales estén en el documento
  items.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });

  // Simulamos la adición de un nuevo elemento
  const newItem = "Nuevo Ítem";
  items.push(newItem); // Agregamos el ítem al array de items

  // Volvemos a renderizar el componente con el nuevo ítem
  render(<ListaElementos items={items} />);

  // Usamos `waitFor` para esperar que el nuevo ítem aparezca en el documento.
  await waitFor(() => {
    expect(screen.getByText(newItem)).toBeInTheDocument();
  });
});
