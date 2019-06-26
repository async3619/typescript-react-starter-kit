/* eslint-disable no-alert */
import React from "react";
import { compose } from "react-apollo";
import withStyles from "isomorphic-style-loader/withStyles";

import { GuestBookItem, withWriteGuestBook, WriteGuestBookMutationFn } from "@generated/graphql.client";

import s from "./GuestForm.scss";

interface Props {
    writeGuestBook: WriteGuestBookMutationFn;
    onWriteSucceeded?(item: GuestBookItem): void;
}

interface States {
    name: string;
    password: string;
    content: string;
    submitting: boolean;
}

class GuestForm extends React.PureComponent<Props, States> {
    public state: States = {
        name: "",
        password: "",
        content: "",
        submitting: false,
    };

    private onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value,
        });
    };
    private onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value,
        });
    };
    private onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: e.target.value,
        });
    };

    private onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name, password, content } = this.state;

        if (!name || !password || !content) {
            if (!name) {
                alert("Please provide your name.");
            } else if (!password) {
                alert("Please provide your password.");
            } else if (!content) {
                alert("Please provide content.");
            }

            return;
        }

        this.setState({
            submitting: true,
        });

        this.props
            .writeGuestBook({
                variables: {
                    data: {
                        name,
                        password,
                        content,
                    },
                },
            })
            .then(data => {
                this.setState({
                    submitting: false,
                });

                if (!data || !data.data || !this.props.onWriteSucceeded) return;

                this.props.onWriteSucceeded(data.data.writeGuestBook);
            });

        e.preventDefault();
    };

    public render() {
        const { name, password, content, submitting } = this.state;

        return (
            <form method="POST" className={s.root}>
                <div className={s.row}>
                    <input
                        disabled={submitting}
                        onChange={this.onNameChange}
                        placeholder="Name"
                        value={name}
                        className={s.input}
                    />
                    <input
                        disabled={submitting}
                        onChange={this.onPasswordChange}
                        type="password"
                        placeholder="Password"
                        value={password}
                        className={s.input}
                    />
                </div>
                <div className={s.row}>
                    <textarea
                        disabled={submitting}
                        onChange={this.onContentChange}
                        className={s.textarea}
                        value={content}
                    />
                </div>
                <div className={s.row}>
                    <button disabled={submitting} type="submit" className={s.button} onClick={this.onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default compose(
    withWriteGuestBook({
        name: "writeGuestBook",
    }),
    withStyles(s),
)(GuestForm);
