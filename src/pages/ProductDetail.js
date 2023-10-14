import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
    {params.productId}
    <p><Link to='..' relative="path">Back</Link></p>
    </>
  )
}

export default ProductDetailPage;