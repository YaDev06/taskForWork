import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";

export default function LC() {
  const [aLCData, setALCData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`learningCenters/${id}`).then(({ data }) => {
      setALCData(data);
    });
  }, []);

  return (
    <>
      {aLCData.name}

      <Link
        to={`/LC/${aLCData.id}/mentors`}
        target="_blank"
        rel="noopener noreferrer"
      >Mentors</Link>
    </>
  );
}
