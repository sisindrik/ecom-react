// // import React from "react";
// // import './App.css'; 

// // function App() {
// //   const products = [
// //       { name: "Live-1", description:  "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "/ECOM-REACT/live/a.jpg", button: "Add" },
// //       { name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "/ECOM-REACT/live/b.jpg", button: "Add" },
// //       { name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "/ECOM-REACT/live/c.jpg", button: "Add" },
// //       { name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "/ECOM-REACT/live/d.jpg", button: "Add" },
// //       { name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "/ECOM-REACT/live/e.jpg", button: "Add" },
// //       { name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "/ECOM-REACT/live/f.jpg", button: "Add" },
// //   ];

// //   return (
    
// //     <div className="App">
// //       <h1>LIVE LIVE</h1>
// //       <hr />
// //       <div className="main">
// //         {products.map((product,index) => (
// //           <div key={index} className='container'>
// //             <img width='250' src={product.image} alt={product.name} />
// //             <div>{product.name}</div>
// //             <div>{product.description}</div>
// //             <div>Price: ${product.price}</div>
// //             <button>Add</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import './App.css'; 

// function App() {
//   const products = [
//       { id: 1, name: "Live-1", description:  "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "/ECOM-REACT/live/a.jpg" },
//       { id: 2, name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "/ECOM-REACT/live/b.jpg" },
//       { id: 3, name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "/ECOM-REACT/live/c.jpg" },
//       { id: 4, name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "/ECOM-REACT/live/d.jpg" },
//       { id: 5, name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "/ECOM-REACT/live/e.jpg" },
//       { id: 6, name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "/ECOM-REACT/live/f.jpg" },
//   ];

//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id);
//     if (existingItem) {
//       const updatedCart = cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     setTotal(total + product.price);
//   };

//   const removeFromCart = (productId) => {
//     const itemToRemove = cart.find(item => item.id === productId);
//     if (itemToRemove.quantity === 1) {
//       setCart(cart.filter(item => item.id !== productId));
//     } else {
//       const updatedCart = cart.map(item =>
//         item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       setCart(updatedCart);
//     }
//     setTotal(total - itemToRemove.price);
//   };

//   return (
//     <div className="App">
//       <h1>LIVE LIVE</h1>
//       <hr />
//       <div className="main">
//         {products.map((product) => (
//           <div key={product.id} className='container'>
//             <img width='250' src={product.image} alt={product.name} />
//             <div>{product.name}</div>
//             <div>{product.description}</div>
//             <div>Price: ${product.price}</div>
//             <button onClick={() => addToCart(product)}>Add</button>
//           </div>
//         ))}
//       </div>
//       <hr />
//       <div>
//         <h2>Cart</h2>
//         {cart.map(item => (
//           <div key={item.id}>
//             <div>{item.name} - ${item.price} x {item.quantity}</div>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))}
//         <div>Total: ${total}</div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Live-1", description: "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "/ecom-react/live/a.jpg" },
    { id: 2, name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "/ecom-react/live/b.jpg" },
    { id: 3, name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "/ecom-react/live/c.jpg" },
    { id: 4, name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "/ecom-react/live/d.jpg" },
    { id: 5, name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "/ecom-react/live/e.jpg" },
    { id: 6, name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "/ecom-react/live/f.jpg" },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productId) => {
    const existingItemIndex = cart.findIndex((item) => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const productToAdd = products.find((product) => product.id === productId);
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const changeQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  return (
    <div className="App">
      <h1>LIVE LIVE</h1>
      <img onClick={() => setShowCart(!showCart)} src="https://img.freepik.com/premium-photo/shopping-bag-with-cart-symbol-wheels_172429-879.jpg?w=740" width="35px" height="30px" alt="Cart" />
      <hr />
      <div className="main">
        {products.map((product) => (
          <div key={product.id} className="container">
            <img width="250" src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Price: ${product.price}</div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <hr />
      {showCart && (
        <div id="mycart">
          {cart.map((item) => (
            <div key={item.id}>
              <img width="250" src={item.image} alt={item.name} />
              <div>{item.name}</div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <div className="quantity-control">
                <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
                <div className="count">{item.quantity}</div>
                <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          ))}
          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
