import Companies from 'components/companies'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageContainer from 'components/pageContainer'
import { fetchData } from 'store/companyReducer/actions'
import { Container } from 'components/common/container'

function App() {
  const dispatch = useDispatch()
  const onLoadCompany = useCallback(fetchData, [])
  useEffect(() => {
    dispatch(onLoadCompany())

  }, [onLoadCompany, dispatch])

  return (
    <Container>
      <Companies />
      <PageContainer />
    </Container>
  )
}

export default App;
