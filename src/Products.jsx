import { Outlet, Link } from "react-router-dom"

function Products() {
  return (
    <>
        <h2>Products</h2>
        <nav>
            <Link to="phone">Phone</Link> |
            <Link to="laptop">Laptop</Link>
        </nav>
        <Outlet/>
    </>
  )
}

export default Products