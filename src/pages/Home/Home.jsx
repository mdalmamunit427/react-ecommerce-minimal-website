import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Newsletter from './Newsletter'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Products/>
        <Collections/>
        <BestSellers/>
        <Newsletter/>
    </div>
  )
}

export default Home