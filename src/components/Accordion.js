import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ chapters }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {chapters.map((chapter, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={() => handleToggle(index)}>
                        <h3>{chapter.title}</h3>
                        <span>{activeIndex === index ? "-" : "+"}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <ul>
                                {chapter.subchapters.map((subchapter, subIndex) => (
                                    <li key={subIndex}>{subchapter.title || subchapter}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;