import React, { useState } from "react";

const AgregarElemento = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      onAddItem(inputValue);
      setInputValue(""); // Limpiar el input después de agregar
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="form-control me-2"
        placeholder="Nuevo item"
      />
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default AgregarElemento;

