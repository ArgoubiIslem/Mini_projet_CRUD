/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsListe from './ProductsListe';
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';
import ProductDetails from './ProductDetails';
function App() {
  return (
    <div>
      <div class="px-4 py-16">
        <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
          <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
            Mini projet de type CRUD avec ReactJS
          </h1>

          <p class="text-gray-600 md:text-xl md:px-18">
            CRUD d’un objet produit avec utilisation d’une API REST .
          </p>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsListe />}></Route>
          <Route path="/products/create" element={<AddProducts />}></Route>
          <Route
            path="/products/edit/:productid"
            element={<EditProducts />}
          ></Route>
          <Route
            path="/products/detail/:productid"
            element={<ProductDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
