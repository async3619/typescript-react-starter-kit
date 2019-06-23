import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import WidthWrapper from "@components/WidthWrapper";

import TypeScriptLogo from "@res/typescript-logo.svg";

import s from "./Navigation.scss";

const Navigation = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <WidthWrapper className={s.wrapper}>
                <TypeScriptLogo className={s.logo} />
                <h2 className={s.title}>Typescript React Starter Kit</h2>
                <div className={s.placeholder} />
                <ul className={s.menu}>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/async3619/typescript-react-starter-kit"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </WidthWrapper>
        </div>
    );
};

export default Navigation;
