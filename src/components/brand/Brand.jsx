import React from "react";
import styled from "styled-components";
import brandLight from './logo.png';
import brandDark from './logo-dark.png';

const MainBrand = styled.div`
   img{
    width : ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
   }
   .v-light & , & {
        .logo-dark{
           display : block ;     
        }
        .logo-light{
            display : none;    
        }
   }
    
   .v-dark & {
       .logo-dark{
           display : none ;     
        }
        .logo-light{
            display : block;    
        }
   }
   
`;

const Brand = ({width, height, alt}) => {
    return (
        <MainBrand className="main-brand" width={width} height={height}>
            <img className="logo-light" src={brandLight} alt={`${alt} - logo light`} width={width} height={height}/>
            <img className="logo-dark" src={brandDark} alt={`${alt} - logo dark`} width={width} height={height}/>
        </MainBrand>
    );
}

MainBrand.defaultProps = {width: '80px', height: 'auto'}
Brand.defaultProps = {alt: "Droow"}

export default React.memo(Brand);