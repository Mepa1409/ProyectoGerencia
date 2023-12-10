import {BrowserRouter,Routes,Route} from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Inicio from './pages/Inicio'
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/profile' element={<h1>Pagina De Inicio</h1>}/>
    
    </Routes>
    </BrowserRouter>

  
  )
}

export default App 