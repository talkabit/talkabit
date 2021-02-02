import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classnames from "classnames";

import styles from "../../styles/speakers.module.css";

const Speaker = ({ name, bio, img }) => {
    return (
        <div className={styles.speaker}>
            <div className={classnames(styles.lines, styles.speakerImgContainer)}>
                <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
            </div>
            <div className={styles.speakerInfo}>
                <h2 className={styles.speakerName}>{name}</h2>
                <p className={styles.speakerBio}>{bio}</p>
            </div>
        </div>
        // even ? (
        //     <Row className={styles.speakerLeft}>
        //         <Col className={styles.speakerImgContainer} md={{ span: 5, offset: 0}} lg="4" xs="12">
        //             <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
        //         </Col>
        //         <Col md={{ span: 7, offset: 0}} lg={{ span: 6, offset: 0}} xs="12">
        //             <h2 className={styles.speakerName}>{name}</h2>
        //             <p className={styles.speakerBio}>{bio}</p>
        //         </Col>
        //     </Row>
        // ) : (
        //     <Row className={styles.speakerRight}>
        //         <Col md={{ span: 7, offset: 2}} lg={{ span: 6, offset: 2}} xs="12">
        //             <h2 className={styles.speakerName}>{name}</h2>
        //             <p className={styles.speakerBio}>{bio}</p>
        //         </Col>
        //         <Col className={styles.speakerImgContainer} md={{ span: 5, offset: 0}} lg="4" xs="12">
        //             <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
        //         </Col>
        //     </Row>
        // )
    );
}

Speaker.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    img: PropTypes.shape({
      childImageSharp: PropTypes.shape({
          fluid: PropTypes.object,
      }),
    }).isRequired,
};

export default Speaker;
