import React from 'react'
import {Link} from "react-router-dom"
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/WIN_20220827_21_23_42_Pro.webp"
const About = () => {
  return (
    <section className="about">
      <main>
        <h1> About Us</h1>
        <article>
          <h4> Bakery Wallah</h4>
          <p> Bakery products fresh and tasty at your doorsteps</p>
          <p> Explore and enjoy! </p>
          <Link to="/"> 
            <RiFindReplaceLine/> 
          </Link>
        </article>
        <div>
          <h2> Founder </h2>
          <article>
            <div>
              <img src={me} alt="Founder"/>
              <h3> Zaid Md Arif</h3>
            </div>
            <p> An initiative for the local bakery's throughout Kolkata</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About