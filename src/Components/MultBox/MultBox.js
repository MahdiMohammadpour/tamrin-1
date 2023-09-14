const MultBox = ({ Data, onClick, onChange }) => {
  return (
    <div className="flex flex-col justify-between w-64 h-72 rounded-lg mr-5 shadow-md bg-gray-50 p-4">
      <div className="mt-2 w-full">
        <div className="flex justify-around place-items-center bg-orange-100 p-2 rounded shadow-md">
          <label>عدد اول</label>
          <input
            type="number"
            onChange={onChange}
            name="num1"
            value={Data.num1}
            className="shadow-md w-16 p-1 mr-20 rounded"
          />
        </div>
        <div className="flex justify-around  place-items-center mt-5  bg-orange-100 p-2 rounded shadow-md">
          <label>عدد دوم</label>
          <input
            type="number"
            onChange={onChange}
            name="num2"
            value={Data.num2}
            className="shadow-md w-16 p-1 mr-20 rounded"
          />
        </div>
      </div>
      <div>
        <button
          onClick={onClick}
          className="mb-4 px-16 py-2 bg-amber-200 rounded hover:bg-amber-300 shadow-md"
        >
          محاسبه
        </button>
      </div>
    </div>
  );
};

export default MultBox;
