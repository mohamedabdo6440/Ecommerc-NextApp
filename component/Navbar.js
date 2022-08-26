
import Link from 'next/link';
import React, { useState } from 'react';


const TopNav = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg p-3" style={{ backgroundColor: "rgb(214 220 225)" }}>
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >Home</a>
                </Link>
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link href="/">
                                <a className="btn btn-outline-dark px-1 ms-2 ">AllProducts</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/category/electronics">
                                <a className="btn btn-outline-dark px-1 ms-2" >electronics</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/category/jewelery">
                                <a className="btn btn-outline-dark px-1 ms-2" >jewelery</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/category/mens ">
                                <a className="btn btn-outline-dark px-1 ms-2" >men's </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/category/womens ">
                                <a className="btn btn-outline-dark px-1 ms-2" >women's </a>
                            </Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav