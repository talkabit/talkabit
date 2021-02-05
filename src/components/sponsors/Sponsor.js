import React from "react";
import { SponsorShape } from "../../utils/props";
import { FaFileImage, FaFilePdf, FaFileVideo, FaFileAlt } from "react-icons/fa";
import { lookup } from "mime-types";
import classnames from "classnames";
import styles from "../../styles/sponsors.module.css";
import ListItem from "../utils/ListItem";

const getIcon = (extension) => {
    // eslint-disable-next-line no-unused-vars
    const [_, type, subtype] = lookup(extension).match(/(\w*)\/(\w*)/);

    if (subtype === "pdf") return <FaFilePdf color="#fff" className={styles.icon}/>;

    if (type === "image") return <FaFileImage color="#fff" className={styles.icon}/>;
    else if (type === "video") return <FaFileVideo color="#fff" className={styles.icon}/>;

    return <FaFileAlt color="#fff" className={styles.icon}/>;
};

const Sponsor = ({ website, files, img, name }) => (
    <ListItem name={name} img={img} link={website} className={classnames(styles.wrapper, files.length === 0 ? styles.noContent : null)}>
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
    </ListItem>
);

Sponsor.propTypes = SponsorShape;

export default Sponsor;
