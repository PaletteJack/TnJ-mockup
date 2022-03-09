import "./styles.css";
// import data from "./data/Data";
import Navbar from "./components/Navbar";
import ContentBox from "./components/ContentBox";
import React, { useState } from "react";

const data = [
  {
    id: "about",
    header: "ABOUT HEADER",
    content:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. \n\n The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
  },
  {
    id: "locations",
    header: "LOCATIONS HEADER",
    content:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.\n\n A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. \n\n The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software."
  },
  {
    id: "tickets",
    header: "TICKETS HEADER",
    content:
      "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text.\n\n In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."
  },
  {
    id: "merch",
    header: "MERCH HEADER",
    content:
      "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.\n\n It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples."
  }
];

export default function App() {
  const [expand, setExpand] = useState(false);
  const [menu, setMenu] = useState(false);

  const [content, setContent] = useState({
    id: "",
    header: "",
    content: ""
  });

  function handleClick(event) {
    const { id } = event.target;

    data.forEach((current) => {
      if (current.id === id) {
        setContent(current);
      }
    });

    if (expand !== true || content.id === id) {
      setExpand((expand) => !expand);
    }
  }

  function altClick(event) {
    const { id } = event.target;

    data.forEach((current) => {
      if (current.id === id) {
        setContent(current);
      }
    });

    if (expand !== true || content.id === id) {
      setExpand((expand) => !expand);
    }

    if (content.id !== "") {
      setMenu((menu) => !menu);
    }
  }

  function toggleMenu() {
    setMenu((menu) => !menu);
  }

  return (
    <div className="App">
      <Navbar
        function={handleClick}
        altFunction={altClick}
        toggler={toggleMenu}
        condition={menu}
      />
      <ContentBox
        state={expand}
        title={content.header}
        content={content.content}
      />
      <div id="tagline-contain">
        <div className="tagline">
          <h3 id="tagline-content">Stay High-Drated</h3>
        </div>
      </div>
      <div className="footer"> Copyright 2022 PaletteJack</div>
    </div>
  );
}
