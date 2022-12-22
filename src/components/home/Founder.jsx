import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/WIN_20220827_21_23_42_Pro.webp";
const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0

        },
        whileInView:{
            x:0,
            opacity:1,
        }
    }
  return( 
  <section className="founder">
    <motion.div
    {...options}>
    <img src={me} alt="Founder" height={200} width={200}/>
    <h3>
      Zaid Md Arif  
    </h3>
    </motion.div>
  </section>
  );
};

export default Founder