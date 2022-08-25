import Link from 'next/link';
import Head from 'next/head';
//import Image from 'next/image';
function Products({ product }) {
    const { title, price, image, id } = product;

    return (


        <div className="card col-md-4 my-3 mx-" style={{ height: "450px" }}>
            <img src={image} className="card-img-top" alt="..." style={{ height: "50%" }}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <Link href={`/product/${id}`}><a className="btn btn-primary">More Details</a></Link>
            </div>
        </div>



    )
}
export default Products;