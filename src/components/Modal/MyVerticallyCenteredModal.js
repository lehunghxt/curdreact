import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props?.children}
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn btn-sm btn-danger' onClick={props?.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal

