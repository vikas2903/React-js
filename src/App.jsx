import './App.css'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Newslatter from './components/Newslatter';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Menproducts from './categories/Menproducts';
import Productpage from './pages/Productpage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Menproducts />} />
        <Route path="/products/:id" element={<Productpage />}> </Route>
      </Routes>

      <Newslatter />
      <Footer />
    </>
  )
}

export default App
