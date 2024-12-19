import React, { useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'

const App = () => {

  const cardData = [
    {
      id: 1,
      title: "Modern Chair",
      description: "A stylish modern chair that fits in any room.",
      imageUrl: "https://i.pinimg.com/736x/4d/ac/e9/4dace99d4c81c83b767f06041dc7be55.jpg",
      category: "Furniture"
    },
    {
      id: 2,
      title: "Leather Sofa",
      description: "Comfortable leather sofa perfect for your living room.",
      imageUrl: "https://i.pinimg.com/736x/99/db/77/99db77a799f36ad5a9839d10ab105d23.jpg",
      category: "Furniture"
    },
    {
      id: 3,
      title: "Coffee Table",
      description: "A sleek coffee table to complement your living space.",
      imageUrl: "https://i.pinimg.com/736x/84/8f/16/848f16c215f9da7e7cec411a57099189.jpg",
      category: "Furniture"
    },
    {
      id: 4,
      title: "Smartphone",
      description: "Latest smartphone with cutting-edge technology.",
      imageUrl: "https://i.pinimg.com/736x/e3/fd/04/e3fd0403b4986cdecac96784b467afc0.jpg",
      category: "Electronics"
    },
    {
      id: 5,
      title: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones with superior sound.",
      imageUrl: "https://i.pinimg.com/736x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
      category: "Electronics"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with powerful sound.",
      imageUrl: "https://i.pinimg.com/236x/c0/a9/20/c0a9202391934d3519885ee7e679da0a.jpg",
      category: "Electronics"
    },
    {
      id: 7,
      title: "Cooking Set",
      description: "Complete cooking set for your kitchen essentials.",
      imageUrl: "https://i.pinimg.com/736x/dc/9d/c8/dc9dc8d183d8edcb04aef7abf3ee8f2b.jpg",
      category: "Kitchen"
    },
    {
      id: 8,
      title: "Blender",
      description: "High-speed blender for making smoothies and soups.",
      imageUrl: "https://i.pinimg.com/236x/d8/ad/44/d8ad44a6c2f752785671d03cd92e6fdc.jpg",
      category: "Kitchen"
    }
  ];

  const [search , setSearch] = useState('');
  const [category , setCategory] = useState('');

  const filterProduct = cardData.filter((product) => {
    const searchMatch = product.title.toLowerCase().includes(search.toLocaleLowerCase());
    const categoryMatch = product.category.toLowerCase().includes(category.toLocaleLowerCase());
    return categoryMatch && searchMatch;
  })

  return (
    <>
      <div className='md:w-[45%] w-80 mx-auto bg-gray-600 mt-10 md:px-12 p-4 md:py-10 rounded-lg'>
        <Search search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
      </div>
      <div className='md:p-20 p-8 mt-10 flex gap-2'>
        <Card filterProduct={filterProduct} />
      </div>
    </>

  )
}

export default App
