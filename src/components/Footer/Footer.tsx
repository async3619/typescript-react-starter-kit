import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import WidthWrapper from "@components/WidthWrapper";

import s from "./Footer.scss";

const Footer = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <WidthWrapper>
                <span className={s.copyright}>© 2019 Sophia &lt;async3619@naver.com&gt;</span>
            </WidthWrapper>
        </div>
    );
};

export default Footer;
