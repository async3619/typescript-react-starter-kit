import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import classNames from "classnames";

import { withLorem } from "@generated/graphql.client";

import s from "./LoremBlock.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const LoremBlock = withLorem<Props>()(props => {
    useStyles(s);

    if (!props.data || props.data.loading) {
        return (
            <div className={s.root}>
                <span>Loading...</span>
            </div>
        );
    }

    const { className, ...rest } = props;
    const { sentence, paragraph } = props.data;

    return (
        <div className={classNames(s.root, className)} {...rest}>
            <h3 className={s.title}>{sentence}</h3>
            <p className={s.paragraph}>{paragraph}</p>
        </div>
    );
});

export default LoremBlock;
