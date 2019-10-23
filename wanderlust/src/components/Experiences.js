import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";

function Experiences(props) {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/exp")
      .then(response => {
        setExperiences(response.data);
      });
  }, []);

  return (
    experiences && (
      <div >
        {experiences.map(el => (
          <div key={el.org_name}>
            {el.org_name}
            <p>{el.date}</p>
            <p>{el.experience_desc}</p>
            <div>
              <img src={el.date} />
            </div>
            {el.experience_title}
          </div>
        ))}
      </div>
    )
  );
}

export default Experiences;
