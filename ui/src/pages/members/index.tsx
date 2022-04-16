import React from "react";
import Header from "../../components/Header";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {
  BottomCard,
  CardMember,
  Container,
  ContentTabContainer,
  CustomAvatar,
} from "./index.style";

const members = [
  {
    name: "นายวีรวิชญ์  พิชิตวงศ์ศรี",
    id: "603040109-0",
    email: "viravich.phi@kkumail.com",
    initials: "VP",
    urlImage: "",
    urlLinkedin: "https://www.linkedin.com/in/viravich-phi-733b08237/",
    urlGithub: "https://github.com/Viravich",
    urlFacebook: "https://www.facebook.com/viravich.phi",
    urlInstagram: "https://www.instagram.com/virxvich_phx/",
  },
  {
    name: "นางสาวสุธิมา วิเชียรทวี",
    id: "613040412-0",
    email: "sutima_eci@kkumail.com",
    initials: "SV",
    urlImage: "",
    urlLinkedin: "https://www.linkedin.com/in/sutima-vicheanthavee-6471001ba/",
    urlGithub: "https://github.com/sutima-grace",
    urlFacebook: "https://www.facebook.com/profile.php?id=100027957996472",
    urlInstagram: "https://www.instagram.com/greasyice/",
  },
  {
    name: "นายกิตติพัฒน์ แดงดี",
    id: "613040438-2",
    email: "kittipat_dd@kkumail.com",
    initials: "KD",
    urlImage: "",
    urlLinkedin: "https://www.linkedin.com/in/kittipat-dd/",
    urlGithub: "https://github.com/ipondnakab",
    urlFacebook: "https://www.facebook.com/ipondnakab",
    urlInstagram: "https://www.instagram.com/ipondnakab/",
  },
  {
    name: "นางสาวสุพัชรี  ไชยยา",
    id: "613040582-5",
    email: "supatcharee_chaiya@kkumail.com",
    initials: "SC",
    urlImage: "",
    urlLinkedin: "https://www.linkedin.com/in/supatcharee-chaiya/",
    urlGithub: "https://github.com/supatchareec",
    urlFacebook: "https://www.facebook.com/supatcharee.chaiya",
    urlInstagram: "https://www.instagram.com/eng.sc/",
  },
];
const Member: React.FC = () => {
  return (
    <Container>
      <Header title="สมาชิก" />
      <ContentTabContainer>
        {members.map((member) => (
          <CardMember key={member.id}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <CustomAvatar initials={member.initials} />
              <a href={"mailto:" + member.email}>{member.email}</a>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1>{member.name}</h1>
              <a href={"#" + member.id}>{member.id}</a>
            </div>
            <BottomCard>
              <a href={member.urlFacebook}>
                <AiFillFacebook size={24} />
              </a>
              <a href={member.urlInstagram}>
                <AiFillInstagram size={24} />
              </a>
              <a href={member.urlLinkedin}>
                <AiFillLinkedin size={24} />
              </a>
              <a href={member.urlGithub}>
                <AiFillGithub size={24} />
              </a>
            </BottomCard>
          </CardMember>
        ))}
      </ContentTabContainer>
    </Container>
  );
};

export default Member;
