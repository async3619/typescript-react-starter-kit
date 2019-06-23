import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import s from "./WidthWrapper.scss";

interface Props {
    children: React.ReactNode;
}

const WidthWrapper = (props: Props) => {
    useStyles(s);

    return <div className={s.root}>{props.children}</div>;
};

export default WidthWrapper;
