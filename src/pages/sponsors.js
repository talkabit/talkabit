import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SponsorsList from "../components/sponsors/Sponsors";
import Title from "../components/common/Title";
import Sponsor from "../components/sponsors/Sponsor";

import styles from "../styles/sponsors.module.css";

const Sponsors = () => {
    const data = useStaticQuery(graphql`
    query {
      allSponsorsJson(sort: { fields: tier }) {
        group(field: tier) {
          edges {
            node {
              name
              website
              tier
              links {
                path
                name
              }
              files {
                path {
                  publicURL
                  extension
                }
                name
              }
              img {
                childImageSharp {
                  fixed(width: 230) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          fieldValue
        }
      }

      dataJson(name: { eq: "ScaleUp" }) {
        website
        name
        img {
          childImageSharp {
            fixed(width: 230) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

    return (
        <Layout title="Sponsors">
            <Seo title="Sponsors" />
            <SponsorsList tiers={data.allSponsorsJson.group} />
            <Title title="Partner" />
            <Sponsor {...data.dataJson} className={styles.singleSponsor}/>
        </Layout>
    );
};

export default Sponsors;
