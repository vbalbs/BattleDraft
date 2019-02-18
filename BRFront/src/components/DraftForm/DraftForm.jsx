import React from 'react';
import { Form, Button } from 'react-bootstrap'
import './draftform.scss';

export default class DraftForm extends React.Component {
    render() {
        return ( 
        
        <Form className="draft-form">
            <Form.Group controlId="formTeamA">
                <Form.Control size="lg" type="text" placeholder="TEAM A" />
            </Form.Group>

            <Form.Group controlId="formTeamB">
                <Form.Control size="lg" type="text" placeholder="TEAM B" />
            </Form.Group>

            <Form.Group id="formCheckbox">
                <Form.Check
                    inline
                    type="radio"
                    label="BO1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    inline
                    type="radio"
                    label="BO3"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
            </Form.Group>

            <Button variant="success" type="submit" size="lg">
                Confirm
            </Button>
        </Form>

        );
    }
}
