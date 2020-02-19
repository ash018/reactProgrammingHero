import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--white);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--white)"};
    border-radius:0.5rem;
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--white)"};
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    
    &:focus {
        outline: none;
    }
`;

export const ButtonContainerBlue = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--blue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--blue)"};
    border-radius:0.5rem;
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--blue)"};
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    
    &:focus {
        outline: none;
    }
`;