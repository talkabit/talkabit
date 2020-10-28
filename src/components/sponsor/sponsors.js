import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Sponsor from "./sponsor"

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              img {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              tier
            }
          }
        }
      }
    }
  `)

  const groupedData = data.allMarkdownRemark.edges.reduce((storage, item) => {
    const group = item.node.frontmatter["tier"]
    storage[group] = storage[group] || []

    storage[group].push(item)
    return storage
  }, {})

  return (
    <div>
      <h2>Sponsors</h2>
      {groupedData.Gold && (
        <div>
          <h3>Gold</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {groupedData.Gold.map(item => (
              <Sponsor
                key={item.node.frontmatter.name}
                {...item.node.frontmatter}
              />
            ))}
          </div>
        </div>
      )}
      {groupedData.Silver && (
        <div>
          <h3>Silver</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {groupedData.Silver.map(item => (
              <Sponsor
                key={item.node.frontmatter.name}
                {...item.node.frontmatter}
              />
            ))}
          </div>
        </div>
      )}
      {groupedData.Bronze && (
        <div>
          <h3>Bronze</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {groupedData.Bronze.map(item => (
              <Sponsor
                key={item.node.frontmatter.name}
                {...item.node.frontmatter}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sponsors
