export async function obtenerLibros() {
    const response = await fetch(import.meta.env.VITE_API_URL)
    const libros = await response.json()
    return libros
  }
  
  export async function crearLibro(libro) {
      try {
          const respueta = await fetch(import.meta.env.VITE_API_URL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(libro)
          });
          await respueta.json();
      }catch(error){
          console.error(error);
      }
  }
  
  export async function obtenerLibro(id) {
      try {
          const respueta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
          const libro = await respueta.json();
          return libro;
      } catch (error) {
          console.error(error);
      }
  }
  
  export async function actualizarLibro(id, libro) {
      try {
          const respueta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
              method: 'PUT',
              body: JSON.stringify(libro),
              headers: {
                  'Content-Type': 'application/json'
              },
              
          });
          await respueta.json();
      } catch (error) {
          console.error(error);
      }
  }
  
  export async function eliminarLibro(id) {
      try {
          const respueta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
              method: 'DELETE'
          });
          await respueta.json();
      } catch (error) {
          console.error(error);
      }
  }