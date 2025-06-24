import Spinner from "@/custom-component/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { placeBid } from "@/store/slices/bidSlice";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const handleBid = () => {
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  // Format date for display
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleString();
  };

  // Place Bid Bar (always visible and floating)
  const showBidBar =
    !loading &&
    auctionDetail &&
    Date.now() >= new Date(auctionDetail.startTime) &&
    Date.now() <= new Date(auctionDetail.endTime);

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-2 items-center">
          <Link
            to="/"
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Home
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <Link
            to={"/auctions"}
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Auctions
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <p className="text-stone-600">{auctionDetail.title}</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row pb-32">
            {/* pb-32 for floating bid bar space */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="bg-white w-[100%] lg:w-40 lg:h-40 flex justify-center items-center p-5">
                  <img
                    src={auctionDetail.image?.url}
                    alt={auctionDetail.title}
                  />
                </div>
                <div className="flex flex-col justify-around pb-4">
                  <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                    {auctionDetail.title}
                  </h3>
                  <p className="text-xl font-semibold">
                    Condition:{" "}
                    <span className="text-[#D6482B]">
                      {auctionDetail.condition}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">
                    Minimum Bid:{" "}
                    <span className="text-[#D6482B]">
                      Rs.{auctionDetail.startingBid}
                    </span>
                  </p>
                  <p className="text-md font-semibold mt-2">
                    Start: <span className="text-stone-600">{formatDate(auctionDetail.startTime)}</span>
                  </p>
                  <p className="text-md font-semibold">
                    End: <span className="text-stone-600">{formatDate(auctionDetail.endTime)}</span>
                  </p>
                </div>
              </div>
              <p className="text-xl w-fit font-bold mt-2">
                Auction Item Description
              </p>
              <hr className="my-2 border-t-[1px] border-t-stone-700" />
              {auctionDetail.description &&
                auctionDetail.description.split(". ").map((element, index) => {
                  return (
                    <li key={index} className="text-[18px] my-2">
                      {element}
                    </li>
                  );
                })}
            </div>
            <div className="flex-1">
              <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
                BIDS
              </header>
              <div className="bg-white px-4 min-h-fit lg:min-h-[650px]">
                {auctionBidders &&
                new Date(auctionDetail.startTime) < Date.now() &&
                new Date(auctionDetail.endTime) > Date.now() ? (
                auctionBidders.length > 0 ? (
                  auctionBidders.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={element.profileImage}
                            alt={element.userName}
                            className="w-12 h-12 rounded-full my-2 hidden md:block"
                          />
                          <div>
                            <p className="text-[18px] font-semibold">
                              {element.userName}
                            </p>
                            <p className="text-[16px] text-stone-500 font-medium">
                              Bid: <span className="text-[#D6482B] font-bold">Rs. {element.amount}</span>
                            </p>
                          </div>
                        </div>
                        {index === 0 ? (
                          <p className="text-[20px] font-semibold text-green-600">
                            1st
                          </p>
                        ) : index === 1 ? (
                          <p className="text-[20px] font-semibold text-blue-600">
                            2nd
                          </p>
                        ) : index === 2 ? (
                          <p className="text-[20px] font-semibold text-yellow-600">
                            3rd
                          </p>
                        ) : (
                          <p className="text-[20px] font-semibold text-gray-600">
                            {index + 1}th
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : (
                    <p className="text-center text-gray-500 py-4">
                      No bids for this auction
                    </p>
                  )
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <img
                    src="/notStarted.png"
                    alt="not-started"
                    className="w-full max-h-[650px]"
                  />
                ) : (
                  <img
                    src="/auctionEnded.png"
                    alt="ended"
                    className="w-full max-h-[650px]"
                  />
                )}
              </div>
              {/* Remove the old static bid bar here */}
            </div>
          </div>
        )}
      </section>
      {/* Floating Place Bid Bar */}
      {showBidBar && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[98%] max-w-[650px] bg-[#D6482B] z-50 py-4 px-4 sm:px-8 rounded-2xl shadow-xl text-[16px] md:text-[20px] font-semibold flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 flex-col sm:flex-row sm:items-center w-full">
            <p className="text-white">Place Bid</p>
            <input
              type="number"
              className="w-32 focus:outline-none md:text-[20px] p-1 rounded"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            className="w-full sm:w-auto p-4 text-white bg-black rounded-full transition-all duration-300 hover:bg-[#222] mt-2 sm:mt-0 flex items-center justify-center"
            onClick={handleBid}
          >
           <RiAuctionFill />
          </button>
        </div>
      )}
    </>
  );
};

export default AuctionItem;