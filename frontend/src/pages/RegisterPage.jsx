import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const {signup,isAuthenticated } =useAuth(); 
  const navigate =useNavigate()
  
  useEffect(()=>{
    if(isAuthenticated) navigate("/abogadoslist")
  },[isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
  signup(values)
  });

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-blue-200 border border-blue-300 p-8 rounded-md shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Nombre de Usuario</label>
            <input
              type="text"
              {...register('username', { required: true })}
              className="form-input w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Correo Electrónico</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="form-input w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Número de Teléfono</label>
            <input
              type="number"
              {...register('phone', { required: true })}
              className="form-input w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="form-input w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
