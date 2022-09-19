import { Link } from "react-router-dom";
import Loader from "../UI/Loader";

export default function Home() {
  const viloyatlar = [
    {
      vil: "Andijon",
      length: 0,
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
    <div className="lg:w-7/12 sm:w-5/6 mx-auto bg-slate-200">
      <div className="lg:w-2/6 md:w-2/6 sm:w-6/6 py-5 mx-auto text-center">
        <h3 className="text-2xl font-semibold">Viloyatlar</h3>
        <hr className="w-48 h-1 mx-auto bg-gray-500 rounded border-0 my-3 " />
      </div>
      <div className="min-h-[76vh] grid grid-flow-row auto-rows-max lg:grid-cols-2 sm:grid-cols-1 gap-y-5">
        {viloyatlar.length > 0 ? (
          viloyatlar.map((viloyat, idx) => {
            if (viloyat.length > 0) {
              return (
                <div
                  className="w-11/12 mx-auto sm:h-[20vh] lg:h-[25.5vh] border shadow-lg shadow-current-500/50 py-5 rounded-lg bg-white"
                  key={idx}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">
                      {viloyat.vil} viloyati
                    </h3>
                    <p className="my-3 text-gray-500 ">
                      {viloyat.length} ta o'quv markaz
                    </p>
                    <Link
                      to={`/LC/${viloyat.vil}`}
                      className="hover:text px-5 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white py-2.5 ">Batafsil</span>
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4 text-white"
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
            }
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
