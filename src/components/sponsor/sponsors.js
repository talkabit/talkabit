import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "../../styles/sponsors.module.css";

import Sponsor from "./sponsor";

const Sponsors = () => {
    const data = useStaticQuery(graphql`
    query {
      allSponsorsJson(sort: { fields: tier }) {
        group(field: tier) {
          edges {
            node {
              name
              tier
              img {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fieldValue
        }
      }
    }
  `);

    return (
        <div className={styles.sponsorContainer}>
            {data.allSponsorsJson.group.map((tier) => (
                <div key={tier.fieldValue}>
                    <div className={styles.tierContainer}>
                        {tier.edges.map(
                            (sponsor) => (
                                <Sponsor key={sponsor.node.name} {...sponsor.node} />
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sponsors;
