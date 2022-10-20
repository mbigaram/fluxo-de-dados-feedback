import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader >{props.titulo}</TitleHeader>
      <Image src={props.imagem} alt={"foto"}/>
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;


//https://picsum.photos/536/354