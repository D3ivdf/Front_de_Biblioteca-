import { Form, useNavigate, useLoaderData, redirect, useActionData } from "react-router-dom";
import { obtenerLibro, actualizarLibro } from "../api/Crud";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
export async function loader({ params }){
   const libro = await obtenerLibro(params.libroId);
    console.log(libro);
    if(Object.values(libro).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    return libro;
}
export async function action({request, params}) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
    const errores = []
    const paginasInt = parseInt(data.paginas);
    const idInt = parseInt(data.id);
  
    if (isNaN(paginasInt) || isNaN(idInt)) {
      return ['Por favor, introduce números válidos para las páginas y el id'];
    }
  
    // Llama a `crearLibro` con los datos del formulario, incluyendo `paginas` e `id` como números enteros
    data.paginas = paginasInt;
    data.id = idInt;
    
    //let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //validacion de email
    //validaciond e campos vacios
    if(Object.values(data).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
    if(Object.keys(errores).length){
      return errores
    }
    console.log(data)
    //actualizar libro
    await actualizarLibro(params.libroId, data)
    // ese redireccionamiento solo se usa en el action
    return redirect('/')
    
}
function EditarLibro() {
    const navigate = useNavigate();
    const libro = useLoaderData();
    const errores = useActionData();
  return (
    <div>
            <h1 className="text-4xl font-bold text-blue-900">Editar Clientes</h1>
            <p className="text-xl text-gray-500 mt-3">A continuacion podras editar los datos de un libro</p>
            <div className="flex justify-end">
                <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-lg"
                onClick={() => navigate(-1)}>
                volver
                
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
            <Form
                method="post"
                noValidate
            >
                <Formulario 
                libro={libro}
                />
                <input 
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                value={'Actualizar libro'}
                />
            </Form>
            </div>
    </div>
  )
}

export default EditarLibro
