import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa"; 

const UserOnly = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers)); 
    } else {
      setUsers([
        { id: 1, name: "", email: "", role: "", task: "" }
      ]);
    }
  }, []);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-fixed bg-cover bg-center"
    >
      <div className="w-full h-full flex flex-col justify-start items-center p-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-opacity-80">
       
        <h1 className="text-4xl font-bold text-white mb-6">Today's Task</h1>
        <div className="w-full max-w-4xl">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full table-auto text-gray-800">
              <thead className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Role</th>
                  <th className="py-3 px-6">Task</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="bg-gray-100">
                    <td className="py-3 px-6">{user.name}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.role}</td>
                    <td className="py-3 px-6">{user.task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <button
            className="bg-gray-500 text-white px-6 py-3 rounded-full shadow-lg cursor-not-allowed"
            disabled
          >
            <FaEye className="inline-block mr-2" />
            View Only
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOnly;
