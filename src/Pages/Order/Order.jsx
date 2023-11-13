import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import oderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ['salad','pizza', 'soup','dessert', 'drinks']
  const {category}= useParams()
  const initialIndex= categories.indexOf(category)
    const [tabIndex, settabIndex]= useState(initialIndex)
    const [menu]= useMenu()
    const Dessert = menu.filter(item=>item.category=== 'dessert')
  const soup = menu.filter(item=>item.category=== 'soup')
  const salad = menu.filter(item=>item.category=== 'salad')
  const pizza = menu.filter(item=>item.category=== 'pizza')
  const drinks = menu.filter(item=>item.category=== 'drinks')
  return (
    <div>
       <Helmet>
        <title>Bistro Boss| Order Food</title>
      </Helmet>
      <Cover img={oderCover} title="order food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
         <OrderTab items={salad}>

         </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}>

        </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}>

       </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={Dessert}>

        </OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}>

        </OrderTab> 
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
