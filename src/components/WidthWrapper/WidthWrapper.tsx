import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import classNames from "classnames";

import s from "./WidthWrapper.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const WidthWrapper = (props: Props) => {
    useStyles(s);

    const { className, ...rest } = props;

    return (
        <div className={classNames(className, s.root)} {...rest}>
            {props.children}
        </div>
    );
};

export default WidthWrapper;
