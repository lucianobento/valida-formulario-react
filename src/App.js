// src/App.js
import React from "react"; // Importa a biblioteca React, necessária para construir componentes
import FormularioEmail from "./formularioEmail"; // Importa o componente FormularioEmail, que contém o formulário com a lógica de validação

// Componente principal da aplicação
const App = () => {
  return (
    <div>
      {/* Renderiza o componente FormularioEmail dentro da aplicação */}
      <FormularioEmail />
    </div>
  );
};

export default App; // Exporta o componente App como padrão, permitindo que ele seja utilizado em outros arquivos

