import React from 'react'
import MenuCard from "./MenuCard";
import cake from "../../assets/fruit_cake.png"
import biscuits from "../../assets/bakery-biscuit-500x500.png"
import muffins from "../../assets/Chocolate-Chip-Muffins-11-735x1103.png"
const Menu = () => {
  const addToCardHandler=(itemNum)=>{};
  return(<section id="menu">
    <h1>MENU</h1>
    <div>
      <MenuCard 
        itemNum={1} 
        burgerSrc={cake} 
        price={200} 
        title="Christmas Fruit Cake"
        handler={addToCardHandler}
        delay={0.1}
        />
        <MenuCard 
        itemNum={2} 
        burgerSrc={biscuits} 
        price={150} 
        title="Fresh Nuts Cookies"
        handler={addToCardHandler}
        delay={0.5}
        />
        <MenuCard 
        itemNum={3} 
        burgerSrc={muffins} 
        price={400} 
        title="Chocolate chips muffins"
        handler={addToCardHandler}
        delay={0.8}
        />
    </div>
  </section>
  );
};

export default Menu