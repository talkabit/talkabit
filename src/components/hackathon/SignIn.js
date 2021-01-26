import React from "react"
import PropTypes from "prop-types"

import styles from "../../styles/hackathon.module.css"

const SignIn = ({ registration }) => (
  <div className={styles.signInContainer}>
    <a
      href={registration}
      target="_blank"
      rel="noreferrer"
      className={styles.title}
    >
      <h2>Sign In!</h2>
    </a>
  </div>
)

SignIn.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SignIn
