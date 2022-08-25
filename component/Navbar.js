import Head from 'next/head';
import Link from 'next/link'
function Navbar() {

    return (
        <>

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
            </Head>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link href="/"><a className="navbar-brand">Navbar</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link" >About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cart">
                                    <a className="nav-link" >Cart</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;