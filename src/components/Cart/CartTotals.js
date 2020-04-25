import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';


export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, CartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto 
                    col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-outline-danger 
                            text-uppercase mb-3 px-5" type="button"
                            onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-capitalize px-3">
                                SubTotal : 
                            </span>
                            <strong>₦ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-capitalize px-3">
                                Tax : 
                            </span>
                            <strong>₦ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-capitalize px-3">
                                Total : 
                            </span>
                            <strong>₦ {CartTotal}</strong>
                        </h5>
                        <PaypalButton total={CartTotal} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
