import React from "react";
import { Container, Row } from "reactstrap";
import Helmate from "../components/helmate/Helmate";

const Home = () => {
  return (
    <>
      <Helmate title={"Home"}>
        <section className="heroSection">
          <Container>
            <Row></Row>
          </Container>
        </section>
      </Helmate>
    </>
  );
};

export default Home;
