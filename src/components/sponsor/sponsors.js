import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

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
                  fluid(maxWidth: 400, maxHeight: 250) {
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
    var group = item.node.frontmatter["tier"]
    storage[group] = storage[group] || []

    storage[group].push(item)
    return storage
  }, {})

  console.log(groupedData)

  // falta fazer grid para display de varios sponsors

  return (
    <div>
      <h3>Sponsors</h3>
      <div>
        {data.allMarkdownRemark.edges.map(edge => (
          <Sponsor
            key={edge.node.frontmatter.name}
            {...edge.node.frontmatter}
          />
        ))}
      </div>
    </div>
  )
}

export default Sponsors
