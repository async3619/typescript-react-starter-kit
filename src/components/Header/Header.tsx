import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import classNames from "classnames";

import WidthWrapper from "@components/WidthWrapper";

import Logo from "@res/logo.svg";
import TypeScriptLogo from "@res/typescript-logo.svg";

import s from "./Header.scss";

const Header = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <WidthWrapper>
                <h1 className={s.title}>Typescript React Starter Kit</h1>
                <h2 className={s.subtitle}>Easier setting up project with essential features</h2>
            </WidthWrapper>
            <div className={s.bg}>
                <WidthWrapper className={s.bgWrapper}>
                    <div className={s.logoWrapper}>
                        <div className={s.reactWrapper}>
                            <Logo className={s.logo} />
                        </div>
                        <TypeScriptLogo className={classNames(s.logo, s.typescript)} />
                    </div>
                </WidthWrapper>
            </div>
        </div>
    );
};

export default Header;
