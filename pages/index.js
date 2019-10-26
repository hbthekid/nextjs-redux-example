import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import wrapperRedux from '../components/WrapperRedux';
import {connect} from 'react-redux';
import agregarTarea from '../redux/actions/agregarTarea';
import ListaTareas from '../components/ListaTareas';
import 'antd/dist/antd.css';

const Index = (props) => {

    const [tarea, setTarea] = useState('');

    const recuperarInput = (e) => {
        setTarea(e.target.value)
    }

    const agregarTareas = (e) => {
        props.dispatch(agregarTarea(tarea));

    }

    return(
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Input onChange={recuperarInput} />      
                </Col>
                <Col span={12}>
                    <Button onClick={agregarTareas}>Agregar Tarea</Button> 
                </Col>
                <Row>
                    <ListaTareas tareas={props.tarea}/>
                </Row>
            </Row>  
    )
} 

export default wrapperRedux(connect(state=>state)(Index));