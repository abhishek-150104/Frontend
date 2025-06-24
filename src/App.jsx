import React, { useEffect } from 'react'
import { BrowserRouter as Router ,  Routes, Route} from 'react-router-dom';
import SideDrawer from "./layout/SideDrawer"
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/SignUp"
import Login from './pages/Login';
import SubmitCommission from './pages/SubmitCommission';
import { useDispatch } from 'react-redux';
import { fetchLeaderboard, fetchUser } from './store/slices/userSlice';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import { getAllAuctionItems } from './store/slices/auctionSlice';
import Leaderboard from './pages/Leaderboard';
import Auction from './pages/Auction';
import AuctionItem from './pages/AuctionItem';
import CreateAuction from './pages/CreateAuction';
import Contact from './pages/Contact';
import ViewMyAuction from './pages/ViewMyAuction';
import ViewAuctionDetails from './pages/ViewAuctionDetails';
import UserProfile from './pages/UserProfile';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUser())
    dispatch(getAllAuctionItems())
    dispatch(fetchLeaderboard())
  },[])
  return (
   <Router>
  {/* Always visible sidebar button */}
  <SideDrawer />

  {/* Page content changes with route */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/submit-commission" element={<SubmitCommission/>} />
    <Route path="/how-it-works-info" element={<HowItWorks/>} />
    <Route path="/about" element={<AboutUs/>} />
    <Route path="/leaderboard" element={<Leaderboard/>} />
    <Route path="/auctions" element ={<Auction/>}/>
    <Route path="/auction/item/:id" element ={<AuctionItem/>}/>
    <Route path="/create-auction" element ={<CreateAuction/>}/>
    <Route path="/contact" element ={<Contact/>}/>
    <Route path="/view-my-auctions" element ={<ViewMyAuction/>}/>
    <Route path="/auction/details/:id" element ={<ViewAuctionDetails/>}/>
    <Route path="/me" element ={<UserProfile/>}/>
    <Route path="/dashboard" element ={<Dashboard/>}/>

  </Routes>

  <ToastContainer position="top-right" />
</Router>

  )
};

export default App