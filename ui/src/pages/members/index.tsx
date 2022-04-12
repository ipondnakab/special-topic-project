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
  },
  {
    name: "นางสาวสุธิมา วิเชียรทวี",
    id: "613040412-0",
    email: "sutima_eci@kkumail.com",
    initials: "SV",
    urlImage: "",
  },
  {
    name: "นายกิตติพัฒน์ แดงดี",
    id: "613040438-2",
    email: "kittipat_dd@kkumail.com",
    initials: "KD",
    urlImage:
      "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/139170539_3715680281859231_3013040769136861534_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFp33pVmioYg1m7Ptso6UMiQ7UerNUlE1ZDtR6s1SUTVh1N5FZyrZHeow9MStYUxAWIY09-ecczRw9-6_oijsH8&_nc_ohc=X5yHtTLj0IYAX-N97Gg&_nc_ht=scontent.fkkc3-1.fna&oh=00_AT_m9aVscSgruyISqlZIeHTe4yeroUW46XwZVgSlrt22nw&oe=6277ED73",
  },
  {
    name: "นางสาวสุพัชรี  ไชยยา",
    id: "613040582-5",
    email: "supatcharee_chaiya@kkumail.com",
    initials: "SC",
    urlImage: "",
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
              <AiFillFacebook size={24} />
              <AiFillInstagram size={24} />
              <AiFillLinkedin size={24} />
              <AiFillGithub size={24} />
            </BottomCard>
          </CardMember>
        ))}
      </ContentTabContainer>
    </Container>
  );
};

export default Member;
