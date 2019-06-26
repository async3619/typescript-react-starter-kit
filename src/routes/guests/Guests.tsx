import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import GuestForm from "./components/GuestForm";
import GuestList from "./components/GuestList";

import s from "./Guests.scss";

const Guests = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <section>
                <h4 className={s.title}>Write Guest Book</h4>
                <GuestForm />
            </section>
            <section>
                <GuestList />
            </section>
        </div>
    );
};

export default Guests;
