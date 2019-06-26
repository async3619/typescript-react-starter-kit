import React from "react";
import { compose } from "react-apollo";
import withStyles from "isomorphic-style-loader/withStyles";
import classNames from "classnames";

import GuestView from "../GuestView";

import { GuestBookItem, GuestBooksProps, withGuestBooks } from "../../../../__generated__/graphql.client";

import s from "./GuestList.scss";

interface Props {}

class GuestList extends React.PureComponent<GuestBooksProps<Props>> {
    public renderLoading() {
        return (
            <div className={classNames(s.root, s.message)}>
                <span>Loading...</span>
            </div>
        );
    }

    public renderEmpty = () => {
        return (
            <div className={classNames(s.root, s.message)}>
                <span>The guest book is empty.</span>
            </div>
        );
    };

    public renderGuestBook = (guestBook: GuestBookItem) => {
        return <GuestView key={guestBook.id} item={guestBook} />;
    };

    public render() {
        const { data } = this.props;
        if (!data || data.loading || !data.guestBooks) {
            return this.renderLoading();
        }

        if (data.guestBooks.length === 0) {
            return this.renderEmpty();
        }

        return <div className={s.root}>{data.guestBooks.map(this.renderGuestBook)}</div>;
    }
}

export default compose(
    withGuestBooks({
        options: {
            variables: {
                index: 0,
                count: 15,
            },
        },
    }),
    withStyles(s),
)(GuestList);
