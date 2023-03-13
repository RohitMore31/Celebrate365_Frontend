import React from 'react'
// Icons
import {FiFacebook}from "react-icons/fi"
import {AiOutlineGoogle}from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"

export default function AboutUs() {
  return (
  <div className='about'>
    <div className="wishfirstbox">
        <h2> AboutUs </h2>
        <div className="card mt-3 " style={{ width: "50vw" }}>
          <div className="card-header">Creator</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
            Welcome to our <b>Celebrate365</b> birthday reminder App, which is designed to 
            help people remember important birthdays and plan fun 
            celebrations for their loved ones.
            please don't hesitate to share your feedback and suggestions 
            with us. Thanks for using our birthday reminder App!"
            </li>
            <li className="list-group-item">
              This is project created by me During My Cdac Study.To learn
              more on MERN stack
            </li>
          </ul>
        </div>
        <div className="container pt-4">
            {/* icon section */}
            <section className="mb-4">
              {/* <!-- Facebook --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"
                role="button" data-mdb-ripple-color="dark">
                  <FiFacebook className="homeicons"></FiFacebook>
              </a>
        
              {/* <!-- Google --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"
                role="button" data-mdb-ripple-color="dark">
                  <AiOutlineGoogle className="homeicons"></AiOutlineGoogle> 
              </a>

              {/* <!-- Instagram --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"
                role="button" data-mdb-ripple-color="dark">
                  <GrInstagram className="homeicons"></GrInstagram>
              </a>

              {/* <!-- Linkedin --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"
                role="button" data-mdb-ripple-color="dark">
                  <FaLinkedinIn className="homeicons"></FaLinkedinIn>
              </a>
              {/* <!-- Github --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/RohitMore31"
                role="button" data-mdb-ripple-color="dark">
                <BsGithub className="homeicons"></BsGithub>
              </a>
            </section>
        </div>
    </div>
      
  </div>
  )
}
