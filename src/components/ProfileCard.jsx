import { IconContext } from "react-icons";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

export default function ProfileCard({
  id,
  imgUrl,
  fullName,
  Education,
  description,
  skills,
  linkedin,
  github,
}) {
  return (
    <div className="w-full h-screen bg-gray-100 px-10 pt-10 flex flex-wrap">
      {/* Card one */}
      <div className="relative mb-32 max-w-sm mx-auto mt-16">
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="absolute -mt-20 w-full flex justify-left pl-4">
            <div className="h-32 w-32">
              <img
                src="https://randomuser.me/api/portraits/women/49.jpg"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl mb-1">Carole Steward</h1>
            <p className="text-gray-800 text-sm">Fullstack Javascript</p>
            <p className=" text-gray-600 text-base pt-3 font-normal">
              Carole Steward is a visionary CEO known for her exceptional
              leadership and strategic acumen. With a wealth of experience in
              the corporate world, she has a proven track record of driving
              innovation and achieving remarkable business growth.
            </p>
            <IconContext.Provider value={{ size: "2em", color: "gray" }}>
              <div className="w-full flex pt-5 pb-5">
                <a href="#" className="">
                  <div aria-label="Github">
                    <TiSocialGithubCircular />
                  </div>
                </a>
                <a href="#" className="mx-5">
                  <div aria-label="Linkedin">
                    <TiSocialLinkedinCircular />
                  </div>
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
