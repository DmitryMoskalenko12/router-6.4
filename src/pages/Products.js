import { Link } from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Products 1'},
  {id: 'p2', title: 'Products 2'},
  {id: 'p3', title: 'Products 3'},
]

const ProductsPage = () => {
  return (
    <>
    <h1>The Products Page</h1>
    <ul>
      {
        PRODUCTS.map(({id, title}) => <li key={id}><Link to={`/products/${id}`}>{title}</Link></li>)
      }
    </ul>
    </>
  )
}

export default ProductsPage;