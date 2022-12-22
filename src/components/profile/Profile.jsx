import {motion} from 'framer-motion'
import React from 'react'
import me from "../../assets/WIN_20220827_21_23_42_Pro.webp"
import {Link} from "react-router-dom"
import { MdDashboard } from "react-icons/md";

const Profile = () => {
    const options = {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    };
    return (
      <section className="profile">
        <main>
          <motion.img src={me} alt="User" {...options} />
          <motion.h5 {...options} transition={{ delay: 0.3 }}>
            Zaid
          </motion.h5>
          <motion.div {...options} transition={{ delay: 0.5 }}>
            <Link
              to="/admin/dashboard"
              style={{
                borderRadius: 0,
                backgroundColor: "rgb(40,40,40)",
              }}
            >
              <MdDashboard /> Dashboard
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <Link to="/myorders">Orders</Link>
          </motion.div>
  
          <motion.button
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            Logout
          </motion.button>
        </main>
      </section>
    );
  };
  
  export default Profile;