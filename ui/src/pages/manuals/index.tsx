import React from "react";
import Header from "../../components/Header";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

const numberPage = 26;
const images = Array(numberPage)
  .fill(0)
  .map((_, index) => {
    return {
      original: `/images/manuals/manuals-${index + 1}.png`,
      thumbnail: `/images/manuals/manuals-${index + 1}.png`,
    };
  });

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  border-radius: 16px;
  align-self: center;
  margin-top: 16px;
`;

const Manuals: React.FC = () => {
  return (
    <Container>
      <Header title="คู่มือการใช้งาน" />
      <Content>
        <ImageGallery thumbnailPosition="left" items={images} />
      </Content>
    </Container>
  );
};

export default Manuals;
