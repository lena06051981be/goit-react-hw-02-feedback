import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <SectionStyle title="{title}">
            <h2>{title}</h2>
            {children}            
        </SectionStyle>
    )
};

Section.prototype = {
    title: PropTypes.string.isRequired,  
}

export default Section;