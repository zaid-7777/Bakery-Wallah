import React from 'react'

const OrderDetails = () => {
  return(
  <section className="orderDetails">
    <main>
        <h1>Order Details</h1>
        <div>
            <h1> Shipping</h1>
            <p> 
                <b>Address</b>
                {"sgwujw 122 3kk3"}
            </p>
        </div>
        <div>
            <h1>Contact</h1>
            <p> 
                <b>Name</b>
                {"Zaid"}
            </p>
            <p>
                <b>Phone</b>
                {2134498389}
            </p>
        </div>
        <div>
            <h1>Status</h1>
            <p> 
                <b>Order Status</b>
                {"Processing"}
            </p>
            <p>
                <b>Placed At</b>
                {"13.2.22"}
            </p>
            <p>
                <b>Delivered At</b>
                {"14.2.22"}
            </p>
        </div>
        <div>
            <h1>Payment</h1>
            <p> 
                <b>Payment Method</b>
                {"Online"}
            </p>
            <p>
                <b>Payment Reference</b>
                #{"1048820"}
            </p>
            <p>
                <b>Paid At</b>
                {"14.2.22"}
            </p>
        </div>
        <div>
            <h1>Amount</h1>
            <p> 
                <b>Items Total</b>{2134}
            </p>
            <p> 
                <b>Shipping Charges</b>{122}
            </p>
            <p>
                <b>Tax</b>
                {232}
            </p>
            <p>
                <b>Total Amount</b>
                {2134+122+232}
            </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
  </section>
  );
}

export default OrderDetails