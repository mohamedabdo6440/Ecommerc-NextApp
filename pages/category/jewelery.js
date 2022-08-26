import Link from "next/link";
import Head from "next/head";
function Jewelery({ jewelery }) {

    return (
        <>



            <div className="container text-center mt-4  ">
                <h2><h1 style={{ color: "#dc3545" }}>Jewelery</h1> Category</h2>
                <div className='row mt-5'>
                    {jewelery.map(p => (
                        <div className="card col-md-4 m-auto my-2" style={{ width: '15rem;', height: '28rem;' }} key={p.id}>
                            <img src={p.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title" style={{ fontSize: '12px' }}>{p.title}</p>
                                <h5 className="card-title">{p.category}</h5>

                                <h5 className="card-title">$ {p.price}</h5>

                                <Link href={`/category/${p.id}`}><a className="btn btn-primary">Details..</a></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Jewelery


export async function getStaticProps() {

    const req = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const data = await req.json();

    return {

        props: {
            jewelery: data
        }
    }
}