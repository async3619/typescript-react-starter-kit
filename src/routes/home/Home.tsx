import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import LoremBlock from "@components/LoremBlock";
import WidthWrapper from "@components/WidthWrapper";

import s from "./Home.scss";

const Home = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <section className={s.lorems}>
                <WidthWrapper className={s.wrapper}>
                    <LoremBlock className={s.block} />
                    <LoremBlock className={s.block} />
                    <LoremBlock className={s.block} />
                </WidthWrapper>
            </section>
            <section className={s.right}>
                <WidthWrapper>
                    <h3 className={s.title}>What kind of features this boilerplate have?</h3>
                    <p className={s.paragraph}>
                        Typescript, React, Redux, GraphQL (with Apollo Backend), Type-GraphQL, TypeORM and so on!
                    </p>
                </WidthWrapper>
            </section>
            <section className={s.left}>
                <WidthWrapper>
                    <LoremBlock />
                </WidthWrapper>
            </section>
        </div>
    );
};

export default Home;
