import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";

function Contactform() {
  return (
    <Container>
      <div className="top">
        <h1>Contact us</h1>
      </div>
      <div className="bottom">
        <div className="contact-info">
          <div>
            <AiOutlineMail />
            <p>contact@dkgroup.com</p>
          </div>
          <div>
            <CiLocationOn />
            <p>
              Rond-point express, <br /> Yaounde, Cameroon
            </p>
          </div>
          <div>
            <HiOutlinePhone />
            <p>
              +237 677193548 <br /> +237 677193548 <br /> +237 677193548
            </p>
          </div>
        </div>
        <div className="form-info">
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name="leave a message"
              placeholder="Leave a message"
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contactform;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url("/images/home images/form pattern.svg");
  padding: 2cm 0;

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    h1 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 1cm;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      width: 100%;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      width: 30%;
      gap: 0.8cm;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
      }
      div {
        display: flex;
        gap: 10px;
        svg {
          width: 36px;
          height: 36px;
        }
        p {
          color: #000;
          font-family: Roboto Slab;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 1cm;
        }
      }
    }
    .form-info {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1cm;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
        margin-top: 1cm;
      }
      .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70%;
        gap: 0.5cm;
        padding: 1cm 0;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
          0px 8px 12px 6px rgba(0, 0, 0, 0.15);
        @media (min-width: 320px) and (max-width: 599px) {
          width: 80%;
        }
        input,
        textarea {
          width: 80%;
          padding: 0.25cm 0.5cm;
          border-radius: 10px;
          border: 1px solid #000;
        }
        button {
          font-size: 15px;
          padding: 0.15cm 0.5cm;
          border-radius: 10px;
          background: #000225;
          cursor: pointer;
          color: white;
          border: 1px solid transparent;
          &:hover {
            background-color: transparent;
            border-color: #000225;
            color: #000225;
          }
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3),
            0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
`;
