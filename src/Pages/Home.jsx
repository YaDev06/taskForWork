import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader";

export default function Home() {
  const ALC = useSelector((state) => state.LCSlice.ALC);
  const viloyatlar = [
    {
      vil: "Andijon",
      length: 2,
    },
    {
      vil: "Buxoro",
      length: 0,
    },
    {
      vil: "Farg'ona",
      length: 2,
    },
    {
      vil: "Jizzah",
      length: 0,
    },
    {
      vil: "Xorazm",
      length: 0,
    },
    {
      vil: "Namangan",
      length: 0,
    },
    {
      vil: "Navoi",
      length: 0,
    },
    {
      vil: "Qashqadaryo",
      length: 0,
    },
    {
      vil: "Samarqand",
      length: 0,
    },
    {
      vil: "Sirdaryo",
      length: 0,
    },
    {
      vil: "Surxondaryo",
      length: 0,
    },
    {
      vil: "Toshkent",
      length: 2,
    },
  ];
  return (
    <div className="lg:w-3/6 sm:w-5/6 mx-auto">
      <div className="z-50 min-h-[76vh] grid grid-flow-row auto-rows-max lg:grid-cols-2 sm:grid-cols-1 gap-y-5">
        {viloyatlar.length > 0 ? (
          viloyatlar.map((viloyat, idx) => {
            return (
              <div
                className="w-11/12 mx-auto h-[25.5vh] border shadow-lg shadow-current-500/50 py-5 rounded-lg"
                key={idx}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-semibold font-mono">
                    {viloyat.vil} viloyati
                  </h3>
                  <p className="my-3 text-gray-500">
                    {viloyat.length} ta o'quv markaz
                  </p>
                  <Link
                    to={`/LC/${viloyat.vil}`}
                    className="inline-flex items-center mt-5 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            );
          })
        ) : (
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 m-5">
            <Loader />
            <Loader />
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
