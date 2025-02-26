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

export type OrganizationInformation = {
  socialMedia: SocialMedia;
  contacts: Contacts;
  mapLink: string;
};
