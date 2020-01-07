import React, {Component} from 'react';
import{
    Button, Modal, ModalHeader, MOdalody, Form, FormGroup,
    Label,Input
} from 'reactstrap';

import {connect} from 'react-redux';
import { addProduct } from '../../actons/productActon';

class ProductModal extends Component {

    state = {
        modal: false,
        image: '',
        name: '',
        description:'',
        price:0,
        quantity:0,
        status: false
    }

    Handletoggle = () =>{
        this.setState({
            modal:  !this.state.modal
        });
    }

    render(){
        return(
            <div>
                <Button  style={{backgroundColor:'#32bcdb'}}
                          onClick={this.handleToggle}  >
                    Add Product
                </Button>
            </div>
        );
    }

}

export defualt connect({addProduct})(ItemModal);