import {TitleHeader, AgaSeis, ImagemPerfil} from './styled'


export const Header = (props) => {

    return(
        <TitleHeader>
            
            <AgaSeis><ImagemPerfil id={"block"} src={props.urlFoto} alt={"foto"}/>{props.nome}
            </AgaSeis>
            
            Insta4
        </TitleHeader>
    )
}

