import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = (event) => {
    props.setPageFlow(2);    
  
  };

  function onChangeUrl(e) {
    props.setUrlFoto(e.target.value)
  }

  function onChangeNome(e) {
    props.setNome(e.target.value)
  }


  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.nome} onChange={onChangeNome}
           />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"url"} value={props.urlFoto} onChange={onChangeUrl}
           />
        </StyledLabel>
        <SendButton onClick={login}
        >Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
