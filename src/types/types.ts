import { ReactNode } from "react";

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

export type FilteredProfiles = {
  filteredProfiles: Profile[];
};

export interface Option {
  value: string;
  label: string;
}

export interface MainNavProps {
  isAuthenticated: boolean;
  handleSignOut: () => void;
}

/* export interface HomePageProps {
  onSearch: () => void;
  searchTerm: string;
  filteredProfiles: Profile[]; // Assuming Profile is a defined type somewhere in your project
  locationOptions: string[];
  educationOptions: string[];
  onLocationChange: () => void;
  onEducationChange: () => void;
} */

export interface FormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  uid: string;
  email: string | null;
  user: boolean;
}
