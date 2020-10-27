import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import AddToCalendarHOC from "react-add-to-calendar-hoc";

const Button = ({ children, onClick }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

const Dropdown = ({ children }) => (
    <div>
        {children}
    </div>
);

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
};

const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

const CalendarExport = () => {
    const data = useStaticQuery(graphql`
    query {
      allEventJson {
        edges {
          node {
            title
            timezone
            startDatetime(formatString: "YYYYMMDDTHHmmss")
            endDatetime(formatString: "YYYYMMDDTHHmmss")
            description
            duration
            location
            text
          }
        }
      }
    }
  `);

    return (
        <div>
            {data.allEventJson.edges.map(({ node }) => (
                <AddToCalendarDropdown
                    key={node.title}
                    event={node}
                    filename={node.title}
                    buttonText={node.text}
                />
            ))}
        </div>
    );
};


export default CalendarExport;
