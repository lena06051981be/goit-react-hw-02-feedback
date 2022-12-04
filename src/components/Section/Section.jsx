import React from 'react';

const Section = ({ title, children }) => {
    return (
        <section title="{title}">
            <h2>{title}</h2>
            {children}
            
        </section>
    )
};

export default Section;