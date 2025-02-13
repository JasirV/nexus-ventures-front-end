import React from "react";
import { FiSearch } from "react-icons/fi";

const Invoice = () => {
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
          <p className="text-4xl">Invoice List</p>
          <p className="">Select Year & Month</p>
          <div className="flex items-center gap-4 mt-4">
  {/* Month Selection */}
  <div className="w-1/5">
    <select
      id="month-select"
      name="month"
      className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value=""> January</option>
      {[
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].map((month, index) => (
        <option key={index} value={month}>
          {month}
        </option>
      ))}
    </select>
  </div>

  {/* Year Selection */}
  <div className="w-1/5">
    <select
      id="year-select"
      name="year"
      className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">2025</option>
      {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(
        (year) => (
          <option key={year} value={year}>
            {year}
          </option>
        )
      )}
    </select>
  </div>
</div>

        </div>
        
        <div className="overflow-y-auto  rounded-lg shadow-lg mt-5">
          <table className="min-w-full bg-gray-200  overflow-y-auto">
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



export default Invoice