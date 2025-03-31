import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"  text="Reach out today and let’s talk!" {...restProps}>
            We are hiring
        </NextPage>
    );
}

export default NextPageContent;