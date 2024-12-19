import React, { useState } from 'react'
import Card from './Card'

const Search = ({ search, setSearch , category, setCategory}) => {

    return (
        <>
            <div className="flex gap-2 items-center border border-gray-300 rounded-lg p-2 w-full md:max-w-xl max-w-2xl">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                    className="md:w-full w-52 p-2 outline-none border-none rounded"
                />
                <div className="relative">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="md:w-32 w-14 p-2 outline-none border-none rounded"
                    >
                        <option value="">All Category</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Kitchen">Kitchen</option>
                    </select>
                </div>


            </div>
        </>

    )
}

export default Search
