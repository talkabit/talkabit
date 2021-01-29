import React from "react";
import Image from "gatsby-image";
import { SponsorShape } from "../../utils/props";
import { FaFileImage, FaFilePdf, FaFileVideo, FaFileAlt } from "react-icons/fa";
import { lookup } from "mime-types";

const getIcon = (extension) => {
    // eslint-disable-next-line no-unused-vars
    const [_, type, subtype] = lookup(extension).match(/(\w*)\/(\w*)/);

    if (subtype === "pdf") return <FaFilePdf />;

    if (type === "image") return <FaFileImage />;
    else if (type === "video") return <FaFileVideo />;

    return <FaFileAlt />;
};

const Sponsor = ({ website, files, img, name }) => (
    <div>
        <a href={website} target="_blank" rel="noreferrer" alt={name}>
            <h2>
                {name}
            </h2>
        </a>
        <a href={website} target="_blank" rel="noreferrer"  alt={name}>
            <Image fluid={img.childImageSharp.fluid} alt={name} />
        </a>
        <ul>
            {files.map(({ name, path }) => (
                <div key={name}>
                    {getIcon(path.extension)}
                    <a href={path.publicURL} download>
                        {name}
                    </a>
                </div>
            ))}
        </ul>
    </div>
);

Sponsor.propTypes = SponsorShape;

export default Sponsor;
