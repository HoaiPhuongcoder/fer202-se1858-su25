import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      id: "DV1",
      name: "Xét Nghiệm Sàng Lọc HIV",
      description: "Xét nghiệm siêu uy tín",
      image:
        "https://media.istockphoto.com/id/2176619368/vi/anh/asia-female-pharmacist-using-digital-tablet-while-taking-inventory.jpg?s=1024x1024&w=is&k=20&c=811jNqxOTtwyaZ_N1rAnHrBa337wXu4jNCXTcP47a-E=",
      price: "200000Đ đ",
    },
    {
      id: "DV2",
      name: "Xét Nghiệm Khẳng Định  HIV",
      description: "Xét nghiệm siêu uy tín",
      image:
        "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
      price: "160.000 đ",
    },
    {
      id: "DV3",
      name: "Điều Trị HIV theo phác đồ ARV",
      description: "Cấp chứng chỉ HIV ",
      image:
        "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
      price: "300.000 đ",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container mt-8">
        <div className="row">
          {data &&
            data.map((item) => {
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
