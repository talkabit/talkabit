import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
        <div>
            <h2>Sponsors</h2>
            {data.allSponsorsJson.group.map((tier) => (
                <div key={tier.fieldValue}>
                    <h3 style={{ textTransform: "capitalize" }}>
                        {tier.fieldValue.slice(tier.fieldValue.indexOf("-") + 1)}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "row" }}>
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
