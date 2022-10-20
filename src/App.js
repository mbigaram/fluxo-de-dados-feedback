import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [urlFoto, setUrlFoto] = useState("")
  const [nome, setNome] = useState("")
  const [titulo, setTitulo] = useState("")
  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header
            nome={nome}
            urlFoto={urlFoto}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
              nome={nome}
              setNome={setNome}
              urlFoto={urlFoto}
              setUrlFoto={setUrlFoto}
              setPageFlow={setPageFlow}/>
          ) : (
            <FormularioPostagem
              titulo={titulo}
              imagem={imagem}
              descricao={descricao}
              setTitulo={setTitulo}
              setImagem={setImagem}
              setDescricao={setDescricao}
            />
          )}
        </aside>
        <TelaDaPostagem
          titulo={titulo}
          imagem={imagem}
          descricao={descricao}
          setTitulo={setTitulo}
          setImagem={setImagem}
          setDescricao={setDescricao}
        />
      </Container>
    </>
  );
}

export default App;


//https://i.pinimg.com/736x/40/9a/cc/409acc9856af6c5077d21f82fbf35eac.jpg