import React from "react";
import moment from "moment";

function Experience({ experience }) {
  return (
    <>
      <div>
        <ol class="list-inside space-y-2">
          {!experience ? (
            <div class="text-gray-600">No Experience</div>
          ) : (
            experience.map((experience) => (
              <li key={experience.id}>
                <div class="text-teal-600 bold">
                  <b>{experience.company}</b>
                </div>
                <div class="text-gray-500 text-xs">
                  <b>
                    {" "}
                    {moment(experience.start).format("MMMM YYYY")} to{" "}
                    {experience.end
                      ? moment(experience.start).format("MMMM YYYY")
                      : "Now"}
                  </b>
                </div>
                <div class="text-gray-500 text- mr-10">
                  <p>{experience.description}</p>
                </div>
              </li>
            ))
          )}
        </ol>
      </div>

      <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
        Add Experience
      </button>
    </>
  );
}

export default Experience;
