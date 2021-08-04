import Flex from 'components/common/flex'
import AddedClient from './addedClient'
import CatBox from 'components/common/catBox'
import Button from 'components/common/button'
import React, { useMemo } from 'react'
import CollIcon from 'components/common/collIcon'
import styled from 'styled-components'


const Flat = ({ houseId, company, flatBoxShow, collapseHandler, userBoxShow, setUserBoxShow, children }) => {
    const flatsArr = useMemo(() => company.filter(flat => flat.houseId === houseId), [company, houseId])
    const flats = useMemo(() => (flatsArr.map(flat => {
        return <React.Fragment key={flat.addressId}>
            <CatBox key={flat.addressId} display={flatBoxShow.some(el => el === houseId) ? 'flex' : ''} >
                <Button margin="2px 10px 5px 200px" padding="8px" onClick={() => collapseHandler(flat.addressId, userBoxShow, setUserBoxShow)}>
                    <Flex justify="center" align="center">
                        Квартира: {flat.flat}  Жителей: {flat.clients.length}<CollIcon items={userBoxShow} id={flat.addressId} />
                        <AddedClient addressId={flat.addressId} />
                    </Flex>
                </Button>
            </CatBox>
            <StyledUsersBox display={userBoxShow.some(el => el === flat.addressId) ? 'flex' : ''}>
                {React.Children.map(children, child => React.cloneElement(child, { clients: flat.clients }))}
            </StyledUsersBox>
        </React.Fragment>
    })), [flatBoxShow, collapseHandler, flatsArr, setUserBoxShow, userBoxShow, children, houseId])

    return (
        <>
            {flats}
        </>
    )
}

const StyledUsersBox = styled.div`
display:${props => props.display || 'none'} ;
flex-wrap: wrap;
justify-content: flex-start;
margin-left: 200px;
`




export default Flat