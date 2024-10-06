// src/formularioEmail.js

import React from "react"; // Importa o React para criar componentes
import { useFormik } from "formik"; // Importa o hook useFormik da biblioteca Formik para gerenciar o estado do formulário
import * as Yup from "yup"; // Importa Yup para a validação de esquemas

// Função que renderiza o formulário de email com validação
const FormularioEmail = () => {
  // Esquema de validação usando Yup
  // Define que o campo "email" é obrigatório e deve ter um formato válido
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido") // Mensagem de erro se o formato do email estiver incorreto
      .required("O campo email é obrigatório"), // Mensagem de erro se o campo estiver vazio
  });

  // Configuração do Formik
  // Define valores iniciais, esquema de validação e o comportamento ao submeter o formulário
  const formik = useFormik({
    initialValues: {
      email: "", // O valor inicial do campo email é uma string vazia
    },
    validationSchema: validationSchema, // Aplica o esquema de validação definido acima
    
    onSubmit: (values) => {
      // Função a ser executada quando o formulário for submetido com sucesso
      alert(JSON.stringify(`O e-mail ${values.email} é válido`, null, 2)); // Exibe os valores do formulário em um alert no formato JSON
    },
  });

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      {/* Estilo aplicado ao container do formulário, definindo uma largura máxima e centralizando */}
      <h1>Formulário de Email</h1>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          {/* Label para o campo de email */}
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange} // Atualiza o valor do campo quando o usuário digita
            onBlur={formik.handleBlur} // Marca o campo como "tocado" quando ele perde o foco
            value={formik.values.email} // Define o valor atual do campo como o estado gerenciado pelo Formik
            style={{
              width: "100%", // Define o campo de entrada para ocupar 100% da largura disponível
              padding: "8px", // Define o preenchimento interno do campo
              border: formik.errors.email && formik.touched.email ? "1px solid red" : "1px solid #ccc", // Muda a cor da borda para vermelho se houver erro de validação
              borderRadius: "4px", // Define bordas arredondadas para o campo de entrada
            }}
          />
          {/* Exibe a mensagem de erro se o campo de email tiver sido tocado e houver um erro de validação */}
          {formik.errors.email && formik.touched.email && (
            <div style={{ color: "red", marginTop: "5px" }}>{formik.errors.email}</div>
          )}
        </div>
        {/* Botão de envio do formulário */}
        <button
          type="submit"
          style={{
            padding: "10px 20px", // Define o tamanho do botão
            backgroundColor: "#007bff", // Define a cor de fundo do botão (azul)
            color: "#fff", // Define a cor do texto do botão (branco)
            border: "none", // Remove as bordas padrão do botão
            borderRadius: "4px", // Define bordas arredondadas para o botão
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioEmail; // Exporta o componente para ser utilizado em outros arquivos
