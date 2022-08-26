import Navbar from "./Navbar"
import TopNav from "./Navbar"

function Layout({ children }) {

    return (

        <div>

            <TopNav />

            {children}



        </div>
    )
}
export default Layout;