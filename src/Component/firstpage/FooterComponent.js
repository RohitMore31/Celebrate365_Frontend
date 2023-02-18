import React from 'react'
import {FiFacebook}from "react-icons/fi"
import {AiOutlineGoogle}from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"


export default function FooterComponent() {
  return (
    <div className="fixed-bottom">
      <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
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
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!"
                role="button" data-mdb-ripple-color="dark">
                <BsGithub className="homeicons"></BsGithub>
              </a>
            </section>
          </div>

          {/* Copyright section  */}
          <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright   
            <a className="text-dark" href="">Rohit & Comp </a>
          </div>
      </footer>
    </div>
  )
}
