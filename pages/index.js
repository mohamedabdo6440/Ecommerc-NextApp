import Navbar from "../component/Navbar";
import Products from "../component/Products";
import Head from 'next/head';


export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home | In Shop</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
      </Head>
      <main className="container">
        <div className='row'>

          {
            products.map(product => <Products key={product.id} product={product} />)
          }

        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }
}
