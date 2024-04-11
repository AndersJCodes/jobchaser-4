import { useState } from "react";
import { IconContext } from "react-icons";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import { Profile } from "../types/types";

export default function ProfileCard({
  id,
  imgUrl,
  fullName,
  education,
  location,
  description,
  skills,
  linkedin,
  github,
}: Profile) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="relative mb-32 max-w-sm mx-auto mt-16">
        <div className="rounded overflow-hidden shadow-md bg-white">
          {isFavorite ? (
            <IconContext.Provider value={{ size: "1.6em", color: "#e64a19" }}>
              <div className="absolute top-4 right-4 z-10 cursor-pointer">
                <TiStarFullOutline onClick={toggleFavorite} />
              </div>
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "1.6em", color: "#e64a19" }}>
              <div className="absolute top-4 right-4 z-10 cursor-pointer">
                <TiStarOutline onClick={toggleFavorite} />
              </div>
            </IconContext.Provider>
          )}
          <div className="absolute -mt-20 w-full flex justify-left pl-4">
            <div className="h-32 w-32">
              <img
                src={imgUrl}
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl mb-1">{fullName}</h1>
            <p className="text-gray-800 text-sm">
              {education}
              <p className="text-gray-800 text-sm">{location}</p>
            </p>
            <p className=" text-gray-600 text-base pt-3 font-normal">
              {description}
            </p>
            <div className="flex flex-wrap mt-2">
              {skills &&
                skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-gray-800 text-sm m-1 ms-0 px-3 py-2 rounded bg-slate-100"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            <IconContext.Provider value={{ size: "2em", color: "gray" }}>
              <div className="w-full flex pt-5 pb-5">
                <a href={github} className="">
                  <div aria-label="Github">
                    <TiSocialGithubCircular />
                  </div>
                </a>
                <a href={linkedin} className="mx-5">
                  <div aria-label="Linkedin">
                    <TiSocialLinkedinCircular />
                  </div>
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
