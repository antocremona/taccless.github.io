import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './componentes/NavBar/NavBar'
import {ContactForm} from './componentes/ContactForm/ContactForm'

function App() {
  return (
    <div>
      <NavBar/>
      <ContactForm/>
    </div>
  );
}

export default App;
