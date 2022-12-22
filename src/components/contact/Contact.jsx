import {motion} from 'framer-motion';
import React from 'react'
import cake from "../../assets/fruit_cake(2).png"
const Contact = () => {
  return(
    <section className="contact">
   <motion.form
   
   initial={{
    x:"-100vw",
    opacity:0

   }}
    animate={{
      x:0,opacity:1,
    }}

    transition={{delay:0.2}}
   >
    <h2> Contact Us</h2>
    <input type="text" placeHolder="Name"/>
    <input type="email" placeholder="Email"/>

    <textarea placeholder="Message...." cols="30" rows="10"></textarea>
    <button type="submit">Send</button>
    </motion.form>
    <motion.div className="contactFormBorder"
    initial={{
      x:"100vw",
      opacity:0
    }}
    
    animate={{
      x:0,
      opacity:1
    }}

    transition={{delay:0.2}}
    >
      <motion.div
      initial={{
        y:"-100vh",
        x:"50%",
        opacity:0,
      }
      }
      animate={{
        x:"50%",
        y:"-50%",
        opacity:1,
      }}
      transition={{
        delay:0.5,
      }}
      >
        <img src={cake} alt="Burger" />
      </motion.div>

    </motion.div>
  </section>
  ); 
}

export default Contact