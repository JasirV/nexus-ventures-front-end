import React from 'react'

const TopReceiversList = () => {
    const data = [
        {
          name: "Pavithri",
          email: "shimnasreedaran@gmail.com",
          phone: "9605854176",
          state: "Maharashtra",
          totalIncome: "₹50,000",
          promoters: 100,
        },
        {
          name: "Shimna",
          email: "kkousaly73@gmail.com",
          phone: "7034124557",
          state: "Karnataka",
          totalIncome: "₹50,000",
          promoters: 50,
        },
        {
          name: "Saranya",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          state: "Tamil Nadu",
          totalIncome: "₹50,000",
          promoters: 45,
        },
        {
          name: "Nidheesh Kumar",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          state: "Karnataka",
          totalIncome: "₹50,000",
          promoters: 65,
        },
        {
          name: "Trust",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          state: "Karnataka",
          totalIncome: "₹50,000",
          promoters: 48,
        },
        {
          name: "lorem",
          email: "kkousaly73@gmail.com",
          phone: "9037580097",
          state: "Karnataka",
          totalIncome: "₹50,000",
          promoters: 77,
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
      <div className="overflow-x-auto  rounded-lg shadow-lg mt-5">
        <table className="min-w-full bg-gray-100  ">
          <thead>
            <tr className=" text-black">
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Email</th>
              <th className="py-3 px-4 text-left border-b">Phone</th>
              <th className="py-3 px-4 text-left border-b">State</th>
              <th className="py-3 px-4 text-left border-b">Total Income</th>
              <th className="py-3 px-4 text-left border-b">No. of Promoters</th>
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
                <td className="py-3 px-4 border-b">{user.state}</td>
                <td className="py-3 px-4 border-b">{user.totalIncome}</td>
                <td className="py-3 px-4 border-b">{user.promoters}</td>
                {/* <button className="text-white bg-primary  p-2 px-8 rounded-lg hover:underline">View</button> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
        </main>
  )
}

export default TopReceiversList