import { IconContext } from "react-icons";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

export default function ProfileCard({
  id,
  imgUrl,
  fullName,
  education,
  description,
  skills,
  linkedin,
  github,
}) {
  return (
    <>
      <div className="relative mb-32 max-w-sm mx-auto mt-16">
        <div className="rounded overflow-hidden shadow-md bg-white">
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
            <p className="text-gray-800 text-sm">{education}</p>
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