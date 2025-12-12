

// todo 3input field - get - delete - put
export default function AdminView() {
  return (
    <div>
      <h2 className="text-2xl font-bold"> Create User here</h2>
      <div className="InputField flex flex-col justify-between gap-4 mt-2 md:flex-row">
        <input
          className=" bg-white grow p-2 rounded-lg"
          placeholder="Name"
        ></input>
        <input
          className=" bg-white grow p-2 rounded-lg"
          placeholder="Lastname"
        ></input>
        <input
          className=" bg-white grow p-2 rounded-lg"
          placeholder="Position"
        ></input>
        <button className=" bg-blue-500 p-2 rounded-lg text-white shadow-md hover:shadow-lg">
          Save
        </button>
      </div>
      <table className="table-auto w-full mt-4 p-2 text-center border-collapse border-spacing-2 border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th className="w-2/10">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> John</td>
            <td> Doh</td>
            <td> Full-stack</td>
            <td className="w-2/10 ">
              <button className="font-bold text-red-500 px-1 hover:shadow-md"> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
