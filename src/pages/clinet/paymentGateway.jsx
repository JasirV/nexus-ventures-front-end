import React from "react";
import PaymentBg from "../../assets/paymentBg.png";
const PaymentGateway = () => {
  return (
    <div className="flex justify-center items-center pt-14 pb-14">
      <div className="flex bg-primary rounded-3xl w-4/5 gap-10">
        {/* leftsection */}

        <div className="">
          <img src={PaymentBg} alt="" />
        </div>
        {/* rightsection */}
        <div className="flex flex-col  flex-grow gap-10">
          <p className="text-white font-semibold text-5xl mb-2 mt-10">Payment Gateway</p>
          <hr />
          <p className="text-white font-semibold text-3xl">Select Payment Method</p>
          <div className="flex flex-col text-white text-xl gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="Credit/DebitCard"className="w-5 h-5" />
              Credit/Debit Card
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="UPI" className="w-5 h-5" />
              UPI 
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="Wallets" className="w-5 h-5" />
              Wallets
            </label>
            <label className="flex items-center gap-2"> 
              <input type="radio" name="payment" value="NetBanking" className="w-5 h-5" />
              Net Banking
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-black w-11/12 text-white py-3 rounded border-white border font-bold">Confirm Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
