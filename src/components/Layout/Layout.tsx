import React, { FunctionComponent } from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import Navigation from "@components/Navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";

// external-global styles must be imported in your JS.
import normalizeCss from "normalize.css";
import globalStyles from "./Layout.global.scss";
import s from "./Layout.scss";

interface PropTypes {}

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
    useStyles(normalizeCss, globalStyles, s);

    return (
        <div className={s.root}>
            <Navigation />
            <Header />
            <main className={s.content}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
