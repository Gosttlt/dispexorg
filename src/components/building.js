import React, { useMemo } from 'react'
import Button from 'components/common/button'
import CatBox from 'components/common/catBox'
import CollIcon from 'components/common/collIcon'


const Building = ({ streetId, buildings, homeBoxShow, collapseHandler, flatBoxShow, setFlatBoxShow, children }) => {
    const newBildings = useMemo(() => {
        const buildingArr = buildings.filter(build => build.streetId === streetId)
        return (buildingArr.map(build => {
            return (
                <React.Fragment key={build.addressId}>
                    <CatBox key={build.houseId} display={homeBoxShow.some(el => el === streetId) ? 'flex' : ''} >
                        <Button margin="2px 10px 5px 100px" padding="8px" onClick={() => collapseHandler(build.houseId, flatBoxShow, setFlatBoxShow)}>
                            Дом: {build.building} {build.corpus && `Корпус: ${build.corpus}`}
                            <CollIcon items={flatBoxShow} id={build.houseId} />
                        </Button>
                    </CatBox>
                    {React.Children.map(children, child => React.cloneElement(child, { houseId: build.houseId }))}
                </React.Fragment>
            )
        }))
    }, [buildings, children, collapseHandler, flatBoxShow, homeBoxShow, setFlatBoxShow, streetId])


    return (
        <>
            {newBildings}
        </>
    )
}
export default Building