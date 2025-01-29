import React, { useState, useRef } from 'react';
import './FeaturePage.css';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ForeignUniversity from '../../../public/images/ForeignUniversity.jpg';
import ForeignUniversity2 from '../../../public/images/ForeignUniversity2.jpg';
import bestbusinessflashaward1 from '../../../public/images/best business flash award 1.jpg';
import bestbusinessflashaward from '../../../public/images/best business flash award.jpg';
import EducationExpo from '../../../public/images/Education Expo.jpg';
import award2 from '../../../public/images/award2.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const FeaturePage = () => {
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);

  const features = [
    {
      image: ForeignUniversity,
      title: 'Global Insights',
      description: 'Global collaboration',
      detail: 'I had the incredible opportunity to meet the CEO of Aura International School of Management, France. Our meaningful discussions on global education, leadership, and collaboration were truly inspiring. I’m deeply grateful for the insights shared and the vision for future opportunities. This exchange reinforced the importance of fostering international partnerships and creating transformative learning experiences. Engaging with a leader of such caliber was both enlightening and motivating, and I look forward to building on this connection to drive impactful collaborations. Moments like these reaffirm the power of dialogue in shaping innovative approaches to education and global leadership.'
    },
    {
      image: bestbusinessflashaward,
      title: 'Business flash Award',
      description: 'Recognition Growth',
      detail: 'I’m beyond excited to receive the Best Business Flash gift from JCOM 2.0L Namakkal for the third consecutive time – a true hat-trick win! 🏆✨ Today was more than just recognition; it was an opportunity for deep reflection on the principles of KYC: Know Your Competitors, Know Your Challenge, Know Your Capacity, Know Your Cost of Business, Know Your Courage, and Know Your Customers. These values guide me in overcoming obstacles, optimizing strengths, and making bold decisions. I’m incredibly grateful to JCOM Namakkal for this honor and the platform to grow, connect, and inspire. Here’s to even greater achievements ahead!',
    },
    {
      image: EducationExpo,
      title: 'Education Expo',
      description: 'Recognition Innovation',
      detail: 'I’m incredibly grateful for the amazing experience at the Project Expo in Theni! It was an honor to receive the shield from the esteemed speaker, Mr. Gobinath. Sharing my thoughts and engaging with the audience was truly rewarding. Events like these foster innovation, learning, and meaningful connections. I am thankful to everyone who contributed to making this event so memorable. It’s always inspiring to be part of such a dynamic platform that encourages fresh ideas and collaboration. Looking forward to more opportunities like this to learn, grow, and share knowledge with others!',
    },
    {
      image: bestbusinessflashaward1,
      title: 'Business flash Award',
      description: 'Recognition Growth',
      detail: 'I’m beyond excited to receive the Best Business Flash gift from JCOM 2.0L Namakkal for the third consecutive time – a true win! ✨ Today was more than just recognition; it was an opportunity for deep reflection on the principles of KYC: Know Your Competitors, Know Your Challenge, Know Your Capacity, Know Your Cost of Business, Know Your Courage, and Know Your Customers. These values guide me in overcoming obstacles, optimizing strengths, and making bold decisions. I’m incredibly grateful to JCOM Namakkal for this honor and the platform to grow, connect, and inspire. Here’s to even greater achievements ahead!',
    },
    {
      image: award2,
      title: 'Award 5',
      description: 'Description for Award 5',
      detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      image: ForeignUniversity2,
      title: 'Global Insights',
      description: 'Global collaboration',
      detail: 'I had the incredible opportunity to meet the CEO of Aura International School of Management, France. Our meaningful discussions on global education, leadership, and collaboration were truly inspiring. I’m deeply grateful for the insights shared and the vision for future opportunities. This exchange reinforced the importance of fostering international partnerships and creating transformative learning experiences. Engaging with a leader of such caliber was both enlightening and motivating, and I look forward to building on this connection to drive impactful collaborations. Moments like these reaffirm the power of dialogue in shaping innovative approaches to education and global leadership.',
    }
  ];

  const totalPages = Math.ceil(features.length / 4);

  const handleClickOpen = (feature) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeature(null);
  };

  const handleDotClick = (page) => {
    setCurrentPage(page);
    scrollRef.current.scrollTo({
      left: page * scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className={`Feature-main ${open ? 'blur-background' : ''}`}>
      <div className="features-top">
        <h1 className="header-award">MY AWARDS</h1>
        <h1 className="header-Features">RECENT <span>FEATURES</span></h1>
      </div>
      <div className="carousel-container">
        <div className="carousel" ref={scrollRef}>
          {features.map((feature, index) => (
            <div key={index} className="card-details">
              <div className="card-img">
                <img
                  className="card-image"
                  src={feature.image}
                  alt={feature.title}
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/380x290')}
                />
                <div
                  className="plus-icon"
                  aria-label="View feature details"
                  onClick={() => handleClickOpen(feature)}
                >
                  <AddCircleSharpIcon style={{ width: '60px', height: '60px' }} />
                </div>
              </div>
              <div className="card-content">
                <div className="card-left">
                  <p className="card-header">{feature.title}</p>
                  <p className="card-detail">{feature.description}</p>
                </div>
                <div
                  className="card-right"
                  onClick={() => handleClickOpen(feature)}
                  aria-label="Open feature details"
                >
                  <p><ArrowCircleRightIcon style={{ color: 'blue' }} /></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={`dot ${pageIndex === currentPage ? 'active' : ''}`}
              onClick={() => handleDotClick(pageIndex)}
            ></div>
          ))}
        </div>
      </div>
      {selectedFeature && (
       <Dialog
       open={open}
       onClose={handleClose}
       aria-labelledby="dialog-title"
       aria-describedby="dialog-description"
       PaperProps={{
         style: {
           borderRadius: 20,
           width: window.innerWidth > 768 ? '70vw' : '90vw', // Responsive width
           maxWidth: 'none',
           height: 'auto', // Let content define height
           overflow: 'hidden',
         },
       }}
     >
       <IconButton
         edge="end"
         color="inherit"
         onClick={handleClose}
         style={{
           position: 'absolute',
           top: '10px',
           right: '10px',
           zIndex: 10,
         }}
       >
         <CloseIcon />
       </IconButton>
       <DialogContent
         style={{
           display: 'flex',
           flexDirection: window.innerWidth > 768 ? 'row' : 'column',
           gap: '15px',
           alignItems: 'center',
           padding: window.innerWidth > 768 ? '20px' : '10px',
         }}
       >
         {/* Image Container */}
         <div
           style={{
             flex: 1,
             minWidth: '250px',
             maxWidth: window.innerWidth > 768 ? '40%' : '100%', // Reduce width
             display: 'flex',
             justifyContent: 'center',
           }}
         >
           <img
             src={selectedFeature.image}
             alt={selectedFeature.title}
             style={{
               width: '100%',
               maxHeight: '250px', // Limit image height
               borderRadius: '8px',
               objectFit: 'contain',
             }}
           />
         </div>
     
         {/* Text Content */}
         <div
           style={{
             flex: 2, // Give more space to text
             overflowY: 'auto',
             padding: '10px',
           }}
         >
           <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{selectedFeature.title}</h1>
           <hr />
           <p style={{ fontSize: '1rem', lineHeight: '1.5', textAlign: 'justify' }}>{selectedFeature.detail}</p>
         </div>
       </DialogContent>
     </Dialog>    
      
      )}
    </section>
  );
};

export default FeaturePage;
