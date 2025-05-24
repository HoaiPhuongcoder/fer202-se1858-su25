import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import data from "./ListOfOrchids";

function App() {
  return (
    <div>
      <Title name={"Nguyễn Hoài Phương - SE184137"} />
      <div className="container mx-auto mt-5 px-2.5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                rating={item.rating}
                isSpecial={item.isSpecial}
                isNatural={item.isNatural}
                image={item.image}
                color={item.color}
                numberOfLike={item.numberOfLike}
                origin={item.origin}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
