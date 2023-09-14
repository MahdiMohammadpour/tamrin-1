const ResBox = ({ results }) => {
  const lastItem = results[results.length - 1];

  if (results.length === 0) {
    return (
      <div className="w-96 h-72 rounded-lg mr-5 shadow-md bg-gray-50 p-5 flex flex-col">
        محسابه کنید تا جواب را اینجا ببینید
      </div>
    );
  }

  return (
    <div
      className={`w-96 h-72 rounded-lg mr-5 shadow-md p-5 flex flex-col ${
        lastItem > 10
          ? "bg-red-100"
          : lastItem < 10
          ? "bg-green-100"
          : "bg-blue-100"
      }`}
    >
      <div className="flex justify-center w-full place-items-center">
        <p>جواب</p>
        <div className="w-full text-center py-2 bg-slate-50 rounded shadow mr-4">
          {lastItem}
        </div>
      </div>
      <div className="flex flex-col w-full my-2 overflow-y-hidden">
        <p className="mt-3">تاریخچه</p>
        <div className="flex flex-col overflow-y-scroll w-full my-3">
          {results.map((result) => {
            return <div>{result}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ResBox;
