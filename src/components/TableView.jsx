import axios from "axios";

export default function TableView({ data, isAdmin, fetchdata }) {
    
  const deleteData = async (id) => {
    const URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const isConfirm = confirm("You sure you want to delete");
    if (!isConfirm) return;
    await axios.delete(`${URL}/${id}`).then(() => {
      fetchdata();
    });
  };
  return (
    <table className="table-auto w-full mt-4 p-2 text-center border-collapse border-spacing-2 border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          {isAdmin && <th className="w-2/10">Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.position}</td>
            {isAdmin && (
              <td>
                <button
                  className="font-bold text-red-500 h-full hover:shadow-md p-1 rounded-md"
                  onClick={() => deleteData(item.id)}
                >
                  Delete
                </button>
              </td>
            )}
            {/* <button
                    className="font-bold text-red-500 h-full hover:shadow-md p-1 rounded-md"
                    onClick={() => deleteData(item.id)}
                  >
                    Edit
                  </button> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
