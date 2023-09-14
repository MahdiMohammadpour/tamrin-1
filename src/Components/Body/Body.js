import { useState } from "react";
import MultBox from "../MultBox/MultBox";
import ResBox from "../ResBox/ResBox";

const Body = () => {
  const [Data, setData] = useState({ num1: null, num2: null, results: [] });

  const ClickHandler = () => {
    if (!Data.num1 || !Data.num2) {
      alert("لطفا اعداد را وارد کنید");
      return;
    }
    const result = Data.num1 * Data.num2;
    const temp = [...Data.results];
    temp.push(result);
    setData({ ...Data, results: temp });
  };

  const ChangeHandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex my-16 text-center justify-center">
      <MultBox
        Data={{ num1: Data.num1, num2: Data.num2 }}
        onClick={ClickHandler}
        onChange={ChangeHandler}
      />
      <ResBox results={Data.results} />
    </div>
  );
};

export default Body;
