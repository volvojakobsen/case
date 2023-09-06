import logo from './logo.svg';
import styled from "styled-components";
import React from 'react';
import { useState } from 'react';
import './App.css';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`

const Button = styled.button`
  background-color: lightblue; 
  border: none;
  border-radius: 6px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 200px;
  cursor: pointer;
  margin: 20px;
  `;


const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState(Number);
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(Number);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");



  function handleSubmit(e) {
    e.preventDefault();
    const formValues = { firstName, lastName, address, postal, city, email, mobile };

    if (password === password2) {
      console.log(formValues);

    }
  }



  return (
    <>
      <FormContainer>
        <Form action="" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Fornavn:</label>
          <input type="text" name="first" id='firstName' placeholder='Ola' minLength={2} maxLength={20} required onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="lastName">Etternavn:</label>
          <input type="text" name="last" id='lastName' placeholder='Normann' required minLength={2} maxLength={20} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="mail">Epost:</label>
          <input type="email" name="email" id='mail' placeholder='ola@eksempel.no' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="mobile">Mobil:</label>
          <input type="number" name="mobil" id='mobile' placeholder='tlf Nummer' required onChange={(e) => setMobile(e.target.value)} />
          <label htmlFor="address">Adresse:</label>
          <input type="text" name="adresse" id='address' placeholder='Rådhusgata 2' required onChange={(e) => setAddress(e.target.value)} />
          <label htmlFor="postal">Postkode:</label>
          <input type='number' id='postal' name='postkode' placeholder='0000' maxLength={4} required onChange={(e) => setPostal(e.target.value)} />
          <label htmlFor="city">By:</label>
          <input type='text' id='city' name='by' placeholder='Oslo' required onChange={(e) => setCity(e.target.value)} />
          <label htmlFor="password">Passord:</label>
          <input type='password' id='password' name='password' required onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password-2">Gjenta-Passord:</label>
          <input type='password' id='password-2' name='password_2' required onChange={(e) => setPassword2(e.target.value)} />

          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </>

  );
}

export default App;
