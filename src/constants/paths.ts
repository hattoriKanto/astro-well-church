type Pages = "aboutUs" | "events" | "ministries" | "services" | "contacts";

type Path = {
  path: string;
  title: string;
};

type Paths = {
  [key in Pages]: Path;
};

export const paths: Paths = {
  aboutUs: {
    path: "/about-us",
    title: "Про нас",
  },
  events: {
    path: "/events",
    title: "Події",
  },
  ministries: {
    path: "/ministries",
    title: "Служіння",
  },
  services: {
    path: "/services",
    title: "Служби",
  },
  contacts: {
    path: "/contacts",
    title: "Контакти",
  },
};
