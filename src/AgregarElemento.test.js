import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AgregarElementos from "./AgregarElemento";

test("debería llamar a onAddItem de manera asincrónica cuando se agrega un ítem", async () => {
  const onAddItem = jest.fn(); // Mock de la función para agregar ítems

  render(<AgregarElementos onAddItem={onAddItem} />);

  const input = screen.getByPlaceholderText("Nuevo item");
  const button = screen.getByText("Agregar");

  // Simular el ingreso de un valor en el campo de texto
  fireEvent.change(input, { target: { value: "Nuevo Ítem" } });

  // Simular el click en el botón para agregar el ítem
  fireEvent.click(button);

  // Usamos `waitFor` para esperar a que la función mock se haya llamado.
  await waitFor(() => {
    expect(onAddItem).toHaveBeenCalledWith("Nuevo Ítem");
  });

  // Verificamos si el campo de texto se limpia después de la acción
  expect(input.value).toBe(""); // El campo debe estar vacío después de enviar el ítem
});
