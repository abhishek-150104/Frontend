import React, { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UpcomingAuctions = () => {
  const { allAuctions } = useSelector((state) => state.auction);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // yyyy-mm-dd
  });

  const auctionsForSelectedDate = allAuctions.filter((item) => {
    const auctionDate = new Date(item.startTime);
    return auctionDate.toISOString().split("T")[0] === selectedDate;
  });

  const formattedDate = new Date(selectedDate).toLocaleDateString();

  return (
    <section className="my-8 w-full min-h-[60vh] lg:min-h-[80vh] flex flex-col">
      <h3 className="text-[#22223b] text-xl font-semibold mb-2 md:text-2xl lg:text-3xl">
        Auctions By Date
      </h3>

      {/* Date Picker */}
      <div className="mb-6 flex items-center gap-3">
        <label className="font-semibold text-[#d6482b]">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border rounded px-2 py-1 text-stone-700"
        />
      </div>
      <div className="bg-gradient-to-br from-[#fbeee6] to-[#fff7f3] p-4 rounded-md shadow-md mb-6  w-full">
        <span className="rounded-full bg-[#d6482b]/10 text-[#d6482b] w-fit p-3 text-3xl">
          <RiAuctionFill />
        </span>
        <div className="mt-4">
          <h3 className="text-[#d6482b] text-xl font-semibold mb-2 md:text-2xl lg:text-3xl">
            Auctions For
          </h3>
          <h3 className="text-[#22223b] text-xl font-semibold md:text-2xl lg:text-3xl">
            {formattedDate}
          </h3>
        </div>
      </div>
      {auctionsForSelectedDate.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full py-6 px-4 bg-[#fdf9f7] rounded-md shadow-md">
          <span className="text-5xl text-[#d6482b] mb-4 bg-[#fbeee6] rounded-full p-4">
            <RiAuctionFill />
          </span>
          <p className="text-xl text-stone-500 font-semibold text-center">
            No auctions are scheduled for this date.
            <br />
            Please select another date!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {auctionsForSelectedDate.map((element) => (
            <Link
              to={`/auction/item/${element._id}`}
              key={element._id}
              className="flex flex-col gap-4 bg-white/90 p-4 rounded-md hover:shadow-lg transition-all duration-300 border border-[#fbeee6]"
            >
              <div className="flex items-center gap-2">
                <img
                  src={element.image?.url}
                  alt={element.title}
                  className="w-20 h-20 rounded shadow object-cover"
                />
                <p className="font-extralight text-[#22223b] text-[16px]">
                  {element.title}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-600 font-semibold">Starting Bid:</p>
                <p className="text-[#d6482b] font-semibold">
                  Rs. {element.startingBid}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-stone-600 font-bold">Starting Time:</p>
                <p className="text-[#22223b] text-[12px]">
                  {element.startTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingAuctions;
