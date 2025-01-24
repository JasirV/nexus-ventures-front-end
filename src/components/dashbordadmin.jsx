import React from 'react'

const Dashbordadmin = () => {
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

        {/* Table */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr>
                <th className="py-2 px-4 text-gray-700">Name</th>
                <td className="py-2 px-4 text-gray-900">Nidheesh Aniyaram</td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-gray-700">Reference no.</th>
                <td className="py-2 px-4 text-gray-900">640389ab394ee</td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-gray-700">Business Promoters</th>
                <td className="py-2 px-4 text-gray-900">201</td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-gray-700">Business Income</th>
                <td className="py-2 px-4 text-gray-900">100500</td>
              </tr>
              <tr>
                <th className="py-2 px-4 text-gray-700">Business Partners</th>
                <td className="py-2 px-4 text-gray-900">5</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reference Link */}
        <div className="mt-6 p-4 bg-gray-100 flex rounded-lg shadow justify-between">
          <h3 className="mb-2 text-lg font-bold text-black">Reference Link</h3>
          <div className="flex items-center justify-between gap-3">
            <span className="text-gray-900">
              virton.in/#/register/640389ab394ee
            </span>
            <button className="text-white bg-primary  p-2 px-8 rounded-lg hover:underline">Copy</button>
          </div>
        </div>
      </main>
  )
}

export default Dashbordadmin