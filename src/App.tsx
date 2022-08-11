import Header from "./Componentes/Header";
import ListaDoMenu from "./Componentes/ListaDoMenu";
import RotasDasPaginas from "./Rotas/RotasDasPaginas";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <ListaDoMenu></ListaDoMenu>

      <RotasDasPaginas></RotasDasPaginas>
    </div>
  );
}

export default App;
