import Spinner from "@/custom-component/Spinner";
import Card from "@/custom-component/Card";
import React from "react";
import { useSelector } from "react-redux";

const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
          <section className="my-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-8">
              <div>
               <h1
              className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}>
                  Explore Live Auctions
                </h1>
                <p className="text-lg text-stone-600 max-w-2xl">
                  Discover, bid, and win unique items from trusted auctioneers.<br className="hidden md:block" />
                  Browse all ongoing and upcoming auctions below!
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#d6482b] opacity-80"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-[#fdba88] opacity-80"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-[#fbeee6] opacity-80"></span>
              </div>
            </div>
            {allAuctions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white/80 rounded-xl shadow-inner">
                <span className="text-6xl text-[#d6482b] mb-4 animate-bounce">🛒</span>
                <p className="text-2xl text-stone-400 font-semibold text-center">
                  No auctions available at the moment.<br />Please check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {allAuctions.map((element) => (
                  <Card
                    title={element.title}
                    startTime={element.startTime}
                    endTime={element.endTime}
                    imgSrc={element.image?.url}
                    startingBid={element.startingBid}
                    id={element._id}
                    key={element._id}
                  />
                ))}
              </div>
            )}
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;