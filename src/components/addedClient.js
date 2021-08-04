import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddTenant } from 'store/companyReducer/actions'
import styled from 'styled-components'
import Button from 'components/common/button'
import Flex from 'components/common/flex'

const AddedClient = ({ addressId }) => {
    const dispatch = useDispatch()

    const [form, setForm] = useState({ name: '', phone: '', email: '' })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        dispatch(fetchAddTenant(form, addressId))
        setForm({ name: '', phone: '', email: '' })
        e.stopPropagation()
    }



    return (
        <Flex justify="center" align="flex-start" direction="row" margin="0">
            <Flex direction="column" align="center" margin="5px">
                <StyledLabel htmlFor="name">Имя</StyledLabel>
                <Input onChange={changeHandler} value={form.name} name="name" placeholder="введите name" id="name" />
            </Flex>
            <Flex direction="column" align="center" margin="5px">
                <StyledLabel htmlFor="phone">Телфон</StyledLabel>
                <Input onChange={changeHandler} value={form.phone} name="phone" placeholder="введите телфон" id="phone" />
            </Flex>
            <Flex direction="column" align="center" margin="5px">
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <Input onChange={changeHandler} value={form.email} name="email" placeholder="введите email" id="email" />
            </Flex>
            <Button padding="5px" onClick={onSubmit}>Add Client</Button>
        </Flex>
    )
}
export default AddedClient

const StyledLabel = styled.label`
padding:0 5px
`

const Input = (props) => {
    return (
        <input onClick={e => e.stopPropagation()} {...props} />
    )
}