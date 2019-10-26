export const type = 'agregarTarea';
let siguienteTareaId = 0;

const agregarTarea = (text) => (
    {
        type,
        payload: text
    }
)

export default agregarTarea;