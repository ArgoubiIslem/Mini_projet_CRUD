import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');
  const [nom, setNom] = useState('');
  const [prix_unitaire, setPrix_unitair] = useState('');
  const [quantite, setQuantite] = useState('');

  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const productsData = { nom, prix_unitaire, quantite };

    fetch('http://localhost:3000/products', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(productsData),
    })
      .then((res) => {
        alert('enregistrer avec succee');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <body class="bg-gray-100">
        <div class="container mx-auto py-8">
          <h1 class="text-2xl font-bold mb-6 text-center">
            Ajouter un produit
          </h1>
          <form
            class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
            onSubmit={handelSubmit}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                ID
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="Number"
                value={id}
                disabled="disabled"
                placeholder="saisir nom de produit"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Nom de produit
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                placeholder="saisir nom de produit"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Prix Unitaire
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="Number"
                placeholder="saisir prix unitaire"
                value={prix_unitaire}
                onChange={(e) => setPrix_unitair(e.target.value)}
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Quantité
              </label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="Number"
                placeholder="saisir quantite"
                value={quantite}
                onChange={(e) => setQuantite(e.target.value)}
                required
              />
            </div>

            <button
              class="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              Enregistrer
            </button>
            <Link to="/">
              <button
                class="w-full  text-black text-sm font-bold py-2 px-4 rounded-md transition duration-300"
                type="submit"
              >
                retourner
              </button>
            </Link>
          </form>
        </div>
      </body>
    </div>
  );
};
export default AddProducts;
