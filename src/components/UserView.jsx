import axios from "axios";
import { useEffect, useState } from "react";
import TableView from "./TableView";

export default function UserView() {
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

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <TableView data={data} isAdmin={false} />
      )}
    </div>
  );
}
