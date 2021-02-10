import React from "react";
import { SponsorShape } from "../../utils/props";
import {
    FaFileImage,
    FaFilePdf,
    FaFileVideo,
    FaFileAlt,
    FaLink,
} from "react-icons/fa";
import { lookup } from "mime-types";
import classnames from "classnames";
import styles from "../../styles/sponsors.module.css";
import ListItem from "../utils/ListItem";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const getIcon = (extension) => {
    // eslint-disable-next-line no-unused-vars
    const [_, type, subtype] = lookup(extension).match(/(\w*)\/(\w*)/);

    if (subtype === "pdf")
        return <FaFilePdf color="#fff" className={styles.icon} />;

    if (type === "image")
        return <FaFileImage color="#fff" className={styles.icon} />;
    else if (type === "video")
        return <FaFileVideo color="#fff" className={styles.icon} />;

    return <FaFileAlt color="#fff" className={styles.icon} />;
};

const Link = ({ path, name, download }) =>
    download ? (
        <a href={path.publicURL} download className={styles.link} title={name}>
            {getIcon(path.extension)}
            {shortName(name, 35)}
        </a>
    ) : (
        <a href={path} className={styles.link} target="_blank" rel="noreferrer" title={name}>
            <FaLink color="#fff" className={styles.icon} />
            {shortName(name, 35)}
        </a>
    );

const shortName = (name, maxLength) =>
    name.length >= maxLength ? name.slice(0, maxLength - 3).concat("...") : name;

Link.propTypes = {
    name: PropTypes.string.isRequired,
    download: PropTypes.bool,
    path: PropTypes.oneOfType([
        PropTypes.shape({
            publicURL: propTypes.string,
            extension: PropTypes.string,
        }),
        PropTypes.string,
    ]),
};

const Sponsor = ({
    website,
    jointWebsite,
    files,
    links,
    img,
    name,
    jointName,
    className,
}) => (
    <ListItem
        name={name}
        jointName={jointName}
        jointWebsite={jointWebsite}
        img={img}
        link={website}
        className={classnames(
            styles.wrapper,
            !files || files.length === 0 ? styles.noContent : null,
            className
        )}
    >
        {files || links ? (
            <ul className={styles.fileList}>
                {files
                    ? files.map((file) => <Link {...file} key={file.name} download />)
                    : null}
                {links ? links.map((link) => <Link {...link} key={link.name} />) : null}
            </ul>
        ) : null}
    </ListItem>
);

Sponsor.propTypes = SponsorShape;

export default Sponsor;
