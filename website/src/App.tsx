import { useState, useEffect } from "react";

type apiResponse = {
  message: string;
};

function App() {
  const [data, setData] = useState<apiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/`);
        if (!response.ok) {
          console.log(response.status);
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-[#e0e1dd] text-4xl font-extrabold">
        {data?.message}
      </h1>
    </div>
  );
}

export default App;
