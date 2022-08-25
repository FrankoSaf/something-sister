import styled from "styled-components";
const headShot = require("../../assets/pexels-cottonbro-3826676.jpg")

export const HeadShotContainer = styled.div`
    margin: 0px 10px 0px 25px;
    width: 100%;
    height: 600px;background-image: url(${headShot});    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;