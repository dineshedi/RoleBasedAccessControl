import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaSignOutAlt } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [val, setVal] = useState({ id: 0, name: "", email: "", role: "", task: "" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

 
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (selectedUser) {
      setSelectedUser((prev) => ({ ...prev, [name]: value }));
    } else {
      setVal((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? { ...user, ...selectedUser } : user
      );
      setUsers(updatedUsers);
    } else {
      const newUser = { id: users.length + 1, ...val };
      setUsers((prev) => [...prev, newUser]);
    }

    setVal({ id: 0, name: "", email: "", role: "", task: "" }); 
    setSelectedUser(null);
    setFlag(false); 
  };

  const handleAddUser = () => {
    setFlag(!flag);
    setVal({ id: 0, name: "", email: "", role: "", task: "" }); 
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setSelectedUser(userToEdit);
    setFlag(true);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleLogout = () => {
    localStorage.removeItem("UserRole");
    navigate('/')
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-fixed bg-cover bg-center"
    >
      <div className="w-full h-full flex flex-col justify-start items-center p-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-opacity-80">
        <h1 className="text-4xl font-bold text-white mb-6">User Management</h1>
        <div className="w-full gap-2 flex justify-end mb-6">
        <button
          onClick={handleAddUser}
          className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          {flag ? "Close Form" : "Add New User"}
        </button>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            Logout
          </button>
          
        </div>
        <div
          className={`transition-opacity duration-300 ${flag ? "opacity-0" : "opacity-100"} w-full max-w-4xl`}
        >
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full table-auto text-gray-800">
              <thead className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Role</th>
                  <th className="py-3 px-6">Task</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="bg-gray-50">
                    <td className="py-3 px-6">{user.name}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.role}</td>
                    <td className="py-3 px-6">{user.task}</td>
                    <td className="py-3 px-6 flex justify-center space-x-4">
                      <button
                        onClick={() => handleEditUser(user.id)}
                        className="text-yellow-500 hover:text-yellow-600 transition duration-200 ease-in-out"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-500 hover:text-red-600 transition duration-200 ease-in-out"
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out absolute top-32 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg p-6 w-full max-w-md ${
            flag ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-700 block font-medium mb-2">Name:</label>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                value={selectedUser ? selectedUser.name : val.name}
                type="text"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 block font-medium mb-2">Email:</label>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                value={selectedUser ? selectedUser.email : val.email}
                type="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 block font-medium mb-2">Role:</label>
              <input
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                value={selectedUser ? selectedUser.role : val.role}
                type="text"
                name="role"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 block font-medium mb-2">Task:</label>
              <textarea
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                value={selectedUser ? selectedUser.task : val.task}
                name="task"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-200 ease-in-out"
                type="submit"
              >
                {selectedUser ? "Update" : "Add"} User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
