import React from 'react';
import { Link } from 'react-router-dom';
import style from 'C:/Users/Armann/Desktop/major_project/client/src/pages/Header.css';
function Header(){

  return (
    <div >
      <nav className="navbar navbar-expand-lg w-100"  style={{height:70}}>
      
      <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/home" className='text-white m-3' style={style}>Home</Link>
            </li>
            <li class="nav-item active">
              <Link to="/user" className='text-white m-3' style={style}>Users</Link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
{/* 
            <Link to="/userprofile"><button class="btn btn-outline-success my-2 my-sm-0 text-white">
            <svg class=" my-2 my-sm-0  text-white" style={{height:"25px", width:"25px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg><span  type="submit">Profile</span></button>
            </Link> */}

             <Link to="/register">
            <button class="btn btn-outline-success my-2 my-sm-0 m-2 text-white" type="submit" >Register</button>
            </Link>
            <Link to="/login">
            <button class="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Login</button>
            </Link>
            </form>
        </div>
        </nav>
    </div>
  )
}

export default Header
