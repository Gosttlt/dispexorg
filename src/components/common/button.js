import styled, { css } from 'styled-components'

const Button = (props) => {
    return (
        <StyledCompany {...props} />
    )
}

const StyledCompany = styled.div`
padding: ${props => props.padding || '10px'};
border-radius: 5px;
margin: ${props => props.margin || '10px'};
box-shadow: 1px 1px 5px 1px #dfdfdf;
cursor: pointer;
border: none;
text-align:center;
width:${props => props.width || 'auto'};
background:${props => props.background || '#fff'};
&:active {
    box-shadow: 1px 1px 5px 1px #eeecec;
    background: #eeecec;
    transition: .3s;
}


${props => props.active && css`
    color: #fff;
    background: #939393;
`}

`
export default Button