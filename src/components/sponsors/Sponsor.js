import React from "react";
import Image from "gatsby-image";
import { SponsorShape } from "../../utils/props";
import { FaFileImage, FaFilePdf, FaFileVideo, FaFileAlt } from "react-icons/fa";
import { lookup } from "mime-types";
import styles from "../../styles/sponsors.module.css";
import { Col, Row } from "react-bootstrap";

const getIcon = (extension) => {
    // eslint-disable-next-line no-unused-vars
    const [_, type, subtype] = lookup(extension).match(/(\w*)\/(\w*)/);

    if (subtype === "pdf") return <FaFilePdf color="#001747" className={styles.icon}/>;

    if (type === "image") return <FaFileImage color="#001747" className={styles.icon}/>;
    else if (type === "video") return <FaFileVideo color="#001747" className={styles.icon}/>;

    return <FaFileAlt color="#001747" className={styles.icon}/>;
};

const Sponsor = ({ website, files, img, name }) => (
    <Row className={styles.sponsorContainer}>
        <Col className={styles.logoContainer} md="6" xs="12">
            <a href={website} target="_blank" rel="noreferrer" alt={name}>
                <h2 className={styles.name}>
                    {name}
                </h2>
            </a>
            <a
                href={website}
                target="_blank"
                rel="noreferrer"
                alt={name}
                className={styles.imageContainer}
            >
                <Image fluid={img.childImageSharp.fluid} alt={name} className={styles.image}/>
            </a>
        </Col>
        <Col md="6" xs="12">
            <ul className={styles.fileList}>
                {files.map(({ name, path }) => (
                    <div key={name}>
                        <a href={path.publicURL} download className={styles.link}>
                            {getIcon(path.extension)}
                            {name}
                        </a>
                    </div>
                ))}
            </ul>
        </Col>
    </Row>
);

Sponsor.propTypes = SponsorShape;

export default Sponsor;
