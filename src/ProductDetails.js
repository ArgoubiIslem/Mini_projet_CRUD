import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productid } = useParams();
  const [productData, setProductsData] = useState({});
  useEffect(() => {
    fetch('http://localhost:3000/products/' + productid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProductsData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div class="container mx-auto p-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white shadow-md rounded-lg mb-4">
            <div class="p-4">
              <h2 class="text-2xl font-bold mb-2">Détails de produit</h2>
              <div class="mb-4">
                <label class="text-gray-700 font-bold">Nom :</label>
                <p class="text-gray-900">{productData.nom}</p>
              </div>
              <div class="mb-4">
                <label class="text-gray-700 font-bold">Prix unitaire :</label>
                <p class="text-gray-900">{productData.prix_unitaire}</p>
              </div>
              <div class="mb-4">
                <label class="text-gray-700 font-bold">Quantite :</label>
                <p class="text-gray-900">{productData.quantite}</p>
              </div>
              <div class="mb-4">
                <label class="text-gray-700 font-bold"></label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-5 w-5 inline-block align-middle text-blue-600"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  <text x="18" y="12"></text>
                </svg>

                <Link to="/" class="text-blue-600 font-bold">
                  retour à la liste{' '}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
