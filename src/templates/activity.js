import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Speaker from "../components/activity/speaker";

const Activity = ({ data }) => {
    const activity = data.markdownRemark;
    const {
        title,
        type,
        date,
        startTime,
        endTime,
        speakers,
    } = activity.frontmatter;

    return (
        <Layout>
            <Seo title={title} />
            <h1 style={{ textTransform: "capitalize" }}>
                {type}
                :
                {title}
            </h1>
            <div>
                {speakers.map((speaker) => (
                    <Speaker key={speaker.name} speaker={speaker} />
                ))}
            </div>
            <div>
                {date}
            </div>
            <div>
                {startTime}
                {" "}
                -
                {endTime}
            </div>
            <div dangerouslySetInnerHTML={{ __html: activity.html }} />
        </Layout>
    );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "D MMMM", locale: "en-US")
        startTime
        endTime
        speakers {
          name
          role
          occupations {
            what
            where
          }
          bio
          img {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkedin
        }
      }
    }
  }
`;

Activity.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                startTime: PropTypes.string.isRequired,
                endTime: PropTypes.string.isRequired,
                speakers: PropTypes.arrayOf(PropTypes.shape({})),
            }),
        }),
    }),
};

export default Activity;
