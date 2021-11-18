import React from 'react';
import './Home.css';
import './index.css';
import Product from './Product.js';

const Home = () =>{
    return(
        <>
        <div className="home">
            <img className="home-image" 
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt='img'
            />
            {/* Prodect id title price rating image */}
            

        <div className="home-row">

            <Product
            id="5742"
            title="Happilo 100% Natural Premium Whole Cashews Value Pack Pouch, 500 g"
            price={519}
            rating={3}
            image="https://m.media-amazon.com/images/I/71P2iOAIi9L._SL1500_.jpg"
            />
      <Product
            id="0155"
            title="NIVEA Men Face Wash, Oil Control for 12hr Oil Control with 10x Vitamin C Effect, 150 ml"
            price={269}
            rating={4}
            image="https://m.media-amazon.com/images/I/618-NNYAHhL._SL1180_.jpg"
            />

</div>

<div className="home-row">

            <Product
            id="096"
            title="IKALL K101 Dual SIM, Orange"
            price={1849}
            rating={2}
            image="https://m.media-amazon.com/images/I/61vPDN9h0UL._SL1500_.jpg"
            />
      <Product
            id="865"
            title="Realme Buds Air Pro ANC TWS Earphones (White) |Bluetooth v5.0 | 25-Hour Playback | Touch Controls |Bass Boost+ | Wear Detection & IWP"
            price={4999}
            rating={3}
            image="https://m.media-amazon.com/images/I/51hGb+8I5eL._SL1500_.jpg"
            />
            <Product
            id="45687"
            title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage)"
            price={149999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71MmJNwZcML._SL1500_.jpg"
            />

</div>

<div className="home-row">

            <Product
            id="45822"
            title="AmazonBasics 109 cm (43 inches) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black)"
            price={29999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71AqQyCMmeL._SL1240_.jpg"
            />
</div>
        </div>
        </>
    );      
};
export default Home;