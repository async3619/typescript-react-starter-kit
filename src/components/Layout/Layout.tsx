import React, { FunctionComponent } from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import WidthWrapper from "@components/WidthWrapper";
import Navigation from "@components/Navigation";
import Header from "@components/Header";
import Footer from "@components/Footer";

// external-global styles must be imported in your JS.
import normalizeCss from "normalize.css";
import globalStyles from "./Layout.global.scss";
import s from "./Layout.scss";

interface Props {
    fullWidth?: boolean;
}

const Layout: FunctionComponent<Props> = ({ children, fullWidth }) => {
    useStyles(normalizeCss, globalStyles, s);

    return (
        <div className={s.root}>
            <Navigation />
            <Header />
            <main className={s.content}>
                {!fullWidth && <WidthWrapper>{children}</WidthWrapper>}
                {fullWidth && children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
