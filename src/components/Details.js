import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {BtnContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, company, img, info, nickname, 
                        colorway, price, inCart } = value.details;

                    return (
                        <div className="container py-5">
                            {/** Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center 
                                text-slanted text-royal my-5">
                                    <h5>{title}</h5>
                                </div>
                            </div>

                            {/** Product Info */}
                            <div className="row">
                                {/** Product Img */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Product" />
                                </div>
                                {/** Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 
                                text-capitalize">
                                    <h4 className="text-uppercase">Nickname &nbsp;:&nbsp; 
                                        <span className="text-muted"> {nickname}</span>
                                    </h4>
                                    <h4 className="text-uppercase">Colorway &nbsp;:&nbsp; 
                                        <span className="text-muted"> {colorway}</span>
                                    </h4>
                                    <h4 className="text-uppercase  mt-3 mb-2">Company &nbsp;:&nbsp; 
                                        <span className="text-muted"> {company}</span>
                                    </h4>
                                    <h4 className="text-royal">
                                        <strong>
                                            Price : <span>₦</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product Info : 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/** Buttons */}
                                    <div>
                                        <Link to='/'>
                                            <BtnContainer>
                                                Back to Products
                                            </BtnContainer>
                                        </Link>
                                        <BtnContainer cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? 'In Cart' : 'Add to Cart'}
                                        </BtnContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
