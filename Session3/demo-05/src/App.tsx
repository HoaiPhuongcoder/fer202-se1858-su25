import { useDispatch, useSelector } from "react-redux";
import { Button } from "./components/ui/button";
import type { AppDispatch, RootState } from "./store";
import { decrement, increment, incrementByAmount } from "./slice/counterSlice";
import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const [amount, setAmount] = useState<number>();

  useEffect(() => {
    if (isNaN(Number(amount))) {
      setAmount(0);
    }
  }, [amount]);

  const handleIncreaseByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));
  };
  return (
    <div>
      <h1 className="text-2xl">Counter: {count}</h1>

      <Input
        value={amount}
        onChange={(e) => {
          setAmount(isNaN(Number(e.target.value)) ? 0 : Number(e.target.value));
        }}
        className="w-[300px]"
      />
      <Button onClick={handleIncrement}>Hello</Button>
      <Button onClick={handleDecrement}>Trừ </Button>
      <Button onClick={handleIncreaseByAmount}>Increase Amount</Button>
    </div>
  );
}

export default App;
