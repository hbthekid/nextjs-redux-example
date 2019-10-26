import 'antd/dist/antd.css';

const ListaTarea = (props) => {

    const tareas = props.tareas.map((tarea, index) =>(
        <div key={index}>{tarea}</div>
    ))

    return(
        <div>
            {tareas}
        </div>
    )

}

export default ListaTarea;