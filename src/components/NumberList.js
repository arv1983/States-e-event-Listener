import React from "react";
import Number from "./Number";

class NumberList extends React.Component {
  render() {
    return (
      <>
        {this.props.list.map((element, index) => (
          <Number key={index} number={element}></Number>
        ))}
      </>
    );
  }
}

export default NumberList;

//- Crie um componente chamado NumberList, esse componente deve simplesmente receber o numberList através de uma prop chamada list e encadear um map para renderizar um componente Number(passando o elemento por prop) para cada elemento!
