import React, { FunctionComponent } from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import Header from "@components/Header";

// external-global styles must be imported in your JS.
import normalizeCss from "normalize.css";
import s from "./Layout.scss";

interface PropTypes {}

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
    useStyles(normalizeCss, s);

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
