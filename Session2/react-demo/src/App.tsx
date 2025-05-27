// import Card from "./Components/Card";
// import Navbar from "./Components/Navbar";

// function App() {
//   const data = [
//     {
//       id: "DV1",
//       name: "Xét Nghiệm Sàng Lọc HIV",
//       description: "Xét nghiệm siêu uy tín",
//       image:
//         "https://media.istockphoto.com/id/2176619368/vi/anh/asia-female-pharmacist-using-digital-tablet-while-taking-inventory.jpg?s=1024x1024&w=is&k=20&c=811jNqxOTtwyaZ_N1rAnHrBa337wXu4jNCXTcP47a-E=",
//       price: "200000Đ đ",
//     },
//     {
//       id: "DV2",
//       name: "Xét Nghiệm Khẳng Định  HIV",
//       description: "Xét nghiệm siêu uy tín",
//       image:
//         "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
//       price: "160.000 đ",
//     },
//     {
//       id: "DV3",
//       name: "Điều Trị HIV theo phác đồ ARV",
//       description: "Cấp chứng chỉ HIV ",
//       image:
//         "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
//       price: "300.000 đ",
//     },
//   ];
//   return (
//     <div>
//       <Navbar />
//       <div className="container mt-8">
//         <div className="row">
//           {data &&
//             data.map((item) => {
//               return (
//                 <Card
//                   key={item.id}
//                   name={item.name}
//                   description={item.description}
//                   image={item.image}
//                   price={item.price}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   // để quản lý sự thay đổi của một đối tượng trong react sử dung state();
//   // Hook: Đây là những hàm sẵn để thực hiện 1 chức năng nào đó
//   // useState : HOOK để quản lý trạng thái

//   const [money, setMoney] = useState<number>(3.5);
//   const handleDecrease = () => {
//     setMoney((prev) => prev - 0.5);
//   };
//   const handleIncrease = () => {
//     setMoney((prev) => prev + 0.5);
//   };

//   return (
//     <div className="text-center">
//       <button className="btn btn-danger" onClick={handleDecrease}>
//         -
//       </button>
//       <div>Số Tiền:{money} </div>
//       <button className="btn btn-primary" onClick={handleIncrease}>
//         +
//       </button>
//     </div>
//   );
// }

// export default App;
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/65/b8/a9/65b8a9e52b5f0934482494aee68751a8.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Modal show={true}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default App;
