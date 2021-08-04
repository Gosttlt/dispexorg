import styled from 'styled-components'
import Button from 'components/common/button'
import Flex from 'components/common/flex'
import { useMemo } from 'react'

const CardClient = ({ deleteClientHandler, clients }) => {
    const clientsArr = useMemo(() => [...clients].reverse(), [clients])
    const newClientArr = useMemo(() => {
        return (clientsArr.map(c => {
            return <Button width="20%" key={c.id}>
                <Flex justify="center" align="center" direction="column">
                    <Flex direction="column">
                        <RowClient>
                            id:{c.id}
                        </RowClient>
                        <RowClient>
                            ФИО:{c.name}
                        </RowClient>
                        <RowClient>
                            Телефон:{c.phone}
                        </RowClient>
                        <RowClient>
                            Email:{c.email}
                        </RowClient>
                    </Flex>
                    <Button padding="3px 5px" onClick={(e) => deleteClientHandler(e, c.bindId)}>Delete</Button>
                </Flex>
            </Button>
        }))
    }, [clientsArr, deleteClientHandler])


    return (
        <>
            {newClientArr}
        </>
    )
}


const RowClient = styled.div`
padding:5px 0;
`

export default CardClient