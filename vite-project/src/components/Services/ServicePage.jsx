import React from 'react';
import './ServicePage.css';
import FlightIcon from '@mui/icons-material/Flight';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import IELTS from '../../../public/images/IELTS.jpg';
import studyabroad from '../../../public/images/study-abrad.jpeg';
import scholarships from '../../../public/images/scholarship.jpg';
import interviewpreparationsession from '../../../public/images/interview-preparation-session.png';

const ServicePage = () => {
  const icon = <FlightIcon />;
  const ratingValue = 4.5;
  const card_details = [
        {
            image_add: studyabroad,
            title: "Study Abroad",
            icon: <FlightIcon />,
            rating: 5,
            description: "Explore new cultures, gain global education, and broaden career opportunities."
        },
        {
            image_add: IELTS,
            title: "IELTS Exam Guidance",
            icon: <LocalLibraryIcon />,
            rating: 4.5,
            description: "Master English skills, achieve high scores, and unlock global opportunities."
        },
        {
            image_add: scholarships,
            title: "University Scholarships",
            icon: <LayersIcon />,
            rating: 5,
            description: "Earn financial support, pursue education, and achieve your academic dreams."
        },
        {
            image_add: interviewpreparationsession,
            title: "Interview Preparation Support",
            icon: <PeopleIcon />,
            rating: 4.5,
            description: "Build confidence, master strategies, and excel in job interviews."
        }
    ];
  return (
    <section className="service-main" id='service'>
      <div className="service-top">
        <p className="service-name">SERVICES</p>
        <p className="service-about">
          DESIGN <span>SERVICES</span> I'M PROVIDING
        </p>
      </div>
      <div className="service-cards">
        {
            card_details.map((card_detail) =>{
                return(
                    <div className="service-card">
                    <div className="image-container">
                        <img
                        src={card_detail.image_add}
                        alt="Service"
                        />
                    </div>
                    <div className="text-overlay">
                        <p className="para-icon">{card_detail.icon}</p>
                        <p className='p-header'>{card_detail.title}</p>
                        <p>
                          {card_detail.description}
                        </p>
                        <hr />
                        <Stack spacing={1}>
                        <Rating
                            name="half-rating-read"
                            defaultValue={card_detail.rating}
                            precision={0.5}
                            readOnly
                        />
                        </Stack>
                    </div>
                    </div>
                )})
        }
      </div>
    </section>
  );
};

export default ServicePage;
