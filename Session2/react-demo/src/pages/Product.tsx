import { useParams } from "react-router";

function Product() {
  // Cần Lấy được Product Id từ URL
  const { productId } = useParams();
  //   Lưu ý tên biến phải giống vs khai báo trong

  return (
    <>
      <div>Product</div>
      <h1>{productId}</h1>
    </>
  );
}

export default Product;
