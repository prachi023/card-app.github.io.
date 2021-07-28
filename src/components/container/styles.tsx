import styled from 'styled-components';

export const StyledList = styled.div`
    flex: 1 1 auto;
    margin: 25px 25px 0 0;
`;

export const StyledHeader = styled.div`
    background-color: ${(props => props.color)};
    color: #fff;
    text-align: center;
    height: 35px;
    line-height: 35px;
`;

export const Wrapper = styled.div`
    font-family: 'sans-serif';
    width: calc(100% - 25px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 25px;
    text-align: left;
`;

export const StyledButton = styled.button`
    margin-top: 8px;
    cursor: pointer;
`;

export const StyledHeading = styled.h2`
    font-size: 20px;
    font-family: 'sans-serif';
`;

export const StyledFooter = styled.div`
    text-align: center;
`;

export const StyledConfirmButton = styled.button`
    // background-color: transparent;
    // border-color: transparent;
    margin: 25px;
    width: 100px;
    height: 35px;
    font-size: 18px;
    font-family: 'sans-serif';
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
    &:hover {
        1px solid rgb(0,123,255,0.5)
    }
    border: transparent;
    border-radius: 2px;
    cursor: pointer;
`;

export const StyledInput = styled.input`
    display: inline-block;
    margin: 0 10px;
    height: 25px;
`;

export const StyledLabel = styled.label`
    font-size: 14px;
    font-family: sans-serif;
    padding-top: 8px;
    display: inline-block;
`;
