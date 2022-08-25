import Head from 'next/head';
function Error() {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />

            </Head>
            <div className="container m-auto text-center mt-5">
                <div><h1 className='mt-5 '>This Page Is Not Found 😴</h1></div>
            </div>
        </div>
    )
}
export default Error