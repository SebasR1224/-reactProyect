import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import PersonajeContenedor from './PersonajeContenedor';
import DetalleEstudiante from './DetalleEstudiante'
import DetallePersonaje from './DetallePersonaje';
import Home from './Home';
import MainMenu from './MainMenu';
import Footer from './Footer';

function App() {
  return (
   <Router>
     
     <Header />
     <MainMenu />
      <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/estudiantes" exact component={ Contenedor } />
          <Route path="/estudiantes/:id" exact component={ DetalleEstudiante } />
          <Route path="/contacto" exact component={ Contacto } />
          <Route path="/personajes" exact component={ PersonajeContenedor } />
          <Route path="/personajes/:id" exact component={ DetallePersonaje } />
          <Route component={ 
            ()=>(
              <h1>Pagina no encontrada</h1>
            )
            } />
      </Switch>
      <Footer />      
   </Router>
  )
}

export default App;
