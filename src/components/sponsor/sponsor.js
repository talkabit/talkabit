import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Sponsor = ({ name, img }) => (
  <div style={{ margin: "0.5rem", flexGrow: 1, maxWidth: 300 }}>
    <Img fluid={img.childImageSharp.fluid} />
    <p style={{ textAlign: "center" }}>{name}</p>
  </div>
)

Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object,
    }),
  }).isRequired,
}

export default Sponsor
