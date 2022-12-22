import React from 'react'
import { Link } from "react-router-dom";
import cake from "../../assets/fruit_cake.png"
import biscuits from "../../assets/bakery-biscuit-500x500.png"
import muffins from "../../assets/Chocolate-Chip-Muffins-11-735x1103.png"

const CartItem=({value,title,img,increment,decrement})=>(
    <div className="cartItem">

        <div>
            <h4>{title} </h4>
            <img src={img} alt="Item"/>
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value}/>
            <button onClick={increment}>+</button>
        </div>
    </div>
    );
    const Cart = () => {
        const increment=(item)=>{};
        const decrement=(item)=>{};
        return(
        <section className="cart">
            <main>  
                <CartItem
                    title={"Christmas Cake"}
                    img={cake}
                    value={0}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)}
                />
                <CartItem
                    title={"Cookies & Nuts"}
                    img={biscuits}
                    value={0}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)}
                    />
                <CartItem
                    title={"Chocolate chips muffins"}
                    img={muffins}
                    value={0}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)}
                />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
        )
};

export default Cart;