import React from "react";
import profileImg from "../assets/image.jpg"

export default function ProfileCard() {
  return (
    <div className="max-w-sm bg-[#FF6363] rounded-2xl shadow-2xl p-6">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-[#DBFFCB] object-cover"
        />
      </div>

      {/* Bio */}
      <div className="text-center mb-4 font-sans">
        <h2 className="text-2xl font-semibold text-white">Uddeshya Rawat</h2>
        <p className="text-sm text-white">
          A passionate Frontend Developer who loves building beautiful Web Apps and learning new tech.
        </p>
      </div>

      {/* Hobbies */}
      <div className="mt-4 text-white font-sans">
        <h3 className="text-md font-medium  mb-2">Hobbies</h3>
        <ul className="list-disc list-inside  space-y-1">
          <li> Coding</li>
          <li> Gaming</li>
          <li> Beatbox</li>
          <li> Football</li>
        </ul>
      </div>
    </div>
  );
}
