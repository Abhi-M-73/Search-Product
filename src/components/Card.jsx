import React from 'react'

const Card = ({filterProduct}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                filterProduct.map((product, index) => {
                    return <div key={index} className="border-2 border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all ease-in">
                        <img src={product.imageUrl} alt={product.title} className="w-80 h-52 object-contain" />
                        <div className="p-4 md:w-80 bg-gray-600">
                            <h3 className="font-semibold text-lg text-white">{product.title}</h3>
                            <p className="text-gray-300">{product.description}</p>
                        </div>
                    </div>
                })
            }
        </div >

    )
}

export default Card
