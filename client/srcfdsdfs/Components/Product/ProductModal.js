import React, {Component} from 'react';

import{
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, FormText,
    Label,Input, Col, Row
} from 'reactstrap';
import { addProduct } from '../../actons/productActons';
import {connect} from 'react-redux';


class ProductModal extends Component {

    state = {
        modal: false,
        image: '',
        name: '',
        description:'',
        price:0,
        quantity:0,
        date:'',
        status: false
    }

    Handletoggle = () =>{
        this.setState({
            modal:  !this.state.modal
        });
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.description,
            [e.target.price]: e.target.price,
            [e.target.quantity]: e.target.quantity,
            [e.target.status]: e.target.status,
            [e.target.date]: e.target.date,
            [e.target.image]: e.target.image
        });
    }

    render(){
        return(
            <div>
                <Button  style={{backgroundColor:'#32bcdb'}}
                          onClick={this.handleToggle}  >
                    Add Product
                </Button>
                <Modal
                 isOpen={this.state.modal}
                 toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> 
                        Add a New Product
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label for="name">Enter Product Name</Label>
                            <Input plaintext value="Some plain text/ static value"
                                    onChange={this.onChange}
                             />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="description">Product Description</Label>
                            <Input type="textarea" name="description" id="description"
                                      onChange={this.onChange}
                             />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Price"
                                        onChange={this.onChange}
                                    />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="quantity">Enter Quantity</Label>
                                    <Input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        placeholder="Enter Quantity"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Date">Date</Label>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="Date"
                                        placeholder="Enter Date"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="exampleSelect">Status</Label>
                                <Input type="select" name="status" id="status"   onChange={this.onChange}>
                                    <option>Available</option>
                                    <option>Not Available</option>
                                </Input>
                            </FormGroup>
                            </Col>
                        </Row>

                            <FormGroup>
                                <Label for="image">Upload Product Image</Label>
                                <Input type="file" name="image" id="image"   onChange={this.onChange} />
                                <FormText color="muted">
                                    Image size should not be more then 25 MB
                                </FormText>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

export default connect({addProduct})(ProductModal);