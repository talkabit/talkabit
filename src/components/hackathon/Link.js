import React from "react"
import PropTypes from "prop-types"
import { FaFileDownload } from "react-icons/fa"

import styles from "../../styles/hackathon.module.css"

const Link = ({ href, download, title }) => (
  <div className={styles.linkContainer}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.title}
      download={download}
    >
      {download ? <FaFileDownload color="#FFFFFF" size="2em" className={styles.icon}/> : null}
      <h2>{title}</h2>
    </a>
  </div>
)

Link.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  download: PropTypes.bool,
}

Link.defaultProps = {
  download: false,
}

export default Link
