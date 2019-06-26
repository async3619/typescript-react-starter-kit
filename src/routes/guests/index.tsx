import React from "react";

import Layout from "@components/Layout";
import WidthWrapper from "@components/WidthWrapper";

import Guests from "./Guests";

async function action() {
    return {
        title: "Guests",
        chunks: ["guests"],
        component: (
            <Layout fullWidth>
                <WidthWrapper>
                    <Guests />
                </WidthWrapper>
            </Layout>
        ),
    };
}

export default action;
