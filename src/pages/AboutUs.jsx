import React from 'react'

const AboutUs = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-10 flex flex-col min-h-screen py-4 justify-center bg-gradient-to-br from-[#fff7f3] to-[#fbeee6]">
        <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h1 className="text-[#d6482b] text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl text-stone-600 mb-2">
            Welcome to <span className="font-bold text-[#d6482b]">PrimeBid</span>, the ultimate destination for online auctions and bidding excitement.
          </p>
          <p className="text-lg text-stone-500">
            Founded in 2025, we are dedicated to providing a dynamic and user-friendly platform for buyers and sellers to connect, explore, and transact in a secure and seamless environment.
          </p>
        </div>
        <div className="bg-[#fff] shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-[#111] text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-lg text-stone-600">
            At <span className="font-bold text-[#d6482b]">PrimeBid</span>, our mission is to revolutionize the way people buy and sell items online. We strive to create an engaging and trustworthy marketplace that empowers individuals and businesses to discover unique products, make informed decisions, and enjoy the thrill of competitive bidding.
          </p>
        </div>
        <div className="bg-[#fff] shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-[#111] text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((element) => (
              <li
                className="bg-[#fbeee6] rounded-lg p-4 text-left flex flex-col shadow transition-transform hover:scale-105"
                key={element.id}
              >
                <span className="text-[#d6482b] font-bold text-lg mb-1">{element.title}</span>
                <span className="text-stone-700">{element.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/90 shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-[#111] text-2xl font-semibold mb-2">Our Story</h3>
          <p className="text-lg text-stone-600">
            Founded by <span className="font-bold text-[#d6482b]">Shrivastav & Co.</span>, PrimeBid was born out of a passion for connecting people with unique and valuable items. With years of experience in the auction industry, our team is committed to creating a platform that offers an unparalleled auction experience for users worldwide.
          </p>
        </div>
        <div className="bg-white/90 shadow-lg rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-[#111] text-2xl font-semibold mb-2">Join Us</h3>
          <p className="text-lg text-stone-600">
            Whether you're looking to buy, sell, or simply explore, <span className="font-bold text-[#d6482b]">PrimeBid</span> invites you to join our growing community of auction enthusiasts. Discover new opportunities, uncover hidden gems, and experience the thrill of winning your next great find.
          </p>
        </div>
        <div className="text-center">
          <p className="text-[#d6482b] text-2xl font-bold mb-3 drop-shadow">
            Thank you for choosing PrimeBid.<br />We look forward to being a part of your auction journey!
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;