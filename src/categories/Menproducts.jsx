import React from 'react'
import men_shirt from '../data/Men/men_shirt.json';
import {Link} from 'react-router-dom';


function Menproducts() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-black text-center text-4xl pb-8 uppercase">Men</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {men_shirt.map((item, index) => (
              <Link to={`/product/${item.productUrl}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-96">
                  <img
                    alt={item.title || 'Product Image'}
                    src={item.imageUrl}
                    className="h-full w-full object-cover object-top group-hover:opacity-75 h-full"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Menproducts