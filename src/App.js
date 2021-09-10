import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import PersonajeContenedor from './PersonajeContenedor';

function App() {
  return (
   <Router>
     <Route path="/" exact component={ Header } />
     <Route path="/estudiantes" exact component={ Contenedor } />
     <Route path="/contacto" exact component={ Contacto } />
     <Route path="/personaje" exact component={ PersonajeContenedor } />
   </Router>
  )
}

export default App;
