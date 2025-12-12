//get data
export default function UserView() {
  return (
    <div>
      <table className="table-auto w-full mt-4 p-2 text-center border-collapse border-spacing-2 border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400">Last Name</th>
            <th className="border border-gray-400">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2"> John</td>
            <td className="border border-gray-400"> Doh</td>
            <td className="border border-gray-400"> Full-stack</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}