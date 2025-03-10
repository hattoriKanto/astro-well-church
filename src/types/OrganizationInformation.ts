type SocialMedia = {
  instagram: string;
  facebook: string;
  email: string;
  youtube: string;
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

export type OrganizationInformation = {
  socialMedia: SocialMedia;
  contacts: Contacts;
  churchMembers: ChurchMember[];
  mapLink: string;
};
