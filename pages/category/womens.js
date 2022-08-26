import Link from "next/link";
import Head from "next/head";
function Womens({ wmens }) {

    return (
        <div className="container text-center mt-4  ">
            <h2><h1 style={{ color: "#dc3545" }}>Women's clothing</h1> Category</h2>
            <div className='row mt-5'>
                {wmens.map(p => (
                    <div class="card col-md-4 m-auto my-2" style={{ width: '15rem;', height: '28rem;' }} key={p.id}>
                        <img src={p.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-title" style={{ fontSize: '12px' }}>{p.title}</p>
                            <h5 class="card-title">{p.category}</h5>

                            <h5 class="card-title">$ {p.price}</h5>

                            <Link href={`/category/${p.id}`}><a class="btn btn-primary">Details..</a></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Womens



export async function getStaticProps() {

    const req = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    const data = await req.json();

    return {

        props: {
            wmens: data
        }
    }
}