/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from "react";
import renderer from "react-test-renderer";
import createApolloClient from "../../data/createApolloClient/createApolloClient.server";
import App from "../App";

import Layout from ".";

describe("Layout", () => {
    test("renders children correctly", () => {
        const client = createApolloClient({} as any, {} as any);

        const wrapper = renderer
            .create(
                <App
                    context={{
                        pathname: "",
                        query: {},
                    }}
                    insertCss={() => {}}
                    client={client}
                >
                    <Layout>
                        <div className="child" />
                    </Layout>
                </App>,
            )
            .toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});
