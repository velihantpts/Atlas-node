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
import PlaceDetalis from './pages/PlaceDetalis';
import CheckoutPage from './pages/CheckoutPage';
import BlogListPage from './pages/BlogListPage';
import BlogEditPage from './pages/BlogEditPage';
import BusListPage from './pages/BusListPage';
import BusEditPage from './pages/BusEditPage';
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
import AllLocations from './pages/AllLocations'
import PasswordReset from './pages/PasswordReset';
import Panel from './pages/Panel';
import BlogAddPage from './pages/BlogAddPage';
import BusAddPage from './pages/BusAddPage';
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
        <Route path="/place_detail" element={<PlaceDetalis />} /> 
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/all-locations" element={<AllLocations />} />
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
        <Route path="/panel" element={<Panel />} />
        {blogs.map((blog) =>
        <Route path={`/blog/${blog._id}`} element={<BlogPage id={blog._id} />} />)}
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