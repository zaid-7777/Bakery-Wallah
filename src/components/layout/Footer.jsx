import React from 'react'
import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Footer = () => {
  return( 
    <footer>
        <div>
            <h2>Bakery Wallah</h2>
            <p> Fresh and tasty bakery products at your doorstep!</p>
            <br />

            <em> We crave for genuine feedback.</em>
           <strong> All rights reserved @BakeryWallah</strong>
        </div>
        <aside>
             <h4> Follow Us</h4>
             <a href="https://youtube.com">
                <AiFillYoutube/>
             </a>
             <a href="https://instagram.com">
                <AiFillInstagram/>
             </a>
        </aside>
    </footer>
  );
}

export default Footer