import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentCompany } from 'store/companyReducer/actions'
import { getCompanies } from 'store/companyReducer/selectors'
import Button from 'components/common/button'
import Flex from 'components/common/flex'

const Companies = () => {
    const dispatch = useDispatch()
    const [isActive, setActive] = useState(89)
    const companies = useSelector(getCompanies)
    const onSetCurrentCompany = (companyId) => {
        setActive(companyId)
        dispatch(fetchCurrentCompany(companyId))
    }
    return (
        <Flex>
            {companies.map(c => <Button active={isActive === c.id} onClick={() => onSetCurrentCompany(c.id)} key={c.id}>{c.name}</Button>)}
        </Flex>
    )
}


export default Companies