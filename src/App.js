import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContact from './pages/add-contact/add-contact.component';
import './App.css';
import DisplayContact from './pages/display-contact/display-contact.component';
import UpdateContact from './pages/update-contact/update-contact.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DisplayContact/>} />
        <Route path='/addcontact' element={<AddContact/>} />
        <Route path='/updatecontact' element={<UpdateContact/>} />
      </Routes>
    </div>
  );
}

export default App;
