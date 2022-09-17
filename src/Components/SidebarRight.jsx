import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourses, searchCourses } from "../redux/slices/LCSlice";
import axios from "axios";

export default function SidebarRight() {
  const courses = useSelector((state) => state.LCSlice.courses);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  console.log(courses);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/database`)
      .then(({ data }) => dispatch(getCourses(data)));
  }, []);

  return (
    <div className="fixed bg-white h-[85vh] w-[20rem] right-0 border rounded-lg overflow-y-auto">
      <form
        className="search w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchCourses(search));
        }}
      >
        <label
          for-html="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search . . ."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
          <button
            type="submit"
            // onClick={() => dispatch(searchCourses(search))}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      <div className="mt-5">
        {courses.length > 0 ? (
          courses.map((items, idx) => (
            <div
              key={idx}
              className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-2 text-medium font-semibold tracking-tight text-gray-900"
            >
              <div className="flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill text-green-500 m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <h5>{items.viloyat}</h5>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-building text-orange-500 m-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                    />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg>
                  <h5>{items.name}</h5>
                </div>
              </div>
              <div>
                <h2 className="m-3 text-medium font-semibold text-gray-900 dark:text-white">
                  Kurslar:
                </h2>
                <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                  {items.courses.slice(0, 7).map((item) => {
                    if (item.itCourse) {
                      return <li key={item.itCourse}>{item.itCourse}</li>;
                    } else {
                      return <li key={item.english}>{item.english}</li>;
                    }
                  })}
                </ul>
              </div>
              <Link
                to="/"
                className="inline-flex mt-4 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Ko'proq
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
          ))
        ) : (
          <h3 className="text-center">Hech narsa topilmadi</h3>
        )}
      </div>
    </div>
  );
}
