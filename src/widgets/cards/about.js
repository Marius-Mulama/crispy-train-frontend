import React from "react";

function About({ profile }) {
  return (
    <>
      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span clas="text-green-500">
          <svg
            class="h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <span class="tracking-wide text-xl">About</span>
      </div>


      <div class="text-gray-700">
        <div class="grid md:grid-cols-2 text-sm">
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Name</div>
            <div class="px-4 py-2">{profile.fullname}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Gender</div>
            <div class="px-4 py-2">{profile.gender}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Contact No.</div>
            <div class="px-4 py-2">{profile.contact}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Location</div>
            <div class="px-4 py-2">{profile.location}</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Email.</div>
            <div class="px-4 py-2">
              <a class="text-blue-800" href={"mailto:user@example.com"}>
                {profile.email}
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="px-4 py-2 font-semibold">Github:</div>
            <div class="px-4 py-2">
              <a class="text-blue-800" href="https://www.github.com">
                github.com/marius-mulama
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
