import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;

        return (
            <DijithaleProducts className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                    </div> 
                    <ProductConsumer>
                        {value => (                    
                            <div className="img-container p-5"
                                onClick={() => value.handleDetail(id)}>
                                <Link to='/details'>
                                    <img className="card-img-top" 
                                    src={img} alt="product" />
                                </Link>

                                <button className="cart-btn" 
                                    disabled={inCart ? true : false}
                                    onClick={() => {value.addToCart(id);
                                    value.openModal(id); }}
                                >
                                    {inCart ? 
                                    (<p className="text-capitalize mb-0" disabled>{" "}In Cart</p>): 
                                    (<i className="fas fa-shopping-bag"></i>)}
                                </button>
                            </div>
                        )}
                        
                    </ProductConsumer>
                        {/** Card Footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <h5 className="text-royal font-italic mb-0 align-self-center">
                                <span className="ml-1">₦</span>{price}
                            </h5>
                        </div>  
                </div>
            </DijithaleProducts>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title:PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired  
}

const DijithaleProducts = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}

.card-header,
.card-footer{
    border-top: transparent;
    background: transparent;
    transition: all 1s linear;
}

&:hover{
    .card{
        border: 0.04rem solid var(--primary-2);
        box-shadow: 2px, 2px, 5px 0px rgba(0, 0, 0);
    }

    .card-header,
    .card-footer{
        background: var(--navbar);
        margin-left: 1rem;
    }
}

.img-container{
    position: relative;
    overflow: hidden;
}

.card-img-top{
    transition: all 1s linear;
}

.img-container:hover .card-img-top{
    transform:scale (1.2);
}

.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: var(--primary-2);
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .7s linear;
}

.cart-btn:hover{
    background: var(--mainbg-color);
    color: var(--main-bg);
    cursor: pointer;
}

.img-container:hover .cart-btn{
    transform: translate(0, 0);
}
`;