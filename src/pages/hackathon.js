import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Prizes from "../components/hackathon/Prizes";
import Winners from "../components/hackathon/Winners";
import SignIn from "../components/hackathon/SignIn";

const HackathonPage = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/hackathon/" }) {
        html
        frontmatter {
          startDate(formatString: "D MMMM")
          endDate(formatString: "D MMMM")
          prizes {
            img {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            tier
          }
          registration
          regulation {
            publicURL
          }
          winners {
            name
            github
          }
        }
      }
    }
  `);

    const {
        startDate,
        endDate,
        prizes,
        registration,
        winners,
        regulation,
    } = data.markdownRemark.frontmatter;


    return (
        <Layout>
            <Seo title="Hackathon" />
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <div>
                {`${startDate} - ${endDate}`}
            </div>
            <Prizes prizes={prizes} />
            <SignIn registration={registration}/>
            {regulation ? (
                <a href={regulation.publicURL} download>
                    Regulation
                </a>
            ) : null}
            {winners ? (
                <Winners winners={winners} />
            ) : null}
        </Layout>
    );
};

export default HackathonPage;
