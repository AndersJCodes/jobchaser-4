import { ReactElement, ChangeEvent, SelectHTMLAttributes } from "react";
import {} from "../types/types";

type HeroSearchProps = {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  locationOptions?: string[] | undefined;
  educationOptions?: string[];
  onLocationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onEducationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function HeroSearch({
  searchTerm,
  onSearch,
  locationOptions,
  educationOptions,
  onLocationChange,
  onEducationChange,
}: HeroSearchProps) {
  return (
    <div className="bg-[url(./assets/simon-abrams-unsplash.jpg)] bg-cover bg-center bg-slate-400 bg-blend-multiply py-24 px-1 md:px-8 relative text-white overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold md:text-6xl text-5xl">
          Search for LIA-developer
        </h1>
        <p className="py-4 w-11/12 md:text-2xl text-xl font-light md:w-3/4 xl:w-2/4">
          If you are looking for a junior developer to help you, for free, and
          for a total of 6-months, you have come to the right place. Search for
          wanted skills or browse by scrolling down.
        </p>
        <div className="pt-4 w-11/12 md:w-2/4 lg:max-w-3xl">
          <div className="relative z-30 text-base text-gray-800">
            <input
              type="text"
              value={searchTerm}
              onChange={onSearch}
              placeholder="input search term"
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6 block w-full"
            />
            <div className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
          </div>
          <div className="flex gap-2 py-4 text-base text-gray-800">
            <select
              name=""
              id=""
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6"
              onChange={onLocationChange}
            >
              <option value="">All Locations</option>
              {locationOptions &&
                locationOptions.map((option, index) => (
                  <option className="text-gray-300" key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            <select
              name=""
              id=""
              className="mt-2 shadow-md focus:outline-none rounded py-3 px-6"
              onChange={onEducationChange}
            >
              <option value="">All Educations</option>
              {educationOptions &&
                educationOptions.map((option, index) => (
                  <option className="text-gray-300" key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
