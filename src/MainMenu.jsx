import react from "react";
import { NavLink } from "react-router-dom";
const MainMenu = () => (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/estudiantes">Estudiantes</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/personajes">Personajes</NavLink></li>
    </ul>
);
export default MainMenu;