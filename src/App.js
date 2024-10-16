import React, { useState } from "react";
import AgregarElemento from "./AgregarElemento";
import ListaElementos from "./ListaElementos";

const App = () => {
  const [items, setItems] = useState([]);

  // Función para agregar un ítem a la lista
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Items</h1>
      <AgregarElemento onAddItem={addItem} />
      <ListaElementos items={items} />
    </div>
  );
};

export default App;

