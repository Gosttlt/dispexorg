import styled from "styled-components"

const CatBox = (props) => {
    return (
        <StyledCatBox {...props} />
    )
}

export default CatBox

const StyledCatBox = styled.div`
display:${props => props.display || 'none'} ;
flex-direction: column;
`
