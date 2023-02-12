import React, { useState } from "react";

function AddExperience() {
  const [postion, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    //Checks are done in the checks file in the utils directory
    //TO DO: Write api to handle form submission

    e.preventDefault();
  };

  return (
    <div className="w-full max-w-4xl p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 float-centre">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Add Experience
      </h2>
      <div>
        <form
          className="space-y-8 ng-untouched ng-pristine ng-valid"
		  name="experience-form"
          onSubmit={handleSubmit}
        >
          {/* Postion Held */}
          <div className="space-y-1">
            <label htmlFor="position" className="block text-lg">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              value={postion}
              required
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              placeholder="e.g. Intern Developer"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          {/* Company Name */}
          <div className="space-y-1">
            <label htmlFor="company" className="block text-lg">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              required
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Company Name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          {/* Dates */}
          <div className="flex lg:flex-row space-x-6">
            <div className="space-y-1">
                <label htmlFor="start-date" className="block text-lg">
                Start Date
                </label>
                <input
                type="date"
                name="start-date"
                id="start-date"
                value={startDate}
                required
                onChange={(e) => {
                    setStartDate(e.target.value);
                }}
                className="px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="end-date" className="block text-lg">
                End Date
                </label>
                <input
                type="date"
                name="end-date"
                id="end-date"
                value={endDate}
                onChange={(e) => {
                    setEndDate(e.target.value);
                }}
                className="px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
            </div>
          </div>

          {/* Description of work done */}
          <div className="space-y-1">
            <label htmlFor="description" className="block text-lg">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={description}
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label htmlFor="location" className="block text-lg">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              required
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Nairobi, Kenya"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 font-bold rounded-md dark:bg-violet-400 dark:text-gray-900 hover:bg-violet-600"
          >
            ADD EXPERIENCE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExperience;
