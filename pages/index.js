
import Head from 'next/head';
import Link from 'next/link';


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Shoping Now</title>
      </Head>

      <div className='container text-center mt-4 '>
        <h1>All Products</h1>
        <div className='row'>
          {
            props.products.map(p => (
              <div className="card col-md-4 m-auto my-2" style={{ width: '15rem;', height: '28rem;' }} key={p.id}>
                <img src={p.image} className="card-img-top" alt="" ></img>
                <div className="card-body">
                  <p className="card-title" style={{ fontSize: '12px' }}>{p.title}</p>
                  <h5 className="card-title">{p.category}</h5>
                  <h5 className="card-title">$ {p.price}</h5>

                  <Link href={`/category/${p.id}`}><a className="btn btn-primary">Details..</a></Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}


export async function getStaticProps() {

  const req = await fetch("https://fakestoreapi.com/products");
  const data = await req.json();

  return {
    props: {
      products: data
    }
  }
}