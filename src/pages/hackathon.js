import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Prizes from "../components/hackathon/Prizes";
import Winners from "../components/hackathon/Winners";
import Link from "../components/hackathon/Link";

import styles from "../styles/hackathon.module.css";
import Title from "../components/common/Title";

const HackathonPage = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/hackathon/" }) {
        html
        frontmatter {
          startDate(formatString: "D MMMM HH:mm")
          endDate(formatString: "D MMMM HH:mm")
          prizes {
            img {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            name
            tier
            tierName
            brand
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
            <Title title="Hackathon" />
            <div className={styles.dates}>
                {`${startDate} - ${endDate}`}
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                className={styles.text}
            />
            <Link href={regulation.publicURL} download title="Regulation" />
            <Prizes prizes={prizes} />
            <Link href={registration} title="Sign In!" />
            <Winners winners={winners} />
        </Layout>
    );
};

export default HackathonPage;
