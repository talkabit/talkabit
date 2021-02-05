import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classnames from "classnames";
import styles from "../../styles/speakers.module.css";

const ListItem = ({ name, img, children, link, className }) => (
    <div className={classnames(styles.lines, styles.speaker, className)}>
        {link ? (
            <a href={link} target="_blank" rel="noreferrer" style={{ zIndex: 2 }}>
                <ImageContainer img={img}/>
            </a>
        ) : <ImageContainer img={img}/>}
        <div className={styles.speakerInfo}>
            <h2 className={styles.speakerName}>
                {
                    link ? (
                        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
                            {name}
                        </a>
                    ) : name
                }
            </h2>
            {children}
        </div>
    </div>
);

const ImageContainer = ({ img }) => (
    <div className={classnames(styles.speakerImgContainer)}>
        {img.childImageSharp.fluid ?             <Img fluid={img.childImageSharp.fluid} className={styles.speakerImg} />
            :             <Img fixed={img.childImageSharp.fixed} className={styles.speakerImg} />}
    </div>
);

ImageContainer.propTypes = {
    img: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
            fixed: PropTypes.object,
        }),
    }).isRequired,
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object,
            fixed: PropTypes.object,
        }),
    }).isRequired,
    children: PropTypes.node.isRequired,
    link: PropTypes.string,
    className: PropTypes.string,
};

export default ListItem;
