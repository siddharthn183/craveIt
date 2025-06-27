import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>   
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quisquam aut quia, nihil ad explicabo accusamus recusandae? Sit voluptatem sint nam ullam quisquam labore repudiandae? Vero reiciendis doloremque totam natus.</p>
        <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return(
                        <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default ExploreMenu;