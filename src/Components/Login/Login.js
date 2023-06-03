import { React, useState } from "react"
import axios from "axios";
//import { useDispatch } from "react-redux";
import { saveUser } from "../../store/actions/user";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      axios.post("/localhost:27017/shiduchim/login", {
        name: formValues.name, password: formValues.password
      })
        .then(res => { console.log(res); dispatch(saveUser(res.data)); })
        .catch(err => console.log(err)).navigate('/FillQuestionnaire')
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate name field
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    else if (!/^[a-zA-Z]+$/.test(formValues.name.trim())) {
      errors.name = 'Name can only contain letters';
    }

    // Validate email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formValues.email.trim())) {
      errors.email = 'Invalid email format';
    }

    // Validate password field
    if (!formValues.password.trim()) {
      errors.password = 'Password is required';
    } else if (formValues.password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      {/* <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div> */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <span>{formErrors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
