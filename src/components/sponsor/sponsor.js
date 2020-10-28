import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Sponsor = ({ name, img, tier }) => (
  <div className="sponsor-item">
    <Img fluid={img.childImageSharp.fluid} />
    <p className="t-center">{name}</p>
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
