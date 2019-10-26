//Esta linea especifica que una accion no puede cambiar su nombre.
export const type = 'agregarTarea';

/*Antes mis ojos un action es un intermediario entre el reducer y el componente que 
necesita guardar estado, con el se tiene un orden de las "acciones" que se hacen en la
aplicacion. Pueden notar que simplemente es una funcion que devuelve un objeto! con un
tipo de accion y un payload(este compa contiene la informacion que el reducer necesita).
*/
let siguienteTareaId = 0;

const agregarTarea = (text) => (
    {
        type,
        payload: text
    }
)

export default agregarTarea;