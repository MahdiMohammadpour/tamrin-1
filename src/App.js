import { useState } from "react";
import Header from "./Components/Header/Header";
import MultBox from "./Components/MultBox/MultBox";
import ResBox from "./Components/ResBox/ResBox";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [Data, setData] = useState({ num1: 3, num2: 2, results: [] });

  const onClickHandler = () => {
    const result = Data.num1 * Data.num2;
    const temp = [...Data.results];
    temp.push(result);
    setData({ ...Data, results: temp });
  };

  const onChangeHandler = (e) => {
    if (!e.target.value) {
      alert("error");
      return;
    }
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="flex my-16 text-center justify-center">
        <MultBox
          Data={Data}
          onClick={onClickHandler}
          onChange={onChangeHandler}
        />
        <ResBox results={Data.results} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
