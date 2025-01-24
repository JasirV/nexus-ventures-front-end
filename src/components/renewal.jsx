import React from "react";

const Renewal = () => {
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
          <p className="text-4xl">Renewal and upgrade</p>
          <p className="text-lg w-2/3 mt-3">
            Your reseller plan expires soon. You have 9 remaining credits. Renew
            your plan to get uninterrupted services.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap p-12 gap-16">
        {/* Card 1 */}
        <div className="w-full md:w-1/3">
          <div className="bg-primary flex justify-center p-2 rounded-t-xl">
            <p className="text-4xl text-white">Renewal</p>
          </div>
          <div className="bg-[#DAD7FF] flex flex-col justify-evenly items-center rounded-b-xl p-4">
            <p className="text-3xl font-semibold mt-5 mb-3">₹ 590</p>
            <p className="text-sm mt-5 mb-4">Credits: 10</p>
            <button className="py-2 text-white bg-primary w-1/2 px-3 rounded-lg flex justify-center">
              Select Plan
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3">
          <div className="bg-primary flex justify-center p-2 rounded-t-xl">
            <p className="text-4xl text-white">Renewal</p>
          </div>
          <div className="bg-[#DAD7FF] flex flex-col justify-evenly items-center rounded-b-xl p-4">
            <p className="text-3xl font-semibold mt-5 mb-3">₹ 590</p>
            <p className="text-sm mt-5 mb-4">Credits: 10</p>
            <button className="py-2 text-white bg-primary w-1/2 px-3 rounded-lg flex justify-center">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Renewal;
