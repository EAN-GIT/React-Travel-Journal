import React from 'react'

import './App.css'
import cardData from "./assets/data"

import Card from './assets/components/card'
import Header from './assets/components/header'

function App() {
 console.log(cardData)
  const cards =cardData.map((item)=>{

    return (<Card 
        title ={item.title}
        location={item.location}
        mapUrl ={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description ={item.description}
        img={item.imageUrl}
    
    />)

  })

return <div>

  <Header />
  
  {cards}
</div>
}
export default App
