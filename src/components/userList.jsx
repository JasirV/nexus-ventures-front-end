import React from "react";
import { FiSearch } from "react-icons/fi";

const UserList = () => {
    const data = [
        {
          name: "Pavithri",
          status: "Active",
          email: "shimnasreedaran@gmail.com",
          phone: "9605854176",
          referenceId: "6403871332336",
          paymentStatus: "Paid",
        },
        {
          name: "Shimna",
          status: "Active",
          email: "kkousaly73@gmail.com",
          phone: "7034124557",
          referenceId: "640378eec0le9",
          paymentStatus: "Paid",
        },
        {
          name: "Saranya",
          status: "Active",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          referenceId: "6403673e777ac",
          paymentStatus: "Paid",
        },
        {
          name: "Nidheesh Kumar",
          status: "Active",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          referenceId: "64035d8ea007c",
          paymentStatus: "Paid",
        },
        {
          name: "Trust",
          status: "Active",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          referenceId: "64035d8ea007c",
          paymentStatus: "Paid",
        },
        {
          name: "Lorem",
          status: "Active",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          referenceId: "64035d8ea007c",
          paymentStatus: "Paid",
        },
      ];
  return (
    <main className="flex-1 p-6 bg-white rounded-xl shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">01 - 25 March, 2020</p>
        {/* Chart Placeholder */}
        <div className="mt-4 h-24 bg-gray-100 rounded-md shadow-sm flex items-center justify-center">
          <span className="text-gray-400">Chart Placeholder</span>
        </div>
      </div>
      <div>
        <p className="text-4xl font-semibold mt-3">User List </p>
      </div>
      <div className="mt-5 w-1/3">
        <div className="relative flex items-center">
          {/* Input Field */}
          <input
            className="w-full px-4 py-1 pr-16 border-2 border-primary rounded-md placeholder-gray-200"
            type="text"
            placeholder="Search..."
          />
          {/* Search Icon */}
          <span className="absolute right-0 bg-primary p-2 text-white rounded-r-md">
            <FiSearch size={20} />
          </span>
        </div>
      </div>
      <div>
      <div className="overflow-x-auto  rounded-lg shadow-lg mt-5">
        <table className="min-w-full bg-gray-100  ">
          <thead>
            <tr className=" text-black">
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Email</th>
              <th className="py-3 px-4 text-left border-b">Phone</th>
              <th className="py-3 px-4 text-left border-b">Status</th>
              <th className="py-3 px-4 text-left border-b">View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-4 ml-5 px-4 border-b ">{user.name}</td>
                <td className="py-3 px-4 border-b">{user.email}</td>
                <td className="py-3 px-4 border-b">{user.phone}</td>
                <td className="py-3 px-4 border-b">{user.status}</td>
                <button className="text-white bg-primary  p-2 px-8 rounded-lg hover:underline">View</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </main>
  );
};

export default UserList;
