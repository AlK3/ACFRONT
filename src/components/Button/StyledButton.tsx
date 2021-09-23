import styled from 'styled-components';

export const StyledButton = styled.button`
    & {
        font-size: 100%;
        font-family: inherit;
        padding: 0.15em 0.25em;
        margin: 0.1em 0.1em;
        background-color: #fff;
        border: 2px solid #001D50;
        border-radius: 4px;
        background-color: #EFEFEF;
        color: ${props => props.color};
    }
    &:focus {
        border-color: #FFEF00;
        outline: 3px solid transparent;
    }
`;