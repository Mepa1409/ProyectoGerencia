import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Inicio from "./pages/Inicio";
import AbogadosList from "./pages/AbogadosList";
import ProtectedRoute from "./ProtectedRoute";
import Bienvenida from "./pages/Bienvenida";
import Login from "./pages/Login";

function App() {
  return (
    // RUTA DE LOS ENDPOINTS
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<h1>Pagina De Inicio</h1>} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/abogadoslist" element={<AbogadosList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
