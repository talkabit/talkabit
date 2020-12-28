import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
    } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <Seo title="Hackathon" />
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <div>
                {`${startDate} - ${endDate}`}
            </div>
            <ul>
                {prizes.map(({ tier, name, img }) => (
                    <li key={tier}>
                        <h5>
                            {name}
                        </h5>
                        <div>
                            {tier}
                        </div>
                        <Img fluid={img.childImageSharp.fluid} />
                    </li>
                ))}
            </ul>
            <a href={registration} target="_blank" rel="noreferrer">
                Register
            </a>
            {winners ? (
                <ul>
                    {winners.map(({ github, name }) => (
                        <li key={github}>
                            <h6>
                                {name}
                            </h6>
                            <a href={github} target="_blank" rel="noreferrer">
                                Repository
                            </a>
                        </li>
                    ))}
                </ul>
            ) : null}
        </Layout>
    );
};

export default HackathonPage;
