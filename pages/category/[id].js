import Link from "next/link";
function Product({ products }) {

    return (
        <div className='container text-center mt-4'>
            <h1 className="card-title my-4" style={{ color: "#dc3545" }}>Category : {products.category}</h1>

            <div className='row'>

                <div className="card col-md-4 ms-auto my-2" style={{ width: '16rem;', height: 'auto' }} key={products.id}>
                    <img src={products.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title" style={{ fontSize: '12px' }}>{products.title}</p>



                        <Link href={`/`}><a className="btn btn-dark">All Products</a></Link>
                    </div>
                </div>
                <div className="col-md-4 me-auto my-2">
                    <p style={{ fontSize: '22px', color: "black", color: "#495057" }}> {products.description}</p>
                    <h5 className="card-title" style={{ color: "#20c997" }}>Price : ${products.price}</h5>
                </div>
            </div>
        </div>
    )
}
export default Product

export async function getStaticPaths() {

    const req = await fetch(`https://fakestoreapi.com/products`);
    const data = await req.json();

    const paths = data.map(p => {
        return {
            params: { id: `${p.id}` }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const req = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const data = await req.json();

    return {
        props: {
            products: data
        }
    }
}