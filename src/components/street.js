import React, { useMemo } from 'react'
import Button from 'components/common/button'
import CollIcon from 'components/common/collIcon'

const Street = ({ streets, collapseHandler, homeBoxShow, setHomeBoxShow, children }) => {
    const streetArr = useMemo(() => streets.map(street => {
        return <React.Fragment key={street.streetId}>
            <Button onClick={() => collapseHandler(street.streetId, homeBoxShow, setHomeBoxShow)}>
                Улица: {street.streetName}<CollIcon items={homeBoxShow} id={street.streetId} />
            </Button>
            {React.Children.map(children, child => React.cloneElement(child, { streetId: street.streetId }))}
        </React.Fragment>
    }), [homeBoxShow, children, collapseHandler, streets, setHomeBoxShow])
    return (
        <>
            {streetArr}
        </>
    )
}



export default Street