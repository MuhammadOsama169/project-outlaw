import styled from "styled-components";
import Img1 from "../../../assets/images/BA_Nonprofit_cover.png";
import Img2 from "../../../assets/images/BrandOutlaw_Discount.png";
import Img3 from "../../../assets/images/What_Great_Brands_Do.png";




export const MainContainer = styled.section`
    width:100%;
margin-top:50px;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column ;
        height:auto;
    }
`;
export const InnerContainer = styled.div`
    margin:auto;
    max-width:1088px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top:3%;
    padding-bottom:5%;

    @media screen and (max-width: 900px) {
        padding-top:0.1%;
        padding-bottom:0.1%;
        display: flex;
        flex-direction: column ;
        padding-left:0px;
        padding-right:0px;
    }
`;


export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 77px;
    text-transform: uppercase;
    color: #FF005C;
    padding: 20px; 
    @media screen and (max-width: 900px) {
        font-weight: 500;
        font-size: 60px;
        padding: 10px; 
    }

`;
export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr) ;
grid-gap: 100px;

@media screen and (max-width: 900px) {
    grid-template-columns: none ;
    grid-auto-rows: repeat(3,25%) ;
    max-width:400px;
}
`;
export const Cards = styled.div`
border: 1px solid #d8d8d8;
padding-bottom:20px;
&:hover {
    transform: scale(0.98);
    transition: .5s;
    box-shadow: 0 10px 20px #FF005C;
    
  }
`;
export const ImageContainer1 = styled.div`
    background-image: url(${Img1});
    background-size:contain;
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 900px) {
        width:450px ;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        @media screen and (max-width: 600px) {
        width:350px ;
        height: 200px;
    }
`;
export const ImageContainer2 = styled.div`
    background-image: url(${Img2});
    background-size:contain;
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    @media screen and (max-width: 900px) {
        width:450px ;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 600px) {
        width:350px ;
        height: 200px;
    }
`;
export const ImageContainer3 = styled.div`
    background-image: url(${Img3});
    background-size:contain;
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    @media screen and (max-width: 900px) {
        width:450px ;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 600px) {
        width:350px ;
        height: 200px;
    }
`;

export const TextHeading = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 1.5;
color: dark-grey;
padding: 10px; 
@media screen and (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
color: #666666;
padding: 10px; 
@media screen and (max-width: 900px) {

    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
export const LinkText = styled.a`
font-family: 'Work Sans', sans-serif;
font-weight: 600;
text-transform: uppercase;
font-size: 15px;
color: #FF005C;
padding: 10px;
cursor:pointer;
text-decoration:none; 
`