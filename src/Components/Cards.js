import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import { AuthContext } from '../context/Auth';
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const [isHeartFilled, setHeartFilled] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleAddToCart = (item => {
        // console.log(item);
        // console.log("Add to cart");

        // Add item to cart
        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, quentity: 1, image, price, email: user.email }
            // console.log(cartItem);
            fetch("http://localhost:4000/carts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(cartItem)
                }
            ).then((res) => res.json()).then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Item Added to Cart!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // console.log(data);
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Please Login",
                text: "You won't be able to Add Items to the Cart!",
                confirmButtonText: "Login",
                showConfirmButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("my_modal_5").showModal()
                    navigate("/");
                }
            })
        }
    })

    const handleHeartClick = () => {
        setHeartFilled(!isHeartFilled);
    }


    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 bg-blue heartStar  ${isHeartFilled ? "text-rose-500" : "text-white"} `}
                onClick={handleHeartClick}>
                <FaHeart className='h-5 w-5 cursor-pointer  ' />
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure >
                    <img src={item.image}
                        className='hover:scale-105 transition-all duration-200 md:h-32'
                    />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                {/* <Link to={`/menu/${item._id}`}></Link> */}
                <p>{item.recipe}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className='font-semibold'>
                        <span className='text-sm text-red'>$</span>{item.price}
                    </h5>
                    <button className="btn bg-blue text-white" onClick={() => handleAddToCart(item)}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
