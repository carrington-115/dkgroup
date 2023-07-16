import React from "react";
import styled from "styled-components";

function ContactPageForm() {
  return (
    <FormContainer>
      <div className="form">
        <h1>Contact us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows="10" placeholder="send a message"></textarea>
        <button>Send</button>
      </div>
    </FormContainer>
  );
}

export default ContactPageForm;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2cm 0;
  background: url("/images/contact images/patterns.svg");
  background-repeat: no-repeat;
  background-position: center;
  .form {
    width: 30%;
    background-color: #000225;
    padding: 70px 90px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 70%;
      padding: 50px 50px;
    }
    h1 {
      text-align: center;
      color: white;
    }
    input,
    textarea {
      padding: 20px 30px;
      border-radius: 10px;
      border: none;
      font-family: Roboto Slab;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      @media (min-width: 320px) and (max-width: 599px) {
        padding: 0;
        padding: 20px 15px;
      }
    }
    button {
      border-radius: 50px;
      background: #fff;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
        0px 4px 8px 3px rgba(0, 0, 0, 0.15);
      font-family: Roboto Slab;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #000225;
      padding: 10px 50px;
      cursor: pointer;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 18px;
      }
      &:hover {
        font-weight: bold;
      }
    }
  }
`;
