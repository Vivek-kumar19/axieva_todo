import React from "react";

const Hero = () => {
    return(
        <section className="hero">
        <div className="masterClass">
            <h2>Manage your <br/> time well</h2>
            <img className="arrow" src={process.env.PUBLIC_URL + 'assets/arrow.svg'} alt={'image of to-do list'} />
            <img className="notes" src={process.env.PUBLIC_URL + 'assets/notes.svg'} alt={'image of to-do list'} />
        </div>
        </section>
    );
};

export default Hero;