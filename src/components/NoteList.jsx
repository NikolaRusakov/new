import React from 'react';
import {connect} from 'react-redux'
import {ListGroup, Container, Row, Col, Button} from 'reactstrap';
import Form from './Form'
import NoteSidebar from "./NoteSidebar";

const actions = {
    ADD_NOTE: "ADD_NOTE",
    EDIT_NOTE: "EDIT_NOTE",
    DELETE_NOTE: "DELETE_NOTE",
    COLOR_CHANGE: "COLOR_CHANGE",
    COLORPICKER_CLOSE: "COLORPICKER_CLOSE",
    COLORPICKER_CLICK: "COLORPICKER_CLICK"
}

const TodoList = class TodoList extends React.Component {

    handleCreate = (data) => {
        this.props.dispatch({type: actions.ADD_NOTE, payload: data})
    };
    render = () => {
        const {notes} = this.props;
        return <div>
            <Container fluid={true}>
                <Row>
                    <Col xs={{size: 6, offset: 3}}>
                        <Form onSubmit={this.handleCreate}/>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={{size: 5}}>
                        {notes.map((item,index)=>
                        <NoteSidebar key={`sidebar-${index}`}{...item}/>)}

                    </Col>
                </Row>
            </Container>
        </div>
    };
};
/*export default connect((state) => ({list: state.todo.notes}))(TodoList);*/

