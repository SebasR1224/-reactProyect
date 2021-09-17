import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Molecules/Header';
import Contenedor from './components/Organisms/Contenedor';
import Contacto from './components/Organisms/Contacto';
import PersonajeContenedor from './components/Organisms/PersonajeContenedor';
import DetalleEstudiante from './components/Organisms/DetalleEstudiante';
import DetallePersonaje from './components/Organisms/DetallePersonaje';
import Home from './components/Pages/Home';
import Footer from './components/Molecules/Footer';

function App() {
  return (
   <Router>
     <Header />
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
