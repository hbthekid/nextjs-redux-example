import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado'
    },
    {
        title: 'Dificultad',
        dataIndex: 'dificultad',
        key: 'dificultad'
    },
    {
        title: 'Accion',
        dataIndex: 'accion',
        key: 'accion'
    }
  ];
  const data = [

  ]

const ListaTarea = (props) => {

    const tareas = props.tareas.map((tarea, index) =>(
        {
            key: index,
            name: tarea,
            estado: 'borrachera',
            dificultad: 'brutal',
            accion: 'amonthat',
        }
    ))

    return(
        <Table columns={columns} dataSource={tareas} />
    )

}

export default ListaTarea;