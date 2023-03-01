import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

function Projects({ projects }) {
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <span class="tracking-wide text-xl">Projects</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {projects.map(({ img, title, description, tag, route }) => (
          <Card key={title} color="transparent" shadow={false}>
            <CardHeader
              floated={false}
              color="gray"
              className="mx-0 mt-0 mb-4 h-64 xl:h-40"
            >
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="py-0 px-1">
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                {tag}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                {title}
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                {description}
              </Typography>
            </CardBody>
            <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
              <Link to={route}>
                <Button variant="outlined" size="sm">
                  view project
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Projects;
