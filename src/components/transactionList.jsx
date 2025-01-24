import React from "react";

const TransactionList = () => {
  const data = [
    {
      grossAmount: 75465,
      orderDate: "08-28-24",
      status: "Shipped",
      currency: "INR",
      growsAmount:472,
      paymentGatewayFees: 472,
      paymentGatewayTax: 9.54,
      tds: 1.7,
      amountPayable: 450,
      customer: "Johnson",
    },
    {
      grossAmount: 75465,
      orderDate: "08-28-24",
      status: "Shipped",
      currency: "INR",
      growsAmount:472,
      paymentGatewayFees: 472,
      paymentGatewayTax: 9.54,
      tds: 1.7,
      amountPayable: 450,
      customer: "James",
    },
    {
      grossAmount: 75465,
      orderDate: "08-28-24",
      status: "Shipped",
      currency: "INR",
      growsAmount:472,
      paymentGatewayFees: 472,
      paymentGatewayTax: 9.54,
      tds: 1.7,
      amountPayable: 450,
      customer: "James",
    },
    {
      grossAmount: 75465,
      orderDate: "08-28-24",
      status: "Shipped",
      currency: "INR",
      growsAmount:472,
      paymentGatewayFees: 472,
      paymentGatewayTax: 9.54,
      tds: 1.7,
      amountPayable: 450,
      customer: "James",
    },
  ];
  return (
    <main className="flex-1 p-6 bg-white rounded-xl shadow-lg overflow-hidden">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">01 - 25 March, 2020</p>
        {/* Chart Placeholder */}
        <div className="mt-4 h-24 bg-gray-100 rounded-md shadow-sm flex items-center justify-center">
          <span className="text-gray-400">Chart Placeholder</span>
        </div>
      </div>
      <div>
        <p className="text-4xl font-semibold mt-3 mb-3">Transaction List</p>
      </div>
      <div className="flex justify-between items-center">
        {/* Month Selection */}
        <div className="flex items-center gap-4">
          <p className="text-lg font-normal">Select Month</p>
          <select
            className="px-4 py-2 border-2 border-gray-300 rounded-md"
            defaultValue="November 2024"
          >
            <option>January 2024</option>
            <option>February 2024</option>
            <option>March 2024</option>
            <option>April 2024</option>
            <option>May 2024</option>
            <option>June 2024</option>
            <option>July 2024</option>
            <option>August 2024</option>
            <option>September 2024</option>
            <option>October 2024</option>
            <option>November 2024</option>
            <option>December 2024</option>
          </select>
        </div>

        {/* Download Button */}
        <button className="bg-primary text-white px-4 py-1 rounded-md hover:bg-primary-dark">
          Download
        </button>
      </div>
      <div className="overflow-auto">
      <div className="overflow-x-auto  rounded-lg shadow-lg mt-5">
        <table className="min-w-full bg-gray-100  ">
          <thead>
            <tr className=" text-black">
              <th className="py-3 px-4 text-left border-b">Order</th>
              <th className="py-3 px-4 text-left border-b">Date</th>
              <th className="py-3 px-4 text-left border-b">Shipped</th>
              <th className="py-3 px-4 text-left border-b">Currency</th>
              <th className="py-3 px-4 text-left border-b">TGross Amount</th>
              <th className="py-3 px-4 text-left border-b">Payment gateway Fees</th>
              <th className="py-3 px-4 text-left border-b">Payment gateway Tax</th>
              <th className="py-3 px-4 text-left border-b">TDS</th>
              <th className="py-3 px-4 text-left border-b">Amount Payable</th>
              <th className="py-3 px-4 text-left border-b">Customers</th>
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
                <td className="py-4 ml-5 px-4 border-b ">{user.grossAmount}</td>
                <td className="py-3 px-4 border-b">{user.orderDate}</td>
                <td className="py-3 px-4 border-b">{user.status}</td>
                <td className="py-3 px-4 border-b">{user.currency}</td>
                <td className="py-3 px-4 border-b">{user.grossAmount}</td>
                <td className="py-3 px-4 border-b">{user.paymentGatewayFees}</td>
                <td className="py-3 px-4 border-b">{user.paymentGatewayTax}</td>
                <td className="py-3 px-4 border-b">{user.tds}</td>
                <td className="py-3 px-4 border-b">{user.amountPayable}</td>
                <td className="py-3 px-4 border-b">{user.customer}</td>
                {/* <button className="text-white bg-primary  p-2 px-8 rounded-lg hover:underline">View</button> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </main>
  );
};

export default TransactionList;
