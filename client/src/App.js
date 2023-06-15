import React, { useState, useEffect,useParams} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'
import './output.css'
import Homepage from './pages/Homepage';
import Event from './pages/Event';
import Transportation from './pages/Transportation';
import Locations from './pages/Locations';
import BlogMain from './pages/BlogMain';
import BlogPage from './pages/BlogPage';
import MainLogin from './pages/MainLogin';
import MainRegister from './pages/MainRegister';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import CafeDetailPage from './pages/CafeDetailPage';
import PubDetailPage from './pages/PubDetailPage';
import CinemaDetailPage from './pages/CinemaDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import BlogListPage from './pages/BlogListPage';
import BlogEditPage from './pages/BlogEditPage';
import BusListPage from './pages/BusListPage';
import RestaurantListPage from './pages/RestaurantListPage';
import CinemaListPage from './pages/CinemaListPage';
import CafeListPage from './pages/CafeListPage';
import RestaurantEditPage from './pages/RestaurantEditPage';
import CinemaEditPage from './pages/CinemaEditPage';
import CafeEditPage from './pages/CafeEditPage';
import RestaurantAddPage from './pages/RestaurantAddPage';
import CinemaAddPage from './pages/CinemaAddPage';
import CafeAddPage from './pages/CafeAddPage';
import EventDetail from './pages/EventDetail';
import PasswordReset from './pages/PasswordReset';
import Panel from './pages/Panel';
import BlogAddPage from './pages/BlogAddPage';
import BusAddPage from './pages/BusAddPage';
import CafeAllPage from './pages/CafeAllPage';
import RestaurantALLPage from './pages/RestaurantALLPage';
import CinemaALLPage from './pages/CinemaAllPage';
import PubAllPage from './pages/PubAllPage';

import TransportationDetailPage from './pages/TransportationDetailPage';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  const [transportations, setTransportatios] = useState([]);

  useEffect(() => {
    fetch('/api/transportations')
      .then(response => response.json())
      .then(data => setTransportatios(data));
  }, []);





  const [bus, setBus] = useState([]);

  useEffect(() => {
    fetch('/api/bus')
      .then(response => response.json())
      .then(data => setBus(data));
  }, []);

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data));
  }, []);

  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    fetch('/api/cinemas')
      .then(response => response.json())
      .then(data => setCinemas(data));
  }, []);

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    fetch('/api/cafes')
      .then(response => response.json())
      .then(data => setCinemas(data));
  }, []);
  const [pubs, setPub] = useState([]);
  useEffect(() => {
    fetch('/api/pubs')
      .then(response => response.json())
      .then(data => setCinemas(data));
  }, []);



  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/blog-main" element={<BlogMain />} /> 
        <Route path="/event"  element={<Event />} /> 
        <Route path="/transportation" element={<Transportation />} /> 
        <Route path="/locations" element={<Locations />} /> 
        <Route path="/login" element={<MainLogin />} /> 
        <Route path="/register" element={<MainRegister />} /> 
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/blog-add" element={<BlogAddPage />} />
        <Route path="/blog-list" element={<BlogListPage />} />
        {/* <Route path="/bus-add" element={<BusAddPage />} /> */}
        <Route path="/bus-list" element={<BusListPage />} />
        <Route path="/cinema-add" element={<CinemaAddPage />} />
        <Route path="/bus-add" element={<BusAddPage />} />
        <Route path="/cinema-list" element={<CinemaListPage />} />
        <Route path="/cafe-add" element={<CafeAddPage />} />
        <Route path="/cafe-list" element={<CafeListPage />} />
        <Route path="/restaurant-add" element={<RestaurantAddPage />} />
        <Route path="/restaurant-list" element={<RestaurantListPage />} />
        <Route path="/bus-detail" element={<TransportationDetailPage />} />
        <Route path="/all-cafe" element={<CafeAllPage />} />
        <Route path="/all-restaurant" element={<RestaurantALLPage />} />
        <Route path="/all-cinemas" element={<CinemaALLPage />} />
          <Route path="/all-pubs" element={<PubAllPage />} />
        <Route path="/panel" element={<Panel />} />
        {blogs.map((blog) =>
        <Route path={`/blog/${blog._id}`} element={<BlogPage id={blog._id} />} />)}

{restaurants.map((restaurant) =>
        <Route path={`/restaurant/${restaurant._id}`} element={<RestaurantDetailPage id={restaurant._id} />} />)}
         {pubs.map((pub) =>
        <Route path={`/pub/${pub._id}`} element={<PubDetailPage id={pub._id} />} />)}
        {cafes.map((cafe) =>
        <Route path={`/cafe/${cafe._id}`} element={<RestaurantDetailPage id={cafe._id} />} />)}
        {cinemas.map((cinema) =>
        <Route path={`/cinema/${cinema._id}`} element={<CinemaDetailPage id={cinema._id} />} />)}
     

           {transportations.map((transportation) =>
        <Route path={`/transportation/${transportation._id}`} element={<TransportationDetailPage id={transportation._id} />} />)}


            {blogs.map((blog) =>
        <Route path={`/blog/edit/${blog._id}`} element={<BlogEditPage id={blog._id} />} />)}
            {bus.map((bus) =>
        <Route path={`/bus/edit/${bus._id}`} element={<BlogEditPage id={bus._id} />} />)}
         {events.map((event) =>
        <Route path={`/event/${event._id}`} element={<EventDetail id={event._id} />} />)}

   

         {cinemas.map((cinema) =>
        <Route path={`/cinema/edit/${cinema._id}`} element={<CinemaEditPage id={cinema._id} />} />)}
          {cafes.map((cafe) =>
        <Route path={`/cafe/edit/${cafe._id}`} element={<CafeEditPage id={cafe._id} />} />)}
          {restaurants.map((restaurant) =>
        <Route path={`/restaurant/edit/${restaurant._id}`} element={<RestaurantEditPage id={restaurant._id} />} />)}
        
  
      </Routes>
    </Router>
  );
}

export default App;