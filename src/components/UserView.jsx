import axios from "axios";
import { useEffect, useState } from "react";

export default function UserView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await axios.get(URL);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      console.log("loading complete");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {loading ? (<h1>Loading...</h1>
      ) : (
        <table className="table-auto w-full mt-4 p-2 text-center border-collapse border-spacing-2 border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400">Last Name</th>
              <th className="border border-gray-400">Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th>{item.name}</th>
                <th>{item.lastname}</th>
                <th>{item.position}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
