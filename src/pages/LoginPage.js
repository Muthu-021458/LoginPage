import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <Button type="submit" text="Login" />
    </form>
  );
};

export default LoginPage;
