import React from "react";

import Layout from "@components/Layout";

import Home from "./Home";

async function action() {
    return {
        title: "Typescript React Starter Kit",
        chunks: ["home"],
        component: (
            <Layout fullWidth>
                <Home />
            </Layout>
        ),
    };
}

export default action;
