import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Inicio from './pages/Inicio'
import RegisterAbogados from './pages/RegisterAbogado'
function App(){
  return(

    <AuthProvider>
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/registerAbogados' element={<RegisterAbogados/>}/>
      <Route path='/profile' element={<h1>Pagina De Inicio</h1>}/>
      <Route path='/abogadoslist' element={<h1>abogadoslist</h1>}/>
    
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  

  
  )
}

export default App 