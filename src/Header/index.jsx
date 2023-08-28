import { memo } from "react"; //Utilizando para criar componentes memorizados

/**
 * Exportamos o componente memorizado
 * 
 * Quando criamos um componente memorizado no react, 
 * ele apenas será renderizado quando os estados 
 * dele sofrerem alteração, caso contrário, 
 * ele não renderiza o componente novamente
 */
export const Header = memo(({ name }) => {
    console.log('componente header renderizou')
    return (
     <h3>Bem-vindo {name}</h3>
    )
});



