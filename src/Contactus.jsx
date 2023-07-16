import React from "react";
import styled from "styled-components";
import ContactHeader from "./contact/ContactHeader";
import ContactPageForm from "./contact/ContactPageForm";
import Footer from "./contact/Footer";

function Contactus() {
  return (
    <Container>
      <ContactHeader />
      <ContactPageForm />
      <Footer />
    </Container>
  );
}

export default Contactus;

const Container = styled.div``;
