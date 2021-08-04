import styled from 'styled-components'


export const Container = (props) => {
    return (
        <StyledContainer {...props} />
    )
}
const StyledContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
`
