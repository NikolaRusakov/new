import React from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardHeader, CardSubtitle, Button, Row, Col, Container, CardFooter
} from 'reactstrap';


export default class NoteSidebar extends React.Component {

    render() {
        const {title, content, created,onDelete,onEdit} = this.props;
        const {r, g, b, a} = this.props.color;
        return (
            <div>
                <Card inverse style={{
                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                    borderColor: '#FFF111',
                    flex: 1,
                    margin: 10
                }}>
                    <CardHeader>
                        <Col className="text-right">
                            <Button color="warning" size="sm" name="delete" onClick={onDelete}>deletion</Button>
                            <Button color="warning" size="sm" name="edit" onClick={onEdit}>edit</Button>
                        </Col>
                    </CardHeader>

                    <CardBlock>
                        <CardTitle tag="h3" className="text-center">
                            {title}
                        </CardTitle>

                        <CardText className="text-center">
                            {content}
                        </CardText>

                    </CardBlock>

                    <CardFooter>
                        {created}
                    </CardFooter>
                </Card>
            </div>)
    }
}