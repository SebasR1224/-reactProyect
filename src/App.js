import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import PersonajeContenedor from './PersonajeContenedor';
import DetalleEstudiante from './DetalleEstudiante'
import MainMenu from './MainMenu';

function App() {
  return (
   <Router>
     <MainMenu />
      <Switch>
          <Route path="/" exact component={ Header } />
          <Route path="/estudiantes" exact component={ Contenedor } />
          <Route path="/estudiantes/:id" exact component={ DetalleEstudiante } />
          <Route path="/contacto" exact component={ Contacto } />
          <Route path="/personajes" exact component={ PersonajeContenedor } />
          <Route component={ 
            ()=>(
              <h1>Pagina no encontrada</h1>
            )
            } />
      </Switch>      
   </Router>
  )
}

export default App;
