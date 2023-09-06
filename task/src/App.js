import logo from './logo.svg';
import styled from "styled-components";
import React from 'react';
import { useState } from 'react';
import './App.css';

const Title = styled.h1`
text-align: center;
`

const Error = styled.h1`
text-align: center;
color: red;
display: none;
`

const Success = styled.h1`
text-align: center;
color: green;
display: ${({ Success }) => Success ? "block" : "none"};
`

const FormContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const FormFields = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`

const Button = styled.button`
  background-color: lightblue; 
  border: none;
  border-radius: 6px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  color: black;
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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState(Number);
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(Number);
  const [gender, setGender] = useState("");
  const [applicant, setApplicant] = useState("Andreas jakobsen");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const URL = "https://case.nettbureau.no/submit";
  const method = "post";



  function handleSubmit(e) {
    e.preventDefault();
    const formValues = { name, address, postal, city, email, phone, gender, applicant };
    const stringify = JSON.stringify(formValues);

    async function sendForm() {
      try {
        const response = await fetch(URL, {
          headers: {
            "Content-Type": "application/json"
          },
          method,
          body: stringify,
        });
        const json = await response.json();
        console.log(json)
        if (response.ok) {
          setSuccess(true);
        }
        else {

        }
      } catch (error) {
        console.log(error)
      }
    }

    if (password === password2) {
      sendForm();
    }
  }



  return (
    <>
      <Title>Nettbureau AS</Title>
      <Title>Case</Title>
      <FormContainer>
        <h2>Fyll ut skjema</h2>
        <Form action="" onSubmit={handleSubmit}>
          <FormFields>
            <Div>
              <label htmlFor="name">Fornavn:</label>
              <input type="text" name="first" id='name' placeholder='Ola' minLength={2} maxLength={20} required onChange={(e) => setName(e.target.value)} />
              <label htmlFor="mail">Epost:</label>
              <input type="email" name="email" id='mail' placeholder='ola@eksempel.no' onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="mobile">Mobil:</label>
              <input type="number" name="mobil" id='mobile' placeholder='tlf Nummer' minLength={8} maxLength={12} required onChange={(e) => setPhone(e.target.value)} />
              <label htmlFor="address">Adresse:</label>
              <input type="text" name="adresse" id='address' placeholder='Rådhusgata 2' required onChange={(e) => setAddress(e.target.value)} />
              <label htmlFor="postal">Postkode:</label>
              <input type='number' id='postal' name='postkode' placeholder='0000' maxLength={4} required onChange={(e) => setPostal(e.target.value)} />
              <label htmlFor="city">By:</label>
              <input type='text' id='city' name='by' placeholder='Oslo' required onChange={(e) => setCity(e.target.value)} />
            </Div>
            <Div>
              <Div>
                <h4>kjønn</h4>
                <label htmlFor='mann'>Mann</label>
                <input type='radio' name='kjønn' id='mann' value="mann" required onChange={(e) => setGender(e.target.value)} />
                <label htmlFor='dame'>Dame</label>
                <input type='radio' name='kjønn' id='dame' value="dame" required onChange={(e) => setGender(e.target.value)} />
              </Div>
              <label htmlFor="password">Passord:</label>
              <input type='password' id='password' name='password' required onChange={(e) => setPassword(e.target.value)} />
              <label htmlFor="password-2">Gjenta-Passord:</label>
              <input type='password' id='password-2' name='password_2' required onChange={(e) => setPassword2(e.target.value)} />
            </Div>
          </FormFields>
          <Error>Det oppsto en feil ved sending av skjema.</Error>
          <Success>skjemaet er nå sendt.</Success>
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
    </>

  );
}

export default App;
