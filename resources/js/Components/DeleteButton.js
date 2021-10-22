import React from 'react'
import { Col } from 'react-bootstrap';
import { TrashIcon } from '@heroicons/react/outline'

export default function DeleteButton() {
    return (
        <Col><TrashIcon style={{ width: '2em', color: 'red', cursor:'pointer' }} /></Col>
    )
}