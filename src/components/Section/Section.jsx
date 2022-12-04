import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section title="{title}">
            <h2>{title}</h2>
            {children}            
        </section>
    )
};

Section.prototype = {
    title: PropTypes.string.isRequired,  
}

export default Section;