/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";

import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";

import Experience from "../widgets/cards/exprience";
import About from "../widgets/cards/about";
import Projects from "../widgets/cards/projects";

import { profileData } from "../data/profile";
import { experienceData } from "../data/experience-data";
import { projectsData } from "../data/projects-data";
import { useEffect, useState } from "react";
import axios from "axios";
import ServerError from "./ServerError";
import Loading from "../widgets/loading";

export function Profile() {
  // const [user,setUser] = useState(false)
  const [myProfile, setMyProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://tp-api.mariuslabs.com/accounts/myprofile",
        //"http://localhost:8000/accounts/myprofile",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
      .then((result) => {
        console.log(result);
        setMyProfile(result.data);

        console.log(result.data.profile_image);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Connection REfusal");
        console.error(error);
        setMyProfile(null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="relative h-72 w-full overflow-hidden  bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>

      <Card className="mx-3 -mt-16 lg:mx-4">
        {!myProfile ? (
          <ServerError />
        ) : (
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                  //src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  src={myProfile.profile_image ? myProfile.profile_image : ""}
                  alt="avatar"
                  size="xs"
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

              <About profile={myProfile} />
            </div>

            {/* EXPERIENCE */}

            <div class="bg-white p-3 shadow-sm rounded-sm">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide text-xl">Experience</span>
              </div>

              <Experience experience={myProfile.experience} />

            </div>

            {/* PROJECTS */}

            <div className="px-4 pb-4 bg-white p-3 shadow-sm">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide text-xl">Projects</span>
              </div>
              <Projects projects={myProfile.projects} />
            </div>
          </CardBody>
        )}
      </Card>
    </>
  );
}

export default Profile;
