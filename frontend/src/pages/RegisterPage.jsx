import { useForm } from 'react-hook-form';
import { registerRequest } from '../../api/auth';
function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-white p-4 mx-auto max-w-md mt-8 rounded-md shadow-md">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(async(values) => {
          console.log(values);
          const res = await registerRequest(values)
          console.log(res)
        })}
      >
        <label className="text-gray-600">Nombre de Usuario</label>
        <input
          type="text"
          {...register("username", { required: true })}
          className="border border-gray-300 rounded-md p-2"
        />

        <label className="text-gray-600">Correo Electrónico</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="border border-gray-300 rounded-md p-2"
        />

        <label className="text-gray-600">Número de Teléfono</label>
        <input
          type="number"
          {...register("phone", { required: true })}
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
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
