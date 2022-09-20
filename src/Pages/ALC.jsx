import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getALC } from "../redux/slices/LCSlice";

export default function ALC() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const ALC = useSelector((state) => state.LCSlice.ALC);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/database?name_like=${name}`)
      .then(({ data }) => dispatch(getALC(data)));
  }, []);

  return (
    <div className="lg:w-6/12 sm:w-5/6 mx-auto bg-slate-200 min-h-[76vh]">
      {ALC.length > 0
        ? ALC.map((item) => (
            <div key={item.id} className="sm:mx-auto">
              <div className="lg:flex lg:justify-around justify-center">
                <img
                  src={item.logo}
                  className="rounded-full w-80 h-80"
                  alt="Logo"
                />
                <div className="lg:mt-[6rem] lg:ml-5  text-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {`${item.name} o'quv markazi`}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-[3rem]">
                <h2 class="mb-2 text-xl font-semibold text-gray-900 text-center">
                  {`${item.name} o'quv markazi kurslari va batafsil malumotlar`}
                </h2>
                <div className="lg:flex sm:block lg:mt-5">
                  <div className="lg:w-[23rem] text-justify">
                    <p className="mb-3 text-gray-500 dark:text-gray-400 shadow p-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quisquam, pariatur sint. Ut minus culpa veritatis deleniti
                      iure quasi dignissimos dolorum nesciunt, totam rerum
                      dolor, molestiae, obcaecati aut sequi quia doloremque.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-3 shadow p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum tempore illum eaque qui perspiciatis doloremque
                      nobis molestiae ducimus culpa? Adipisci maxime, sit quas
                      corporis velit neque sapiente minus excepturi? Nobis
                      consectetur animi quibusdam vero nemo odio voluptatibus
                      mollitia!
                    </p>
                  </div>
                  <hr className="rotate-180  w-[.1rem] h-[23rem] bg-gradient-to-br from-green-500 to-blue-700 sm:hidden lg:block ml-10" />
                  <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400 lg:ml-10 shadow p-3 h-max leading-loose">
                    {item.courses.map((course) =>
                      course.itCourse ? (
                        <li className="flex items-center text-lg hover:text-blue-700 cursor-pointer selection:text-white selection:bg-red-500">
                          <svg
                            className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {course.itCourse}
                        </li>
                      ) : (
                        <li className="flex items-center text-lg hover:underline hover:text-blue-700 cursor-pointer selection:text-white selection:bg-red-500">
                          <svg
                            className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {course.english}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))
        : "Loader"}
    </div>
  );
}
