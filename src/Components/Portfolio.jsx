/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Custom Neural network Library",
    description:
      "Developed a custom neural network library to understand the underlying principles and mathematics behind neural network.",
    url: "https://github.com/pranzalkhadka/custom_neural_network_library",
  },
  {
    title: "Banking Chatbot",
    description:
      "Developed an AI ChatBot using the Rasa framework for seamless interactions in the banking domain that Facilitates natural language conversations, allowing users to inquire about account balance and transaction history.",
    url: "https://github.com/pranzalkhadka/Banking_ChatBot",
  },
  {
    title: "Conversation Summarizer",
    description:
      "Implemented a full-cycle NLP project for summarizing conversations using HuggingFace Transformers by fine-tuning Google’s Pegasus model over a custom dataset",
    url: "https://github.com/pranzalkhadka/Text_Summarizer",
  },
  {
    title: "Building Footprint Segmentation",
    description:
      "Developed a deep learning model for segmenting buildings from surrounding backgrounds in satellite images for urban planning.",
    url: "https://github.com/pranzalkhadka/Building_footprint_segmentation",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
