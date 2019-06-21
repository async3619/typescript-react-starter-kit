/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import WidthWrapper from "../WidthWrapper/width-wrapper";

import s from "./Header.scss";

const Header = () => {
    useStyles(s);

    return (
        <div className={s.root}>
            <WidthWrapper>
                <h1 className={s.title}>Typescript React Starter Kit</h1>
            </WidthWrapper>
        </div>
    );
};

export default Header;
