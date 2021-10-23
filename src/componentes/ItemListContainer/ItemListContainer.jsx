import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const ItemListContainer = (props) => {
    console.log(props)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgname}/>
                <Card.Body>
                    <Card.Title>{props.prodname}</Card.Title>
                    <Card.Text>
                        {props.proddesc}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>            
        </div>
    )
}
