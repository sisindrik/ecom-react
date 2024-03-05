import React from "react";
import './App.css'; 

function App() {
  const products = [
      { name: "Live-1", description:  "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "a.jpg", button: "Add" },
      { name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "b.jpg", button: "Add" },
      { name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "c.jpg", button: "Add" },
      { name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "d.jpg", button: "Add" },
      { name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "e.jpg", button: "Add" },
      { name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "f.jpg", button: "Add" },
  ];

  return (
    
    <div className="App">
      <h1>LIVE LIVE</h1>
      <hr />
      <div className="main">
        {products.map((product,index) => (
          <div key={index} className='container'>
            <img width='250' src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Price: ${product.price}</div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;