import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SponsorsList from "../components/sponsors/Sponsors";

const Sponsors = () => {
    const data = useStaticQuery(graphql`
    query {
      allSponsorsJson(sort: { fields: tier }) {
        group(field: tier) {
          edges {
            node {
              name
              tier
              file {
                publicURL
              }
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
        <Layout>
            <Seo title="Sponsors" />
            <SponsorsList tiers={data.allSponsorsJson.group} />
        </Layout>
    );
};

export default Sponsors;
