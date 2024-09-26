import React from 'react';
import s from './Modal.module.scss'

const Modal = ({ isOpen, onClose, film }) => {
    if (!isOpen) return null; 
      
    // Function to close the modal
       const closeModal = () => {
           setIsModal(false);
           setSelectedFilm(null);
       };

    return (
        <section className={s.overlayStyle}>
            <div className={s.modalStyle}>
            <button style={{backgroundColor:'violet', borderRadius:'8px', cursor:'pointer'}} onClick={onClose}>Close</button>
              <h2 style={{color:'beige', textAlign:'center', fontSize:'2rem', marginTop:'0.5rem'}} className={s.h2Style}>Details about the movie:</h2>
              <h3 style={{color:'violet',  textAlign:'center', fontSize:'1.5rem',marginTop:'1rem', textDecoration:'underline'}}>{film.title}</h3>
              <p style={{color:'beige',  textAlign:'center', fontFamily:'Roboto'}}><strong>Release Date:</strong> {film.releaseDate}</p>
              <p style={{color:'beige',  textAlign:'center', fontFamily:'Roboto'}}><strong>Director:</strong> {film.director}</p>
              <p style={{color:'beige', width:'75%', height:'200px', marginBottom:'1rem',
                margin:'auto ', fontFamily:'Roboto'}}>Summary:Star Wars: A New Hope (1977) is the first film in the original Star Wars 
            trilogy and the movie that launched the iconic space saga. Set in a galaxy far, 
            far away, the story follows a young farm boy, Luke Skywalker, who dreams of adventure. 
            When he discovers a distress message hidden in a droid, he joins forces with Princess 
            Leia, Han Solo, Chewbacca, and the Jedi knight Obi-Wan Kenobi to take down the evil 
            Galactic Empire.

         Their mission is to destroy the Empire's ultimate weapon, the Death Star, a space station 
         capable of obliterating entire planets. With the help of the Rebel Alliance, Luke learns 
         about the mystical Force and plays a crucial role in the battle, ultimately delivering the 
         final blow to the Death Star.

         The film is celebrated for its groundbreaking visual effects, memorable characters, and 
         its timeless struggle between good and evil.</p>
        
                
        </div>
        </section>
    );
};


export default Modal;
