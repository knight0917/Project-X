'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    DOB: '',
    time: '',
    gender: '',
    driver_no: '',
    conductor_no: '',
    super_no: '',
    planes: '',
    element: '',
    driver_qualities: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/connDB', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error saving the data!', error);
      alert('Error saving data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date of Birth:
        <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Driver Number:
        <input type="number" name="driver_no" value={formData.driver_no} onChange={handleChange} />
      </label>
      <br />
      <label>
        Conductor Number:
        <input type="number" name="conductor_no" value={formData.conductor_no} onChange={handleChange} />
      </label>
      <br />
      <label>
        Super Number:
        <input type="checkbox" name="super_no" checked={formData.super_no} onChange={handleChange} />
      </label>
      <br />
      <label>
        Planes:
        <input type="text" name="planes" value={formData.planes} onChange={handleChange} />
      </label>
      <br />
      <label>
        Element:
        <input type="text" name="element" value={formData.element} onChange={handleChange} />
      </label>
      <br />
      <label>
        Driver Qualities:
        <textarea name="driver_qualities" value={formData.driver_qualities} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;