import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"  text="Dare and contact us immediately!" {...restProps}>
            We are hiring
        </NextPage>
    );
}

export default NextPageContent;