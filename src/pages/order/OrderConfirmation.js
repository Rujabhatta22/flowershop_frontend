
import React from 'react';
import './orderConfirmation.css';
const ProceedToPaymentPage = () => {
  return (
    <div className="proceedToPaymentContainer">
      <div className="paymentDetails">
        <h2 className="paymentTitle">Proceed to Payment</h2>
        <div className="paymentForm">
          <div className="formGroup">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" className="inputField" />
          </div>
          <div className="formGroup">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" className="inputField" />
          </div>
          <div className="formGroup">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" className="inputField" />
          </div>
          <button className="paymentButton">Pay Now</button>
        </div>
      </div>
      <div className="orderSummary">
        <h3 className="summaryTitle">Order Summary</h3>
        <div className="orderItems">
          <div className="orderItem">
            <span className="itemName">Roses Bouquet</span>
            <span className="itemPrice">$25.99</span>
          </div>
          <div className="orderItem">
            <span className="itemName">Lilies Bouquet</span>
            <span className="itemPrice">$50.00</span>
          </div>
        </div>
        <div className="totalAmount">
          <p className="totalLabel">Total Amount</p>
          <p className="totalPrice">$75.99</p>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPaymentPage;
