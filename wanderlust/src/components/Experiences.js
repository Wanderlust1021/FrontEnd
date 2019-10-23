import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";
import { connect } from "react-redux";
import * as actionCreators from "../state/ActionCreators";


export function Experiences(props) {
  console.log(props)
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    props.fetchExperiences()
  }, []);

  return (
    experiences && (
      <div >
        {/* {experiences.map(el => (
          <div key={el.org_name}>
            {el.org_name}
            <p>{el.date}</p>
            <p>{el.experience_desc}</p>
            <div>
              <img src={el.date} />
            </div>
            {el.experience_title}
          </div>
        ))} */}
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    experiences: state.appState
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Experiences);