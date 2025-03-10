import type { OrganizationInformation } from "../types/OrganizationInformation";
import member1 from "../assets/church-members/member-1.jpg";
import member2 from "../assets/church-members/member-2.jpg";
import member3 from "../assets/church-members/member-3.jpg";
import member4 from "../assets/church-members/member-4.jpg";

const organizationInfo: OrganizationInformation = {
  socialMedia: {
    instagram: "",
    facebook: "https://www.facebook.com/church.kobzarka/",
    email: "",
    youtube: "",
  },
  contacts: {
    phone: "+38 (044) 432-05-83",
    email: "example@email.com",
    address: "Kobzarska St, 10, Kyiv, 02000",
  },
  churchMembers: [
    {
      name: "Lars Landof",
      position: "Pastor, Church",
      image: member1,
    },
    {
      name: "Harris Ford",
      position: "Pastor, Church",
      image: member2,
    },
    {
      name: "Stefan McLaffely",
      position: "Pastor, Church",
      image: member3,
    },
    {
      name: "Just a Cool Guy",
      position: "Cool Guy",
      image: member4,
    },
  ],
  mapLink: "https://maps.app.goo.gl/697Pas2LSeD5FBgDA",
};

export default organizationInfo;
