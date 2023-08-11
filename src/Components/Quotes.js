import React from "react";
import Navbar from "./navbar1";
import Footer from "./footer";
// import "./Quotes.css"; // Import the provided CSS file

const quotes = [
    "Art is not what you see, but what you make others see. - Edgar Degas",
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Creativity takes courage. - Henri Matisse",
    "Painting is just another way of keeping a diary. - Pablo Picasso",
    "Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton",
    "The world is but a canvas to the imagination. - Henry David Thoreau",
    "Art is the only way to run away without leaving home. - Twyla Tharp",
    "Colors, like features, follow the changes of the emotions. - Pablo Picasso",
    "To be an artist is to believe in life. - Henry Moore",
    "Art is the lie that enables us to realize the truth. - Pablo Picasso",
    "Great things are done by a series of small things brought together. - Vincent van Gogh",
    "Every artist dips his brush in his own soul, and paints his own nature into his pictures. - Henry Ward Beecher",
    "A picture is a poem without words. - Horace",
    "Art is the most intense mode of individualism that the world has known. - Oscar Wilde",
    "The painter tries to master color, line, and form; the musician tries to master sound; the chef tries to master taste. The great painter, the great musician, the great chef does master the medium...and then surpasses it. - Unknown",
    "Art is the elimination of the unnecessary. - Pablo Picasso",
    "Art is the journey of a free soul. - Alev Oguz",
    "Art washes away from the soul the dust of everyday life. - Pablo Picasso",
    "The artist is a receptacle for emotions that come from all over the place: from the sky, from the earth, from a scrap of paper, from a passing shape, from a spider’s web. - Pablo Picasso",
    "The painter will produce pictures of little merit if he takes the works of others as his standard. - Leonardo da Vinci",
    "Painting is silent poetry, and poetry is painting that speaks. - Plutarch",
    "Art must be an expression of love or it is nothing. - Marc Chagall",
    "It is not the language of painters but the language of nature which one should listen to. - Vincent van Gogh",
    "Art is not freedom from discipline, but disciplined freedom. - John F. Kennedy",
    "Art is either revolution or plagiarism. - Paul Gauguin",
    "Art is a line around your thoughts. - Gustav Klimt",
    "I am seeking. I am striving. I am in it with all my heart. - Vincent van Gogh",
    "An artist cannot fail; it is a success to be one. - Charles Horton Cooley",
    "Art is the most intense mode of individualism that the world has known. - Oscar Wilde",
    "Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings. - Wassily Kandinsky",
    "Art is not freedom from discipline, but disciplined freedom. - John F. Kennedy",
    "The greatest respect an artist can pay to music is to give it life. - Pablo Casals",
    "The object isn’t to make art, it’s to be in that wonderful state that makes art inevitable. - Robert Henri",
    "To create one’s own world takes courage. - Georgia O’Keeffe",
    "Art is the triumph over chaos. - John Cheever",
];

const Quotes = () => {
  return (
    <>
    <Navbar/>
    <div className="quotes-container">
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote">
            <span className="quote-icon">❝</span>
            <div data-aos="fade-up">
            <p className="quote-text">{quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Quotes;
