import React, { useState } from "react";
import "./Form.css";

const Form2 = ({ submitForm }) => {
  const [values, setValues] = useState({
    from: "",
    phno: "",
    name: "",
    package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(values.from, values.phno, values.package);
  };

  function sendEmail(from, phno, to) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "pradeepmsblogspot@gmail.com",
      Password: "ibxdnieqkadegcua",
      From: "pradeepmsblogspot@gmail.com",
      To: "priyankashruthi26@gmail.com",
      Subject: `${from} Sent you a message`,
      Body: `From : ${from} <br/>  Phone Number : ${phno} <br/>  Package : ${to}`,
    }).then(() => alert("Booked Successfully"));
  }

  return (
    <div class="form-container">
      {" "}
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-inputs">
            <label className="form-label">From : </label>
            <input
              className="form-input mb"
              type="text"
              name="from"
              placeholder="Enter your Pickup Point"
              value={values.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-inputs d-flex mb">
            <label className="form-label">Package : </label>
            <select
              className="package-selector"
              name="package"
              onChange={handleChange}
            >
              <option value="1hr  10km">1hr 10km</option>
              <option value="2hr  20km">2hr 20km</option>
              <option value="3hr  30km">3hr 30km</option>
              <option value="4hr  40km">4hr 40km</option>
              <option value="6hr  60km">6hr 60km</option>
              <option value="8hr  80km">8hr 80km</option>
              <option value="10hr  100km">10hr 100km</option>
              <option value="12hr  120km">12hr 120km</option>
            </select>
          </div>

          <div className="form-inputs">
            <label className="form-label">Phone Number : </label>
            <input
              className="form-input mb"
              type="number"
              name="phno"
              placeholder="Enter your phone number"
              value={values.password2}
              onChange={handleChange}
              required
            />
          </div>
          <button className="form-input-btn" type="submit">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
