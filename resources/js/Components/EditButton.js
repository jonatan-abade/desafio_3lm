
import React from 'react'
import { Col } from 'react-bootstrap';
import { PencilAltIcon } from '@heroicons/react/outline'

export default function EditButton() {
    return (
        <Col><PencilAltIcon style={{ width: '2em', color: 'blue', cursor: 'pointer' }} /></Col>
    )
}