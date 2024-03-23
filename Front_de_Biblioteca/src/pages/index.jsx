import { useLoaderData } from "react-router-dom"
import Libro  from "../components/Libro"
// importa la data de libros
import { obtenerLibros } from "../api/Crud"
// este loader es para enviar datos al componente index.jsx
export async function loader(){
    const libros = await obtenerLibros()
    return libros
     // muestra los datos en la consola
  }


function index() {
  // useLoaderData es para obtener los datos que se envian desde el loader en este caso libros
  const libros = useLoaderData()
  console.log(libros)
  return (
    <div>
        <h1 className="text-4xl font-bold text-blue-900">Libros</h1>
        <p className="text-xl text-gray-500 mt-3">Administra tus linbros</p>
        {libros.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th>titulo</th>
                <th>autor</th>
                <th>genero</th>
                <th>fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.map(libro => (
                <Libro
                  key={libro.id}
                  libro={libro}
                />
              ))}
            </tbody>
          </table>
        ):(<p>
          No hay libros
        </p>)}
    </div>
  )
}

export default index
