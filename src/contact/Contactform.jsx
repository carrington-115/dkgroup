import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";

function Contactform() {
  return (
    <Container>
      <div className="top">Contact us</div>
      <div className="bottom">
        <div className="contact-info">
          <div>
            <AiOutlineMail />
            contact@dkgroup.com
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
        <div className="form-infor">
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name="leave a message"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contactform;

const Container = styled.div``;
