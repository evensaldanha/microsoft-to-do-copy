import { LayoutRouteProps, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ListaDoMenu from "../ListaDoMenu/ListaDoMenu";
import './layoutStilo.css';

export default function Layout(props: LayoutRouteProps) {
  return (
    <div className="header-layout">
       <div > <Header></Header> </div>
       <div className="lista-do-menu-no-layout">
       <div > <ListaDoMenu></ListaDoMenu> </div>

        <Outlet></Outlet>
        </div>
    </div>
  )
}
