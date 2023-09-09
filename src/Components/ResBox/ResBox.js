const ResBox = ({ results }) => {
  const lastItem = results[results.length - 1];

  if (results.length === 0) {
    return (
      <div className="w-96 h-72 rounded-lg mr-5 shadow-md bg-gray-50 p-5 flex flex-col">
        محسابه کنید تا جواب را اینجا ببینید
      </div>
    );
  }

  let output;

  if (lastItem > 10) {
    output = (
      <div className="w-96 h-72 rounded-lg mr-5 shadow-md bg-red-100 p-5 flex flex-col ">
        <div className="flex justify-center w-full place-items-center">
          <p>جواب</p>
          <div className="w-full text-center py-2 bg-slate-50 rounded shadow mr-4">
            {lastItem}
          </div>
        </div>
        <div className="flex flex-col w-full my-2 overflow-y-hidden">
          <p className="mt-3">تاریخچه</p>
          <div className="flex flex-col overflow-y-scroll w-full my-3">
            {results.map((res) => {
              return <div>{res}</div>;
            })}
          </div>
        </div>
      </div>
    );
  } else if (lastItem < 10) {
    output = (
      <div className="w-96 h-72 rounded-lg mr-5 shadow-md bg-green-100 p-5 flex flex-col ">
        <div className="flex justify-center w-full">
          <p>جواب</p>
          <div className="w-full text-center py-2 bg-slate-50 rounded shadow mr-4">
            {lastItem}
          </div>
        </div>
        <div className="flex flex-col w-full my-2 overflow-y-hidden">
          <p className="mt-3">تاریخچه</p>
          <div className="flex flex-col overflow-y-scroll w-full my-3">
            {results.map((res) => {
              return <div>{res}</div>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    output = (
      <div className="w-96 h-72 rounded-lg mr-5 shadow-md bg-blue-100 p-5 flex flex-col ">
        <div className="flex justify-center w-full">
          <p>جواب</p>
          <div className="w-full text-center py-2 bg-slate-50 rounded shadow mr-4">
            {lastItem}
          </div>
        </div>
        <div className="flex flex-col w-full my-2 overflow-y-hidden">
          <p className="mt-3">تاریخچه</p>
          <div className="flex flex-col overflow-y-scroll w-full my-3">
            {results.map((res) => {
              return <div>{res}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }

  return output;
};

export default ResBox;
