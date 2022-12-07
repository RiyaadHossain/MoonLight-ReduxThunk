import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions/filterActions";

const Navbar = () => {

  const dispatch = useDispatch()
  const { cart, wishlist } = useSelector(state => state.product)

  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>Moon Tech</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            onChange={(e) => dispatch(search(e.target.value))}
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 relative rounded-full'>
            {wishlist.length > 0 &&
              <div className=" absolute bottom-3 left-5">
                <div className="grid place-items-center bg-teal-500 rounded-full text-white w-6 h-6">{wishlist.length}</div>
              </div>
            }
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 relative p-2 rounded-full'>
            {cart.length > 0 &&
              <div className=" absolute bottom-3 left-5">
                <div className="grid place-items-center bg-teal-500 rounded-full text-white w-6 h-6">{cart.length}</div>
              </div>
            }
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
