import React from "react";

import Team from "./team";
import { useStaticQuery, graphql } from "gatsby";

import AboutStyles from "../../../styles/about.module.css";


const Teams = () => {

    const teams = useStaticQuery(graphql`
    query {
      allTeamsJson {
        edges {
          node {
            name
            members {
              name
              img {
                childImageSharp {
                  id
                  fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    return (
        <div>
            <h2 className={AboutStyles.titleRight}>Meet the Team</h2>
            {teams.allTeamsJson.edges.map((team) => <Team key={team.node.name} {...team.node} />)}
        </div>
    );
};

export default Teams;
