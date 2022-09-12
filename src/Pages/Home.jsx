import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";

export default function Home() {
  const [LCs, setLCs] = useState([]);

  useEffect(() => {
    axios.get(`learningCenters`).then(({ data }) => setLCs(data));
  }, []);

  return (
    <div className="z-50 min-h-[76vh]">
      {LCs.length > 0 ? (
        LCs.map((LC) => (
          <div
            className="flex h-[35vh] mb-[50px] border shadow-lg shadow-current-500/50 py-5 rounded-lg"
            key={LC.id}
          >
            <div className="w-[220px] mx-auto">
              <img className="w-full h-[30vh]" src={LC.logo} alt="LC Logo" />
            </div>
            <div className="w-8/12 col-span-full mx-auto">
              <p className="mb-5">
                <span className="font-semibold text-xl">{LC.name} - </span>
                {LC.description} . . .
              </p>
              <Link
                to={`/LC/${LC.id}`}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Batafsil
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
        ))
      ) : (
        <>
          <div className="flex mb-5">
            <Loader />
            <Loader />
          </div>
          <div className="flex mb-5">
            <Loader />
            <Loader />
          </div>
        </>
      )}
    </div>
  );
}
