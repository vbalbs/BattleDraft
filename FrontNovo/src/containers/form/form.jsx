import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './form.scss';

class DraftForm extends React.Component {
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
                <Form.Check checked 
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

            <Button variant="success" className="confirm-button" type="submit" size="lg"  onClick={() => this.props.changePage()}>
                CONFIRM
            </Button>
        </Form>
        );
    }
}

const mapStateToProps = ({ counter }) => ({
  })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
    },
    dispatch
  )
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftForm);