import {useNavigate, Form, redirect} from 'react-router-dom'
import {eliminarLibro} from '../api/Crud'
export async function action({params}){
    eliminarLibro(params.libroId)
    return redirect('/')
}
function Libro({libro}) {
    const navigate = useNavigate();
    const {titulo, autor, genero, fecha, id} = libro;
  return (

        <tr className='border-b text-center'>
            <td className='p-6 '> <p className='text-2xl text-gray-800'> {titulo}</p> 
             </td>
             <td> <p className='text-xl text-gray-600'> {autor} </p> </td>
            <td className='p-6'> <p className='text-xl text-gray-600'> {genero} </p> 
             </td>
            <td className='p-6'> <p className='text-xl text-gray-600'> {fecha} </p> 
             </td>
             
            <td className='p-6 gap-3'> 

                <button type='button' className='flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs mb-3 uppercase font-bold mt-2' 
                onClick={() => navigate(`/libros/${id}/editar`)}>
                    Editar
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-4 h-4 ml-2'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l.05 12" />
                    </svg>

                </button>
                <Form method='post'
                action={`/libros/${id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm('¿Deseas eliminar este registro?')){
                        e.preventDefault();
                    }
                }}
                >
                    
                <button type='submit' className='flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold'
                >
                    Eliminar
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-4 h-4 ml-2'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                </Form>
            </td>
        </tr>
  )
}

export default Libro
