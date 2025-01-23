import React, { useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Box, Slide } from "@mui/material";

const messages = [
  "Big Savings on Domestic Appliances",
  "Introducing stretch upto 20%",
  "Galaxy S25 Ultra - Ultimate Saviour",
];
export const Promotions = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePromotions = () => {
    if (messageIndex === messages.length - 1) {
      setMessageIndex(0);
    } else {
      setMessageIndex(messageIndex + 1);
    }
  };
  return (
    <>
      <PromotionsContainer ref={containerRef}>
        <Slide direction="left" in={true}>
          <MessageText variant="h2">{messages[messageIndex]}</MessageText>
        </Slide>
      </PromotionsContainer>

      <button onClick={handlePromotions}>slide</button>
    </>
  );
};
