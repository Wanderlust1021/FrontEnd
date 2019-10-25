import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PrivateNav from './PrivateNav';
import OrganizerSidePanel from './OrganizerSidePanel';
import ExperienceSidePanel from './ExperienceSidePanel';
import Footer from './Footer';
import axiosWithAuth from '../axiosWithAuth';

// Displays info about an experience e.g the organizer of the experience,
// a description of the experience etc

const Experience = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState({
    org_name: "",
    experience_title: "",
    experience_desc: "",
    date: "",
    image: null
  })

  const fetchExperience = () => {
    axiosWithAuth()
      .get(`/exp/`)
      .then(response => {
        let experiences = response.data;
        let exp = experiences.find(experience => experience.id == id) ;
        setExperience(exp);
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(()=> {
    fetchExperience();
  }, [])

  return (
    <div>
      <PrivateNav />

      <section className="experience-item">
        <div className="container">
          <div className="hero mb-2"></div>
          <div className="row mb-2">
            <div className="col-md-12">
              <Link className="btn-custom btn-red btn-lg btn-block">BOOK NOW!</Link>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-3">
              <OrganizerSidePanel experience={experience} />
            </div>
            <div className="col-md-9">
              <ExperienceSidePanel  experience={experience}/>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}


export default Experience;
