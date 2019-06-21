import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import s from "./Home.css";

const Home = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <div className={s.container} />
        </div>
    );
};

export default Home;
