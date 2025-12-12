import axios from "axios";
import { useEffect, useState } from "react";
import FromInput from "./FromInput";

export default function AdminView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  const fetchdata = async () => {
    try {
      setLoading(true);
      await axios.get(URL).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      setError(error);
    } finally {
      console.log("loading complete");
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    const isConfirm = confirm("You sure you want to delete");
    if (!isConfirm) return;
    await axios.delete(`${URL}/${id}`).then(() => {
      fetchdata();
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold"> Create User here</h2>
      <FromInput fetchdata={fetchdata} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table-auto w-full mt-4 p-2 text-center border-collapse border-spacing-2 border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th className="w-2/10">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td>
                  <button
                    className="font-bold text-red-500 h-full hover:shadow-md p-1 rounded-md"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                  {/* <button
                    className="font-bold text-red-500 h-full hover:shadow-md p-1 rounded-md"
                    onClick={() => deleteData(item.id)}
                  >
                    Edit
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
