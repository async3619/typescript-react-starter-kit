import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import WidthWrapper from "../WidthWrapper/width-wrapper";

import s from "./Header.scss";

const Header = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <WidthWrapper>
                <h1 className={s.title}>Typescript React Starter Kit</h1>
            </WidthWrapper>
        </div>
    );
};

export default Header;
