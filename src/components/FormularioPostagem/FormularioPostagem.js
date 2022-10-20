import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  function onChangeTitulo(e) {
    props.setTitulo(e.target.value)
  }

  function onChangeImagem(e) {
    props.setImagem(e.target.value)
  }

  function onChangeDescricao(e) {
    props.setDescricao(e.target.value)
  }


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={onChangeImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
