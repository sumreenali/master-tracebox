import React , {Component} from 'react';
import { Table,Button, ButtonGroup } from 'reactstrap';
// import {CSSTransition, TransitionGroup } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {getProducts} from '../../actions/productActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './product.css'

const styles = {
    transition:'opacity 3s ease',
    backgroundColor:'red'
};
class Product extends Component{
    state ={
         opacity:1
    }

    handleAdd = e =>{
        const image = prompt('Enter Product Iame');
        const name = prompt('Enter Product Name');
        const description = prompt('Enter Product Description');
        const price = prompt('Enter Product Price');
        const quantity = prompt('Enter Product Quantity');
        const status = prompt('Enter Product Status');
        
        if(name && image && description && price && quantity  && status) {
            this.setState( state =>({
                product: [...state.product,{id:uuid(), name, image, description, price , date:Date.now(), quantity, status}]
            }) 
            )
            console.log(this.state.product.id)
        }
    }

    handleRemove = (product, id) =>{
        this.setState(state => ({
             opacity:0,
            product: state.product.filter(product => product.id !==id)
            
        }));
       
    }

    componentDidMount(){
        //calling action 
        this.props.getProducts();
    }
    render(){
        const { product } = this.props.product;
         let productCount = 1;
         let animation = 'default';
        return(
            <div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <h3 className="h3">Product Details</h3>
                    </div>
                    <div className="col-sm-2 " style={{ right:"0", padding:0}}>
                        <Button style={{backgroundColor:'#32bcdb'}}
                          onClick={this.handleAdd}  
                        > Add Product </Button>
                    </div>
                </div>
                
             <Table hover bordered responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {/* <th>id</th> */}
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {product.map(({id, name , image , description, price, quantity, date , status }) => (
                         <tr key={id} stlye={{...styles, opacity:this.state.opacity}}>
                        {/* <tr key={id}> */}
                            <th scope="row">{productCount++}</th>
                            {/* <td>{id}</td> */}
                            <td>{image}</td>
                            <td>{name}</td>
                            <td>{description}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>{date}</td>
                            <td>{status}</td>
                            <td align="center">
                                <ButtonGroup size="md">
                                    <Button style={{backgroundColor:"#e39e44"}}>Edit</Button>
                                    <Button style={{backgroundColor:"#c22370"}} 
                                    onClick={() =>this.handleRemove(product,id)}>Delete</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    
                    ))}
                    
                </tbody>
            </Table>
            </div>
        );
    }
}

Product.propTypes = {
    //actions as props
    getProducts: PropTypes.func.isRequired,
    //states as props
    product: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    product: state.product
})
export default connect(mapStateToProps, {getProducts})(Product);
