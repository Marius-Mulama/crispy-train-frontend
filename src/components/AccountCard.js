import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';

function AccountCard() {
  return (
    <section class="py-1 px-8">
      <div class="w-full lg:w-8/12 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg dark:bg-gray-900 dark:text-gray-100 border-0">
          <div class="rounded-t  mb-0 px-6 py-6 border border-gray-700">
            <div class="text-center flex justify-between">
              <h6 class="text-blueGray-700 text-xl font-bold">MY ACCOUNT</h6>
              <button
                class="bg-pink-400 text-white active:bg-pink-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Back
              </button>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="lucky.jesse"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="jesse@example.com"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="Lucky"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="Jesse"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-2 border-blueGray-300" />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="Bld Mihail Kogalniceanu"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      City
                    </label>
                    <input
                      type="email"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="New York"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Country
                    </label>
                    <div class="text-black ">
                    <CountryDropdown  id="country" style={{color: "red"}} preferredCountries={['ke', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   

                    </div>


                    {/* <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none focus:ring"
                      value="United States"
                    /> */}
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      value="Postal Code"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-2 border-blueGray-300" />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      About me
                    </label>
                    <textarea
                      type="text"
                      class="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 focus:outline-none focus:ring"
                      rows="4"
                    >
                      A beautiful UI Kit and Admin for JavaScript &amp; Tailwind
                      CSS. It is Freeand Open Source.
                    </textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCard;
