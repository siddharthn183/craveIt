import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import { food_list } from '../../assets/frontend_assets/assets'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    
    return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {
                food_list.map((item, index) => {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay