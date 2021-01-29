import React from "react";

class Number extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid green",
        }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Number;

//- Crie um componente chamado Number,  o qual recebe uma prop chamada number e renderiza a prop como children de um div com borda verde;
