import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
    const {foodList, increaseQty, decreaseQty, quantities} = useContext(StoreContext);
    
    //cart items
    const cartItems = foodList.filter(food => quantities[food.id] > 0);

    //calculating
    const subTotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0);
    const shipping = subTotal === 0 ? 0.0: 10;
    const tax = subTotal * 0.1; //10 percent tax
    const total = subTotal + shipping + tax;

  return (
    <div className="container py-5">
    <h1 className="mb-5">Your Shopping Cart</h1>
    <div className="row">
        <div className="col-lg-8">
{
    cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        <div className="card mb-4">
        <div className="card-body">
            {cartItems.map((food) => (
                            <div key={food.id} className="row cart-item mb-3">
                            <div className="col-md-3">
                                <img src={food.imageUrl} alt={food.name} className="img-fluid rounded" width={100}/>
                            </div>
                            <div className="col-md-5">
                                <h5 className="card-title">{food.name}</h5>
                                <p className="text-muted">Category: {food.category}</p>
                            </div>
                            <div className="col-md-2">
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => decreaseQty(food.id)}>-</button>
                                    <input style={{"maxWidth":"100px"}} type="text" className="form-control  form-control-sm text-center quantity-input" value={quantities[food.id]} readOnly/>
                                    <button className="btn btn-outline-secondary btn-sm" type="button" onClick={() => increaseQty(food.id)}>+</button>
                                </div>
                            </div>
                            <div className="col-md-2 text-end">
                                <p className="fw-bold">R$ {(food.price * quantities[food.id]).toFixed(2)}</p>
                                <button className="btn btn-sm btn-outline-danger">
                                        <i className="bi bi-trash"></i>
                                    </button>
                            </div>
                        </div>
            ))}
            <hr/>

        </div>
    </div>
    )
}

 
            <div className="text-start mb-4">
                <a href="#" className="btn btn-outline-primary">
                    <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </a>
            </div>
        </div>
        <div className="col-lg-4">

            <div className="card cart-summary">
                <div className="card-body">
                    <h5 className="card-title mb-4">Order Summary</h5>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <span>$199.97</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>$10.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Tax</span>
                        <span>$20.00</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>$229.97</strong>
                    </div>
                    <button className="btn btn-primary w-100">Proceed to Checkout</button>
                </div>
            </div>

        
        </div>
    </div>
</div>
  )
}

export default Cart