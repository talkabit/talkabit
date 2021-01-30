import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styles from "../../styles/speakers.module.css";
import { Col, Row } from "react-bootstrap";


const Speaker = ({ name, bio, img, even }) => {
    return (
        even ? (
            <Row className={styles.speakerLeft}>
                <Col className={styles.speakerImgContainer} md={{ span: 4, offset: 0}} xs="12">
                    <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
                </Col>
                <Col md="6" xs="12">
                    <p>{bio}</p>
                </Col>
            </Row>
        ) : (
            <Row className={styles.speakerRight}>
                <Col md={{ span: 6, offset: 2}} xs="12">
                    <p>{bio}</p>
                </Col>
                <Col md="4" xs="12">
                    <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
                </Col>
            </Row>
        )
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
