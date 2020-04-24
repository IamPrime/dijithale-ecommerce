import styled from 'styled-components';


export const BtnContainer = styled.button`
text-transform: capitalize;
font-family: 'Baloo Thambi 2', cursive !important;
font-size: 1rem;
font-weight: bold;
background: transparent;
border: 0.06rem solid var(--primary-2);
border-color: ${props => 
    props.cart ? "var(--primary-2)" : "var(--primary-2)"};
color: ${prop => 
    prop.cart ?"var(--primary-1)" : "var(--text-color)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => 
        props.cart ? "var(--gradient)" : "var(--mainbg-color)"};
    color: var(--text-color);
    border-color: ${props => 
        props.cart ? "" : "var(--mainbg-color)"};
}
&:focus{
    outline: none;
}
`;