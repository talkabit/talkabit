import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import md5 from "md5";

import { SpeakerShape } from "../utils/props";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Speaker from "../components/activity/speaker";

const Activity = ({
    title,
    type,
    date,
    startTime,
    endTime,
    speakers,
    html,
}) => (
    <Layout>
        <Seo title={title} />
        <h1 style={{ textTransform: "capitalize" }}>
            {`${type}: ${title}`}
        </h1>
        <div>
            {speakers.map((speaker) => (
                <Speaker key={md5(speaker.bio)} {...speaker} />
            ))}
        </div>
        <div>
            {date}
        </div>
        <div>
            {`${startTime} - ${endTime}`}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
);

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
    html: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(PropTypes.shape(SpeakerShape)).isRequired,
};

const TemplateWrapper = ({ data }) => {
    const activityProps = {
        ...data.markdownRemark.frontmatter,
        html: data.markdownRemark.html,
    };
    return <Activity {...activityProps} />;
};

TemplateWrapper.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            html: PropTypes.node,
        }),
    }),
};

export default TemplateWrapper;
