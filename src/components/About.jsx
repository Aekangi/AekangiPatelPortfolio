
import React from "react";

// import image from "../images/mosaic.svg";

// const imageAltText = "purple and blue abstract background";

const description =
    "Versatile professional transitioning from a successful career as a paralegal to pursue a new path as a software engineer. Combining my strong analytical and problem-solving skills with a passion for technology, I am eager to contribute to innovative software development projects and embrace continuous learning in this dynamic field.";

const skillsList = [
    "JavaScript",
    "Python",
    "SQL",
    "React",
    "Vue",
    "Node",
    "API",
    "Express",
    "HTML5",
];

const detailOrQuote = "Software is easy to make, except when you want it to do something new. And then, of course, there is a corollary: The only software that's worth making is software that does something new.";
const author = "- Scott Rossenberg";
const About = () => {
    return (
        <section className="light" id="about">
            <img className="background" src="https://w0.peakpx.com/wallpaper/430/848/HD-wallpaper-dark-blue-dark-blue-abstract-waves-pattern-texture-surface.jpg" alt="b/w mosaic tile" />
            <div
                style={{
                    backgroundColor: "rgb(0, 5, 46)",
                    opacity: ".6",
                    width: "50%",
                    padding: "4rem",
                    margin: "3rem auto",
                    textAlign: "center",
                }}
            >
                <h2>About Myself</h2>
                <p className="large">{description}</p>
                <hr />
                <ul
                    style={{
                        textAlign: "center",
                        columns: 3,
                        fontSize: "1.25rem",
                        margin: "2rem 3rem",
                        gap: "3rem",
                    }}
                >
                    {skillsList.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <hr />
                <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
                <p>{author}</p>

            </div>
        </section >
    );
};

export default About;
