import React from "react";

import {
  Card,
  CardBody,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import Experience from "../widgets/cards/exprience";
import About from "../widgets/cards/about";
import Projects from "../widgets/cards/projects";

import { profileData } from "../data/profile";
import { experienceData } from "../data/experience-data";
import {projectsData} from "../data/projects-data"; 



export function Profile() {
  return (
    <>
      <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="bruce-mars"
                size="sm"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {profileData.fullname}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  USer
                </Typography>
              </div>
            </div>
          </div>

          {/* About */}

          <div class="bg-white p-3 shadow-sm rounded-sm">

            <About profile={profileData} />
            
            <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Edit Information
            </button>
          </div>

          {/* EXPERIENCE */}

          <div class="bg-white p-3 shadow-sm rounded-sm">
            <Experience experience={experienceData} />

            <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Add Experience
            </button>
          </div>

          {/* PROJECTS */}

          <div className="px-4 pb-4 bg-white p-3 shadow-sm">

            <Projects projects={projectsData}/>

            <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Add Project
            </button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
