import React from 'react'
import Carousel from '../../components/HeroSection/Carousel'
import PkgCrd from '../../components/PackageCard/PkgCrd'
import Card from '../../components/ProductCard/Card'
import List from '../../components/CardCarouselList/List'
import Footer from '../../components/Footer/Footer'
import { product_list } from '../../../data/product'
const Home = () => {
  return (
    <div>
        <Carousel/>
        <PkgCrd/>
        <div className="space-y-10 py-20 flex flex-col justify-center mx-auto ">
          <List data={product_list} sectionName={"Best Sellers"} sectionSubName={"Browse our Best Sellers"}/>
        </div>
        
    </div>
  )
}

export default Home;