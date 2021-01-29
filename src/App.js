import "./App.css";
import React from "react";
import NumberList from "./components/NumberList";

//Primeiramente, no componente App, transforme ele para sintaxe de classe e adicione o seguinte state:
//state = { numberList: [] }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberList: [],
    };
  }

  //- Crie também um função chamada addNumber. Essa função vai adicionar um novo elemento no array, esse novo número será o ultimoNúmeroDoArray + 10. Caso não tenha nenhum número no array, esse primeiro número será 10;
  addNumber = () => {
    const { numberList } = this.state;
    this.setState({
      numberList:
        JSON.stringify(numberList) === JSON.stringify([])
          ? [10]
          : [...numberList, this.state.numberList[numberList.length - 1] + 10],
    });
  };

  //- Coloque um botão para chamar o addNumber no onClick;
  render() {
    return (
      <div className="App App-header">
        <button onClick={this.addNumber}>Adicionar</button>
        <NumberList list={this.state.numberList}></NumberList>
      </div>
    );
  }
}

export default App;
