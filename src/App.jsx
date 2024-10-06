import { useState, useEffect } from 'react'
import './App.css'
import data from '../assets/data.json'

function App() {

  const [productos, setProductos] = useState();

  useEffect(()=>{
    const getProductos = async() => {
      setProductos(data)
    }
    getProductos();

    console.log("PRODUCTOS", productos)
  },[productos])

  const formatMoney = (dinero) => {
    return Intl.NumberFormat('en-US',{
      style : 'currency',
      currency : 'USD'
    }).format(dinero)
  }

  return (
    <main>
      <div className="main_container">
        <section className="list_products">
          <div className="title_container">
            <h1 className="title_text"> Desserts </h1>
          </div>
          <div className="products_container">
            {
              productos && productos.map( producto => (
                <div key={producto.name} className="card_producto">
                  <div className='producto_image_container'>
                    <img src={producto.image.desktop} alt={producto.name} className='producto_image'/>
                    <button className='add_to_cart'>Add to Cart</button>
                  </div>
                  <div className='producto_info_container'>
                    <h3 className='producto_category'> {producto.category} </h3>
                    <p className="product_name">{producto.name}</p>
                    <p className='product_price'> {formatMoney(producto.price)} </p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        <div className="cart_container">

        </div>
      </div>
    </main>
  )
}

export default App
