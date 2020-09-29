import React, { useState } from "react";
import "./Form.css";

const OutstationForm = () => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    phno: "",
    oneway: "",
    twoway: "",
    name: "",
  });

  //radio button state
  const [way, setWay] = useState("One-way");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //calling smtp service with the form values
    sendEmail(values.from, values.to, values.date, values.phno, way);
  };

  //smtp service
  function sendEmail(from, to, date, phno, way) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "pradeepmsblogspot@gmail.com",
      Password: "ibxdnieqkadegcua",
      From: "pradeepmsblogspot@gmail.com",
      To: "pradeepmsblogspot@gmail.com",
      Subject: `${from} Sent you a message`,
      Body: `From : ${from} <br/>  To : ${to}  <br/>  date : ${date} <br/>  Phone Number : ${phno} <br/> One-way or Two-way : ${way}`,
    }).then(() => alert("Booked Successfully"));
  }

  return (
    <div className="form-container">
      {" "}
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-inputs">
            <div className="rbgroup-grouper">
              <div className="rbgroup">
                <input
                  type="radio"
                  name="One-way"
                  className="rb"
                  value="One-way"
                  checked={way === "One-way"}
                  onChange={(e) => setWay("One-way")}
                />
                One-way{" "}
              </div>
              <div className="rbgroup">
                {" "}
                <input
                  type="radio"
                  name="Two-way"
                  value="Two-way"
                  className="rb"
                  checked={way === "Two-way"}
                  onChange={(e) => setWay("Two-way")}
                  required
                />
                Two-way
              </div>
            </div>

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
          <div className="form-inputs">
            <label className="form-label ">To : </label>
            <input
              className="form-input mb"
              type="text"
              name="to"
              placeholder="Enter your Drop Point"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Date</label>
            <input
              className="form-input mb"
              type="date"
              name="date"
              placeholder="Enter the date"
              value={values.password}
              onChange={handleChange}
              required
            />
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

export default OutstationForm;
