import React from 'react'

const Header = () => {
  return (
    <>
     <div className="header-main">
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img src="https://bhandara.app/images/blogo.webp" alt=""/>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Story</a></li>
                        <li><a href="#">get in touch</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header