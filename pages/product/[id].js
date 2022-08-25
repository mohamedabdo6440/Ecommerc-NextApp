import Link from 'next/link';
import Head from 'next/head';
//import Image from 'next/image';
function Product({ product }) {
    const { title, price, image, id, description } = product;

    return (


        <div className='container text-center m-5 ms-auto'>
            <div className='row'>
                <div className="card col-md-4 my-3 mx-" style={{ height: "450px" }}>
                    <img src={image} className="card-img-top" alt="..." style={{ height: "50%" }}></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <Link href={`/`}><a className="btn btn-dark">All Products</a></Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h4>{description}</h4>
                </div>
            </div>
        </div>



    )
}
export default Product;

export async function getStaticPaths() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const paths = products.map((product) => {
        return {
            params: { id: product.id.toString() },

        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await req.json();
    return {
        props: { product }

    }
}
