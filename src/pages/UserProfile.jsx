import Spinner from '@/custom-component/Spinner'
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-0 pt-20 lg:pl-[250px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-br from-[#232526] via-[#414345] to-[#fdba88]">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="bg-white/95 shadow-2xl mx-auto w-full max-w-6xl h-auto px-4 flex flex-col gap-6 items-center py-12 justify-center rounded-2xl border-2 border-[#232526]">
              <div className="relative mb-6 flex flex-col items-center">
                <img
                  src={user.profileImage?.url}
                  alt="/imageHolder.jpg"
                  className="w-40 h-40 rounded-full border-4 border-[#232526] shadow-lg object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#232526] text-[#fdba88] px-4 py-2 rounded-full text-sm font-bold shadow">
                  {user.role}
                </span>
              </div>

              <h2 className="text-4xl font-bold text-[#232526] mb-2 tracking-tight drop-shadow">
                {user.userName}
              </h2>
              <p className="text-xl text-gray-700 mb-8">{user.email}</p>

              <div className="mb-8 w-full">
                <h3 className="text-2xl font-semibold mb-6 text-[#232526]">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Username
                    </label>
                    <input
                      type="text"
                      value={user.userName}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Email
                    </label>
                    <input
                      type="text"
                      value={user.email}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Phone
                    </label>
                    <input
                      type="text"
                      value={user.phone}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Address
                    </label>
                    <input
                      type="text"
                      value={user.address}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Role
                    </label>
                    <input
                      type="text"
                      value={user.role}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-800">
                      Joined On
                    </label>
                    <input
                      type="text"
                      value={user.createdAt?.substring(0, 10)}
                      className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {user.role === "Auctioneer" && (
                <div className="mb-8 w-full">
                  <h3 className="text-2xl font-semibold mb-6 text-[#232526]">
                    Payment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        value={user.paymentMethods.bankTransfer.bankName}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        Bank Account 
                      </label>
                      <input
                        type="text"
                        value={user.paymentMethods.bankTransfer.bankAccountNumber}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        User Name On Bank Account
                      </label>
                      <input
                        type="text"
                        value={user.paymentMethods.bankTransfer.bankAccountName}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        RazorPay Number
                      </label>
                      <input
                        type="text"
                        value={user.paymentMethods.razorPay.razorNumber}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        Paypal Email
                      </label>
                      <input
                        type="text"
                        value={user.paymentMethods.paypal.paypalEmail}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8 w-full">
                <h3 className="text-2xl font-semibold mb-6 text-[#232526]">
                  Other User Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {user.role === "Auctioneer" && (
                    <div>
                      <label className="block text-base font-medium text-gray-800">
                        Unpaid Commissions
                      </label>
                      <input
                        type="text"
                        value={user.unpaidCommission}
                        className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                        disabled
                      />
                    </div>
                  )}
                  {user.role === "Bidder" && (
                    <>
                      <div>
                        <label className="block text-base font-medium text-gray-800">
                          Auctions Won
                        </label>
                        <input
                          type="text"
                          value={user.auctionsWon}
                          className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-base font-medium text-gray-800">
                          Money Spent
                        </label>
                        <input
                          type="text"
                          value={user.moneySpent}
                          className="w-full mt-1 p-3 border border-[#232526] rounded-md focus:outline-none bg-[#f3f3f3] text-[#232526] font-semibold"
                          disabled
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default UserProfile;