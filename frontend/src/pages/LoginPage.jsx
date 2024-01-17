import { useForm } from 'react-hook-form';
import { date } from 'zod';


function LoginPage() {
  const { register, handleSubmit,formState:{errors} } = useForm();


    const onSubmit=handleSubmit((data)=>{
        console.log(data)
    })
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Inicio de Sesión</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(async (values) => {
            console.log(values);
            // const res = await loginRequest(values)
            // console.log(res)
          })}
        >
          <label className="text-gray-600">Correo Electrónico</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border border-gray-300 rounded-md p-2"
          />

          <label className="text-gray-600">Contraseña</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="border border-gray-300 rounded-md p-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
