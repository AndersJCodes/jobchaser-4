// types.ts

export type Profile = {
  id: number;
  imgUrl: string;
  fullName: string;
  education: string;
  location: string;
  description: string;
  skills: string[];
  linkedin: string;
  github: string;
};

export type OnSearchedProfiles = {
  onSearchedProfiles: Profile[]; // Define onSearchedProfiles as an array of Profile
};
