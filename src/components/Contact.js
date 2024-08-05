import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    jobRole: '',
    areaOfInterest: '',
    message: '',
    howDidYouHear: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.company) errors.company = 'Company is required';
    if (!formData.jobRole) errors.jobRole = 'Job role is required';
    if (!formData.areaOfInterest) errors.areaOfInterest = 'Area of interest is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Please fill out the form, and we'll get in touch shortly.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Country *</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select your country</option>
            {/* Add country options here */}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && <span className="error">{errors.company}</span>}
        </div>
        <div className="form-group">
          <label>Job Role *</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
          />
          {errors.jobRole && <span className="error">{errors.jobRole}</span>}
        </div>
        <div className="form-group">
          <label>Area of Interest *</label>
          <select name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange}>
            <option value="">Select an area of interest</option>
            {/* Add area of interest options here */}
          </select>
          {errors.areaOfInterest && <span className="error">{errors.areaOfInterest}</span>}
        </div>
        <div className="form-group">
          <label>How Can We Help You?</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>How Did You Hear About Us?</label>
          <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
            <option value="">Select an option</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="form-group">
          <input type="checkbox" name="subscribe" />
          <label>Yes, I would like to receive emails from Daiki to learn about new releases, security announcements, and other updates.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <h2>Daiki Lanka (Pvt) Ltd. (Daiki Group Japan)</h2>
        <p>24/9, 1st Lane, Gothami Road, Borella, Colombo 08, Sri Lanka</p>
        <p>011 266 9050 / 076 655 1128 / 077 771 7215 / 076 858 3316</p>
      </div>
      <div className="map-container">
        <iframe
          title="company-location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9201487031883!2d-122.08424938469268!3d37.42206597982409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25933fe30fdfb%3A0x8db397ca65ebcfe4!2sDaiki%20Lanka%20(Pvt)%20Ltd.%20Head%20Office!5e0!3m2!1sen!2sus!4v1614695090461!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
