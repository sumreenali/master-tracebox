import React, {Component} from 'react';

import{
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    FormText,
    Label,
    Input, 
    Col, 
    Row,
    ModalFooter,
    Fade,
    Card,
    CardHeader, 
    CardFooter, 
    CardBody,
} from 'reactstrap';
import { addProduct } from '../../actions/productActions';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class ProductModal extends Component {

    state = {
        modal: false,
        fadeIn: false,
        image: '',
        name: '',
        description:'',
        price:0,
        quantity:0,
        date:'',
        status: false,
        msg: null
        
    }

    handleToggle = () =>{
        this.setState({
            modal:  !this.state.modal,
            fadeIn: !this.state.fadeIn
        });
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,       
        });     
      console.log(this.state.name);
    }
  
  
   
   
    
   
   // [e.target.image]: e.target.value
    onSubmit = e =>{
        e.preventDefault();

        const newProduct = {
            id:uuid(),
            name:this.state.name,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity,
            status: this.state.status,
            date:this.state.date,
            // image:this.state.image
        }
        
     
        console.log('clicked');

        // //add Product via addProduct action
         this.props.addProduct(newProduct);
        // //Close Modal
         this.handleToggle();
        
    }
    render(){
        return(
            <div>
                <Button  style={{backgroundColor:'#32bcdb'}}
                          onClick={this.handleToggle}  >
                    Add Product
                </Button>
                <Fade in={this.state.fadeIn} >
                    <Modal
                    isOpen={this.state.modal}
                    toggle={this.handleToggle}
                    backdroptransitiontimeout={200}
                     style={{transition: 'all 3s in ease' }}
                    >  
                        <ModalHeader  toggle={this.handleToggle}  > 
                            Add a New Product
                        </ModalHeader>
                        <Card body>
                       
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <ModalBody>
                                <Label for="name">Enter Product Name</Label>
                                <Input type="text" 
                                        name="name"
                                        id="name"
                                        placeholder="Enter Product Name"
                                onChange={this.onChange}
                                />
                            
                                <Label for="description">Product Description</Label>
                                <Input type="textarea" name="description" id="description"row="6"
                                        onChange={this.onChange}
                                />
                
                            <Row>
                                <Col md={6}>
                                        <Label for="price">Price</Label>
                                        <Input
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder="Enter Price"
                                            onChange={this.onChange}
                                        />       
                                </Col>
                                <Col md={6}>       
                                    <Label for="quantity">Enter Quantity</Label>
                                        <Input
                                            type="number"
                                            name="quantity"
                                            id="quantity"
                                            placeholder="Enter Quantity"
                                            onChange={this.onChange}
                                        />      
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                        <Label for="Date">Date</Label>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="Date"
                                            placeholder="Enter Date"
                                            onChange={this.onChange}
                                        />
                                </Col>
                                <Col md={6}>
                               
                                    <Label for="exampleSelect">Status</Label>
                                    <Input type="select" name="status" id="status"   onChange={this.onChange}>
                                        <option>Available</option>
                                        <option>Not Available</option>
                                    </Input>
                               
                                </Col>
                            </Row>

                           {/*
                                    <Label for="image">Upload Product Image</Label>
                                    <Input type="file" name="image" id="image"   onChange={this.onChange} />
                                    <FormText color="muted">
                                        Image size should not be more then 25 MB
                                    </FormText> */}
                               
                        </ModalBody>
                        <ModalFooter >
                            <Button  style={{backgroundColor:'#32bcdb'}}> Add Product</Button>
                            <Button color="secondary"
                                    style={{marginRight:'1.5rem', paddingLeft:'1.5rem', paddingRight:'1.5rem', backgroundColor:"#de830b"}} 
                                    onClick={this.handleToggle}>Cancel</Button>
                        </ModalFooter>
                        </FormGroup>
                            </Form>
                        </Card>
                    </Modal>
                </Fade>
            </div>
        );
    }

}

// Product.propTypes = {
//     //actions as props
//     getProducts: PropTypes.func.isRequired,
//     deleteProduct: PropTypes.func.isRequired,
//     //states as props
//     product: PropTypes.object.isRequired,
// }

const mapStateToProps = state =>({
    product: state.product,
    error: state.error
});

export default connect(mapStateToProps,{addProduct})(ProductModal);