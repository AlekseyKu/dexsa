// src\components\brand\Brand.jsx
import React from "react";
import styled from "styled-components";
import AnimatedLogo from "../animated-logo/AnimatedLogo";

const MainBrand = styled.div`
    .animated-logo {
        width: 100%;
        height: auto;
        line-height: normal; // Для выравнивания по высоте
        display: inline-flex;
        align-items: center;
    }
`;

// width: ${props => props.width};
// height: ${props => props.height};
// line-height: ${props => props.height}; // Для выравнивания по высоте

const Brand = ({ width, height, alt }) => {
    return (
        <MainBrand className="main-brand" width={width} height={height}>
            <AnimatedLogo />
        </MainBrand>
    );
};

MainBrand.defaultProps = { width: '100%', height: 'auto' };
Brand.defaultProps = { alt: "DEXSA" };

export default React.memo(Brand);


// // src\components\brand\Brand.jsx
// import React from "react";
// import styled from "styled-components";
// import brandLight from './logo-dexsa-w.png';
// import brandDark from './logo-dexsa-w.png';

// const MainBrand = styled.div`
//    img{
//     width : ${props => props.width};
//     max-width: 100%;
//     height: ${props => props.height};
//    }
//    .v-light & , & {
//         .logo-dark{
//            display : block ;     
//         }
//         .logo-light{
//             display : none;    
//         }
//    }
    
//    .v-dark & {
//        .logo-dark{
//            display : none ;     
//         }
//         .logo-light{
//             display : block;    
//         }
//    }
   
// `;

// const Brand = ({width, height, alt}) => {
//     return (
//         <MainBrand className="main-brand" width={width} height={height}>
//             <img className="logo-light" src={brandLight} alt={`${alt} - logo light`} width={width} height={height}/>
//             <img className="logo-dark" src={brandDark} alt={`${alt} - logo dark`} width={width} height={height}/>
//         </MainBrand>
//     );
// }

// MainBrand.defaultProps = {width: '80px', height: 'auto'}
// Brand.defaultProps = {alt: "DEXSA"}

// export default React.memo(Brand);