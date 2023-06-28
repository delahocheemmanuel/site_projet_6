import React from "react";


const Banner = ({ text, bannerType }) => {

    return (
        <section className={bannerType}>
        <h1>{text}</h1>
        </section>
    );
    }

export default Banner;