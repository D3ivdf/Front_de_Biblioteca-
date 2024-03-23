const Formulario = ({libro}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="titulo"
                >Titulo:</label>
                <input 
                    id="titulo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="titulo del libro"
                    name="titulo"
                    defaultValue={libro?.titulo}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="autor"
                >Autor:</label>
                <input 
                    id="autor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="autor del libro"
                    name="autor"
                    defaultValue={libro?.autor}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="genero"
                >genero:</label>
                <input 
                    id="genero"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="genero del libro"
                    name="genero"
                    defaultValue={libro?.genero}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >fecha:</label>
                <input 
                    id="fecha"
                    type="date"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="fecha del libro"
                    name="fecha"
                    defaultValue={libro?.fecha}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="paginas"
                >Paginas:</label
                >
                <input 
                    id="paginas"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="paginas del libro"
                    name="paginas"
                    defaultValue={libro?.paginas}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >id:</label>
                <input   
                    id="id"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="id del libro"
                    name="id"
                    defaultValue={libro?.id}
                />
            </div>
        </>
    )
}

export default Formulario