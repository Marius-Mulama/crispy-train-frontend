import React from "react";

function About({ profile }) {

  return (
    <>
      {!profile.email ? (
        <div class="text-gray-600">No Data Available</div>
      ) : (
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
      )}

      <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Edit Information
      </button>
    </>
  );
}

export default About;
