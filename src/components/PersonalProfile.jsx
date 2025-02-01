import React from "react";
import {
  FaHiking,
  FaMusic,
  FaBook,
  FaPlane,
  FaCat,
  FaPaintBrush,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { BiSolidCameraMovie } from "react-icons/bi";

const PersonalProfile = () => {
  return (
    <section className="mx-auto py-12 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
      <div className=" prose container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-lg text-gray-600 text-center">
          <em>Here’s a little glimpse into who I am outside of work.</em>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Hobbies & Interests
            </h3>
            <ul className="space-y-3 pl-1">
              <li className="flex items-center gap-3">
                <CgGym className="text-blue-600 text-xl" />
                <span>I love gym and staying fit.</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCat className="text-blue-600 text-xl" />
                <span>
                  I am a cat lover and enjoy spending time with my feline
                  friends.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaMusic className="text-blue-600 text-xl" />
                <span>
                  I enjoy playing my guitar, discovering new music and assisting
                  to concerts.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <BiSolidCameraMovie className="text-blue-600 text-xl" />
                <span>
                  I am a movie enthusiastand enjoy watching a wide range of
                  genres.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPlane className="text-blue-600 text-xl" />
                <span>
                  Traveling is one of my passions. I love learning about
                  different cultures.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPaintBrush className="text-blue-600 text-xl" />
                <span>
                  I have a passion for tattoos and enjoy expressing myself
                  through body art.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Future Goals
            </h3>
            <p className="text-base text-gray-600 mb-4">
                In the future, I aspire to become a Software Architect,
              designing robust and scalable systems. I also dream of traveling
              around the world, immersing myself in diverse cultures and
              experiences. 
            </p>
            <p className="text-base text-gray-600 mb-4">
            Additionally, I have a passion for music, and I
              hope to produce my own tracks someday. I am committed to
              animal welfare and aim to establish an animal refuge in the future.
            </p>
            <p className="text-base text-gray-600">
              Lastly, I plan to learn new languages (currently learning French),
              and give back to the community by mentoring aspiring developers.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;
