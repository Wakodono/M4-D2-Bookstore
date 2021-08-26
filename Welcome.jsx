import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function MyJumbotron() {
    return <Jumbotron>
        <h1>WAKOSTONES!</h1>
        <p>
            Non finction and a little manga.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
}