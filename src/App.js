import React from 'react'
import User from './components/User/User'
import Teams from './components/Teams/Teams'
import TeamsFilter from './components/TeamsFilter/TeamsFilter'
import CartProvider from './store/CartProvider'

const App = () => {

  return (
    <CartProvider>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-6">
            < User />
          </div>
          <div className="col-6">
            <Teams/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TeamsFilter />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App;