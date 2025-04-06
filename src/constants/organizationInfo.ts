import member1 from "../assets/church-members/member-1.jpg";
import member2 from "../assets/church-members/member-2.jpg";
import member3 from "../assets/church-members/member-3.jpg";
import member4 from "../assets/church-members/member-4.jpg";

export type SocialMediaKeys = "instagram" | "facebook" | "youTube";

type SocialMedia = {
  [key in SocialMediaKeys]: string;
};

type Contacts = {
  phone: string;
  email: string;
  address: string;
};

export type ChurchMember = {
  name: string;
  position: string;
  image: ImageMetadata;
};

type OrganizationInformation = {
  socialMedia: SocialMedia;
  contacts: Contacts;
  churchMembers: ChurchMember[];
  mapLink: string;
};

export const organizationInfo: OrganizationInformation = {
  socialMedia: {
    instagram: "",
    facebook: "https://www.facebook.com/church.kobzarka/",
    youTube: "",
  },
  contacts: {
    phone: "+38 (044) 432-05-83",
    email: "example@email.com",
    address: "вулиця Кобзарська, 10, Київ, 02000",
  },
  churchMembers: [
    {
      name: "Багнюк Сергій",
      position: "Пастор Церкви",
      image: member1,
    },
    {
      name: "Федорович Володимир",
      position: "Диякон Церкви, адміністративний офіс",
      image: member2,
    },
    {
      name: "Колісніченко Іван",
      position: "Диякон Церкви, лідер ремонтної команди",
      image: member3,
    },
    {
      name: "Хоменко Олексій",
      position: "Диякон Церкви, лідер групи опіки",
      image: member4,
    },
    {
      name: "Кулаков Олександр",
      position: "Диякон Церкви, директор Центру соціальної адаптації",
      image: member1,
    },
    {
      name: "Романюк Денис",
      position: "Диякон Церкви, лідер молодіжного служіння",
      image: member2,
    },
    {
      name: "Горчаков Ігор",
      position: "Диякон Церкви, фахівець з мереж та комунікацій",
      image: member3,
    },
    {
      name: "Шумаєв Юрій",
      position: "Диякон Церкви, група подій та привітання",
      image: member4,
    },
    {
      name: "Шумейко Володимир",
      position: "Диякон Церкви, директор реновації",
      image: member1,
    },
    {
      name: "Седень Тимофій",
      position: "Диякон Церкви, лідер служіння слова",
      image: member2,
    },
  ],
  mapLink: "https://maps.app.goo.gl/697Pas2LSeD5FBgDA",
};
