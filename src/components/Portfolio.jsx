import React from "react";
import image from "../images/computercoding.png";
import image1 from "../images/womencoding.png";
import image2 from "../images/code.png";

const imageAltText = "computer code";
const image1women = "women on computer";
const image2code = "coding image"
const projectList = [
    {
        title: "FitNow",
        description: "FitNow: Your Ultimate Health Companion for Exercise and Diet Food Planning; The all-in-one health app designed to empower you on your fitness journey. With its two powerful sides—the Exercise App and Diet Food Plan—you'll have everything you need to achieve your health and wellness goals. FitNow ensures that both sides of the app work harmoniously to provide you with a holistic health experience. Seamlessly switch between the Exercise App and Diet Food Plan, and let them complement each other for optimal results Whether you're looking to shed pounds, build muscle, or simply maintain a balanced lifestyle, FitNow is your all-in-one companion for success. Get ready to unlock your full potential, harness your inner strength, and embrace a healthier, more vibrant version of yourself with FitNow – your gateway to a fit and nourished life.",
        description2: "BUILT WITH: POSTGRESQL, EXPRESS, REACT, NODE, CSS",
        description3: "",
        url: "https://main.d1pe52f8thbmyf.amplifyapp.com/",
        gitHub: "https://github.com/Aekangi/FitNow-FrontEnd",
    },
    {
        title: "Food Diary",
        description:
            "Introducing Food Diary, the ultimate culinary companion app that brings together the art of food recipes and the creativity of mocktail recipes in one convenient platform. Food Diary is your go-to app for all things gastronomic, inspiring you to explore, create, and savor delicious meals and refreshing mocktails like never before. Whether you're a food enthusiast looking to expand your culinary repertoire or a non-alcoholic beverage lover seeking new and exciting mocktail creations, Food Diary is your virtual kitchen companion. Immerse yourself in a world of flavors, textures, and aromas as you embark on a culinary adventure, experimenting with tantalizing food and mocktail recipes that will awaken your senses and elevate your dining experiences. Let Food Diary be your guide on this delicious journey of exploration and enjoyment.",
        description2: "BUILT WITH: MONGOOSE, EXPRESS, REACT, NODE, CSS",
        description3: "",
        url: "https://fooddiary82.herokuapp.com/",
        gitHub: "https://github.com/Aekangi/FoodDiaries",
    },
    {
        title: "BuddyUp",
        description: "Introducing BuddyUp, the ultimate social companion app designed to bring people together and enhance your social experiences like never before. With its intuitive interface and powerful matching capabilities, BuddyUp connects like-minded individuals who share common interests, revolutionizing the way you find your ideal activity companion. Say goodbye to attending events alone and embrace the excitement of meeting new people who share your enthusiasm. Browse user profiles, explore detailed interests, and let BuddyUp's advanced matching algorithm connect you with compatible individuals for enjoyable and engaging social experiences. Redefine your social journey and create lifelong memories with BuddyUp, where friendship and adventure collide.",
        description2: "BUILT WITH: POSTGRESQL, EXPRESS, REACT, NODE, CSS",
        description3: "",
        url: "https://main.ddr1fzghccyda.amplifyapp.com/",
        gitHub: "https://github.com/kalenluciano/buddy-up-frontend",
    },
    {
        title: "RAWG",
        description: "Introducing RAWG, the ultimate platform for gamers to dive into their favorite game genres and discover exciting new titles. With its user-friendly interface and comprehensive database, RAWG empowers gamers to explore, research, and connect with their gaming passions like never before. Discover games that match your preferences, and dive deeper into each title with detailed descriptions, ratings, and reviews. Built with an API sourced directly from the RAWG website, the app delivers an immersive and seamless experience. Whether you're seeking nostalgia-inducing classics or cutting-edge titles, the app is your gateway to a world of gaming exploration. Embrace the excitement, discover hidden gems, and embark on unforgettable gaming experiences with RAWG, the ultimate companion for every gamer.",
        description2: "BUILT WITH: VUE.JS, API, JAVASCRIPT, CSS",
        description3: "",
        url: "https://main.d2ujbqwsmf57lw.amplifyapp.com/",
        gitHub: "https://github.com/Aekangi/RAWG",
    },
];

const Portfolio = () => {
    return (
        <div className="portfoliobgrd">
            <section className="light" id="portfolio">
                <h2>Portfolio</h2>
                <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                    <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                        <img
                            src={image}
                            style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px", opacity: ".7" }}
                            alt={imageAltText}
                        />
                        <img
                            src={image1}
                            style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px", opacity: ".7" }}
                            alt={image1women}
                        />
                        <img
                            src={image2}
                            style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px", opacity: ".7" }}
                            alt={image2code}
                        />
                    </div>
                    <div className="container">
                        {projectList.map((project) => (
                            <div className="box" key={project.title}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.title}</h3>
                                </a>
                                <p className="small">{project.description}</p>
                                <p className="small">{project.description2}</p>
                                <p className="small">{project.description3}</p>
                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                                    <h3>Github Repository</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;