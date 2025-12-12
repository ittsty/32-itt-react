import axios from "axios";
import { useEffect, useState } from "react";
import FromInput from "./FromInput";
import TableView from "./TableView";

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
      setError("error ssss");
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
      <h2 className="text-2xl font-bold"> Create User here</h2>
      <FromInput fetchdata={fetchdata} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <TableView data={data} isAdmin={true} fetchdata={fetchdata} />
      )}
    </div>
  );
}
