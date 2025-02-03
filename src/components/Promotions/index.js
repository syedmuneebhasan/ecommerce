import React, { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Slide } from "@mui/material";

const messages = [
  "Big Savings on Domestic Appliances",
  "Introducing stretch upto 20%",
  "Galaxy S25 Ultra - Ultimate Saviour",
];
export const Promotions = () => {
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3500);
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PromotionsContainer ref={containerRef}>
        <Slide
          direction={show ? "left" : "right"}
          in={show}
          timeout={{
            enter: 500,
            exit: 200,
          }}
        >
          <MessageText variant="h2">{messages[messageIndex]}</MessageText>
        </Slide>
      </PromotionsContainer>
    </>
  );
};
