import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../redux/slices/ModalSlice";
import Search from "./Search";

export default function SidebarRight() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.ModalSlice.modal);

  return (
    <div className="fixed bg-white h-[85vh] w-[20rem] right-0 border  rounded-lg overflow-y-auto">
      {modal ? (
        <>
          <Search />
          <button
            onClick={() => dispatch(changeModal())}
            className="focus:outline-none p-1.5 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-r rounded text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </>
      ) : (
        <button
          onClick={() => dispatch(changeModal())}
          className="focus:outline-none p-1.5 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-red-300 font-medium rounded-r rounded text-sm"
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
      )}
    </div>
  );
}
