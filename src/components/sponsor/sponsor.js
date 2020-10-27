import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Sponsor = ({ name, img, tier }) => (
  <div>
    <h6>{name}</h6>
    <p>{tier}</p>
    <Img fluid={img.childImageSharp.fluid} />
  </div>
)

Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object,
    }),
  }).isRequired,
  tier: PropTypes.string.isRequired,
}

export default Sponsor
