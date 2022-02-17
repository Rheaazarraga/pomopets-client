import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../helpers/helpers"
import { Form, Button } from 'react-bootstrap';

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    register(user);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value})
  };

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text"> Register </h1>
            <Form action="/register" method="post"> 

            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleChange}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange}/>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </Form>
          </div>
        </div>
      </div>
    </>
  )};