/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductsListe = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const LoadDetail = (id) => {
    navigate('/products/detail/' + id);
  };
  const Remove = (id) => {
    if (window.confirm('voulez-vous le supprimer?')) {
      fetch('http://localhost:3000/products/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Retirer avec succee');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const LoadEdit = (id) => {
    navigate('/products/edit/' + id);
  };
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProductsData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handelSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };
  console.log(searchTerm);
  return (
    <div>
      <div class="flex justify-end my-4">
        <div class="max-w-2xl mx-auto">
          <form class="flex item-center justify-center ">
            <label for="simple-search" class="sr-only"></label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5    dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="recherche"
                required
                onChange={handelSearchTerm}
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>

          <p class="mt-5">
            <a
              class="text-blue-600 hover:underline"
              href="#"
              target="_blank"
            ></a>
          </p>
          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>

        <Link
          to="products/create"
          className="md:max-w-2xl md:mx-auto text-center"
        >
          <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
            Ajouter un produit
            <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </Link>
      </div>

      <table class="border-collapse w-3/4 mx-auto">
        <thead>
          <tr>
            <th class="p-3 font-bold uppercase bg-blue-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Nom de produit
            </th>
            <th class="p-3 font-bold uppercase bg-blue-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Prix unitaire
            </th>
            <th class="p-3 font-bold uppercase bg-blue-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Quantité
            </th>
            <th class="p-3 font-bold uppercase bg-blue-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {productsData &&
            productsData
              .filter((item) => {
                return item.nom.includes(searchTerm);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                    {item.nom}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                    {item.prix_unitaire}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                    {item.quantite}
                  </td>
                  <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                      Actions
                    </span>
                    <td class=" flex item-center justify-center">
                      <div className="flex items-center">
                        <div class="w-5 mr-2 transform hover:text-blue-500 hover:scale-110">
                          <a
                            onClick={() => {
                              LoadDetail(item.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </a>
                        </div>
                        <div class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <a
                            onClick={() => {
                              LoadEdit(item.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </a>
                        </div>
                        <div class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                          <a
                            onClick={() => {
                              Remove(item.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </td>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsListe;
