import React from "react";
import { FiSearch } from "react-icons/fi";

const NewRequests = () => {
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
    {
      name: "Lorem",
      phone: "9037580097",
      amount: "₹ 500",
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
          <p className="text-4xl">New Requests</p>
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
                    className=''
                  ><p className="py-2 text-white bg-primary w-1/2  p-2 px-3  rounded-lg">Accept Payment</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};


export default NewRequests