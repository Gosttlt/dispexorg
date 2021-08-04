
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeleteTenant } from 'store/companyReducer/actions'
import { getLoaderFlag, getStreets, getBuilding, getCurrentCompany } from 'store/companyReducer/selectors'
import Flex from 'components/common/flex'
import Preloader from 'components/common/preloader'
import Flat from './flat'
import CardClient from './cardClient'
import Building from './building'
import Street from './street'

const PageContainer = () => {
    const dispatch = useDispatch()

    const streets = useSelector(getStreets)
    const buildings = useSelector(getBuilding)
    const company = useSelector(getCurrentCompany)
    const loader = useSelector(getLoaderFlag)

    const [homeBoxShow, setHomeBoxShow] = useState([])
    const [flatBoxShow, setFlatBoxShow] = useState([])
    const [userBoxShow, setUserBoxShow] = useState([])

    const deleteClientHandler = useCallback((e, clientId) => {
        dispatch(fetchDeleteTenant(clientId))
        e.stopPropagation()
    }, [dispatch])

    const collapseHandler = useCallback((id, arrState, setter) => {
        let index = arrState.indexOf(id)
        if (index === -1) {
            return setter([...arrState, id])
        }
        let arr = [...arrState]
        arr.splice(index, 1)
        setter([...arr])
    }, [])

    if (loader) {
        return <Preloader />
    }

    return (
        <Flex direction="column" >
            <Street
                streets={streets}
                collapseHandler={collapseHandler}
                homeBoxShow={homeBoxShow}
                setHomeBoxShow={setHomeBoxShow}>
                <Building
                    buildings={buildings}
                    setFlatBoxShow={setFlatBoxShow}
                    homeBoxShow={homeBoxShow}
                    collapseHandler={collapseHandler}
                    flatBoxShow={flatBoxShow}>
                    <Flat
                        company={company}
                        flatBoxShow={flatBoxShow}
                        collapseHandler={collapseHandler}
                        userBoxShow={userBoxShow}
                        setUserBoxShow={setUserBoxShow}>
                        <CardClient deleteClientHandler={deleteClientHandler} />
                    </Flat>
                </Building>
            </Street>
        </Flex>
    )
}


export default PageContainer




