import React from "react";
import { FiSearch } from "react-icons/fi";

const BusinessPromoters = () => {
  const data = [
    {
      name: "Pavithri",
      phone: "9605854176",
      amount: "₹ 500",
      status: "Inactive",
    },
    {
      name: "Shimna",
      phone: "7034124557",
      amount: "₹ 500",
      status: "Accept Payment",
    },
    {
      name: "Saranya",
      phone: "9037580097",
      amount: "₹ 500",
      status: "Inactive",
    },
    {
      name: "Nidheesh Kumar",
      phone: "9037580097",
      amount: "৳ 500",
      status: "Inactive",
    },
    {
      name: "Trust",
      phone: "9037580097",
      amount: "৳ 500",
      status: "Inactive",
    },

  ];

  return (
    <main className="flex-1 p-6 overflow-hidden bg-white rounded-xl shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">01 - 25 March, 2020</p>
        {/* Chart Placeholder */}
        <div className="mt-4 h-24 bg-gray-100 rounded-md shadow-sm flex items-center justify-center">
          <span className="text-gray-400">Chart Placeholder</span>
        </div>
      </div>
      <div>
        <div className=" mt-5">
          <p className="text-4xl">Give Help</p>
        </div>
        <div className="bg-primary mt-4 w-full p-4 flex items-center gap-4 rounded-md shadow-md">
          {/* Dropdown */}
          <div className="w-1/6">
            <select
              name="level"
              id="level-select"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:to-blue-500"
            >
              <option value="level1">Level 1</option>
              <option value="level2">Level 2</option>
              <option value="level3">Level 3</option>
            </select>
          </div>

          {/* Input Field */}
          <div className="flex items-center border border-gray-300 bg-white rounded-md overflow-hidden w-full">
            {/* Search Icon Section */}
            <div className="flex items-center  text-white px-3  bg-white">
              <FiSearch className="text-lg" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-scroll  rounded-lg shadow-lg mt-5">
          <table className="min-w-full bg-gray-200  overflow-scroll">
            <thead>
              <tr className=" text-black">
                <th className="py-3 px-4 text-left border-b">Name</th>
                <th className="py-3 px-4 text-left border-b">phone</th>
                <th className="py-3 px-4 text-left border-b">Amount</th>
                <th className="py-3 px-4 text-left border-b">status</th>
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
                  <td className="py-3 px-4 border-b">{user.phone}</td>
                  <td className="py-3 px-4 border-b">{user.amount}</td>
                  <td
                    className={`py-3  border-b ${
                      user.status === "Accept Payment"
                        ? "text-white bg-primary  p-2 px-3  rounded-lg"
                        : "px-4"
                    }`}
                  >
                    {user.status}
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default BusinessPromoters;
