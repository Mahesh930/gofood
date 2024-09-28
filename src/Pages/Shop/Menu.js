import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards';
import { FaFilter } from 'react-icons/fa';

const Menu = () => {

    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);


    //loating a data 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/menu');
                const data = await response.json();
                // console.log(data);
                setMenu(data);
                setFilteredItems(data);

            } catch (error) {
                console.error(error);

            }
        }

        fetchData();
    }, [])

    //feltering the data based on the category
    const filterItem = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category)

        setFilteredItems(filtered);
        setSelectedCategories(category);
        setCurrentPage(1);
    };

    // show data 
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategories("all");
        setCurrentPage(1);
    };
    const handleSortOption = (option) => {
        setSortOption(option)
        let sortedItems = [...filteredItems];

        //logic using switch statement
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "Low to High":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "High to Low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems);
        setCurrentPage(1);
    };

    const indexOfLastItem = currentPage + itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div>
            <div className="">
                {/* text stuff */}
                <div className="py-32 px-64 flex flex-col md:flex-row justify-between items-center gap-8 bg-gradient-to-r from-indigo-50 via-violet-200 to-blue-700 ">
                    <div className=" space-y-8 px-4 text-center">
                        <h2 className='md:text-5xl  text-gray-800 font-bold leading-snug'>
                            Get the tastiest and freshest <span className='text-blue'>Food</span> ever
                        </h2>
                        <p className='text-xl text-gray-800 md:w-4/5 mx-auto'>
                            Where each bite gives the taste like a Home food
                        </p>
                        <button className='btn bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold text-white rounded-full'>
                            Order Now
                        </button>
                    </div>
                </div>
                {/* menu shop section */}
                <div className="section-container">
                    {/*  Feltering and sorting*/}
                    <div className='flex flex-col md:flex-row flex-wrap justify-between items-centerspace-y-3 mb-6'>
                        {/* buttons for all categories */}
                        <div className='flex flex-row justify-start md:items-center md:gap-8 flex-wrap gap-4'>
                            <button onClick={showAll} className={selectedCategories === "all" ? "active" : ""}>All</button>
                            <button onClick={() => filterItem("salad")} className={selectedCategories === "salad" ? "active" : ""}>Salad</button>
                            <button onClick={() => filterItem("pizza")} className={selectedCategories === "pizza" ? "active" : ""}>Pizza</button>
                            <button onClick={() => filterItem("soup")} className={selectedCategories === "soup" ? "active" : ""}>Soups</button>
                            <button onClick={() => filterItem("dessert")} className={selectedCategories === "dessert" ? "active" : ""}>Desserts</button>
                            <button onClick={() => filterItem("drinks")} className={selectedCategories === "drinks" ? "active" : ""}>Drinks</button>

                        </div>

                        {/* Sorting */}
                        <div className='flex p-2 justify-end mb-4 rounded-sm'>
                            <FaFilter className='h-4 w-4 text-white ' />
                        </div>
                        <select name="sort" id="sort" onChange={(e) => handleSortOption(e.target.value)}
                            value={sortOption}>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Low-high">low to high</option>
                            <option value="high-low">high to low</option>
                        </select>
                    </div>


                    {/* product card */}
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {currentItems.map((item, index) => (
                            <Cards key={item._id} item={item} />
                        ))}
                    </div>
                </div>
                {/* pagination */}
                <div className='flex justify-center m-8'>
                    {
                        Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
                            <button key={index + 1} onClick={() => paginate(index + 1)}
                                className={`mx-2 px-2 py-1 rounded-full ${currentPage === index + 1 ? "bg-blue" : "bg-gray-200 text-black"}`}>
                                {index + 1}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
