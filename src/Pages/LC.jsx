import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { getALC } from "../redux/slices/LCSlice";
import Loader from "../UI/Loader";

export default function LC() {
  const dispatch = useDispatch();
  const aLCData = useSelector((state) => state.LCSlice.ALC);

  const { viloyat } = useParams();

  useEffect(() => {
    axios.get(`database`).then(({ data }) => {
      dispatch(getALC({ viloyat, data }));
    });
  }, []);

  return (
    <div className="lg:w-3/6 m-auto flex flex-wrap">
      {aLCData.length > 0 ? (
        aLCData.map((LC) => (
          <div
            className="w-[20rem] m-auto bg-white text-center mb-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            key={LC.id}
          >
            <a href="#">
              <img
                className="rounded-t-lg h-[40vh] w-full"
                src={LC.logo}
                alt="LC Logo"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold font-sans tracking-tight text-gray-900 dark:text-white">
                  {LC.viloyat} viloyati {LC.name} o'quv markazi
                </h5>
              </a>
              <p className="text-gray-700 font-sans">
                {LC.courses[0].it
                  ? Object.keys(LC.courses[0].it).length +
                    ` ta IT ${LC.courses[0].til && " va "}`
                  : "yo'nalishilarda kurslar bor"}
                {LC.courses[0].til &&
                  Object.keys(LC.courses[0].til).length +
                    " ta Til yo'nalishlarida kurslar bor"}
              </p>
              <div className="flex justify-between">
                <button className="text-white inline-flex mt-5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-3 text-center">
                  Batafsil
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 mt-0.5 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Link
                  to={`/LC/${LC.id}/mentors`}
                  className="inline-flex mt-5 items-center py-2 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mentorlar
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
