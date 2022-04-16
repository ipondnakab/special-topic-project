import React from "react";
import Header from "../../components/Header";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

const numberPage = 15;
const images = Array(numberPage)
  .fill(0)
  .map((_, index) => {
    return {
      original: `/images/manuals/manuals-${index + 1}.png`,
      thumbnail: `/images/manuals/manuals-${index + 1}.png`,
    };
  });

const Container = styled.div`

  border-radius: 16px;
  align-self: center;
  margin-top: 16px;
`;

const Manuals: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header title="คู่มือการใช้งาน" />
      <Container>
        <ImageGallery thumbnailPosition="left" items={images} />
      </Container>
    </div>
  );
};

export default Manuals;
