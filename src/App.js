import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/:search" element={<ShowList />} />
          <Route path="/shows/:showId" element={<ShowDetails />} />
          <Route path="/booking/:showId" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
