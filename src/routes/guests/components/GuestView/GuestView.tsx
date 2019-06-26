import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
import moment from "moment";

import { GuestBookItem } from "../../../../__generated__/graphql.client";

import s from "./GuestView.scss";

interface Props {
    item: GuestBookItem;
}

const GuestView = ({ item }: Props) => {
    useStyles(s);

    const createdAt = moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss");

    return (
        <div className={s.root}>
            <div className={s.description}>
                <span>{item.name}</span>
                <time dateTime={createdAt}>{createdAt}</time>
            </div>
            <div>{item.content}</div>
        </div>
    );
};

export default GuestView;
