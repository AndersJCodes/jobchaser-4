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
  filteredProfiles: Profile[]; // Define onSearchedProfiles as an array of Profile
};

// Options used in dropdowns or similar components
export interface Option {
  value: string;
  label: string;
}

// Context or component-specific types
export interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  uid: string;
  email: string | null;
  // Add additional user fields as required
}

// Props for components that need to be strongly typed
export interface HomepageProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredProfiles: Profile[];
  locationOptions: Option[];
  educationOptions: Option[];
  onLocationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onEducationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
