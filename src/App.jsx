import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./components/FormularioSimple"
import './App.css'

function App() {
return (
        <>
        <div className="mainPage containerext">
        <Formulario/>
        </div>
        <footer className='bg-dark text-center text-secondary py-4'>
          <p>&copy; Todos los derechos reservados</p>
        </footer>
        </>
      )
}

export default App
