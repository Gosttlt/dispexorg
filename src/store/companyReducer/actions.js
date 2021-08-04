import { companiesAPI } from 'api/api'
import { SET_COMPANIES, SET_CURRENT_COMPANY, IS_LOADING, DELETE_TENANT, ADD_TENANT } from './type'

const setCompanies = (data) => ({ type: SET_COMPANIES, data })
const setCurrentCompany = (id) => ({ type: SET_CURRENT_COMPANY, id })
const setLoading = (isLoading) => ({ type: IS_LOADING, isLoading })
const deleteTenant = (id) => ({ type: DELETE_TENANT, id })
const addTenant = (payload) => ({ type: ADD_TENANT, payload })

export const fetchCurrentCompany = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await companiesAPI.getCurrentCompany('companyId', id)
    dispatch(setCurrentCompany(data))
    dispatch(setLoading(false))
}
export const fetchDeleteTenant = (id) => async (dispatch) => {
    await companiesAPI.deleteTenant(id)
    dispatch(deleteTenant(id))
}
export const fetchAddTenant = ({ name, phone, email }, addressId) => async (dispatch) => {
    const data = await companiesAPI.addTenant(name, phone, email)
    await companiesAPI.bindTenant(addressId, data.id)
    dispatch(addTenant({ name, phone, email, id: data.id, addressId }))
}
export const fetchData = () => async (dispatch) => {
    dispatch(setLoading(true))
    const companies = await companiesAPI.getData('companies')
    const currentCompany = await companiesAPI.getCurrentCompany('companyId', 89)
    dispatch(setCompanies(companies))
    dispatch(setCurrentCompany(currentCompany))
    dispatch(setLoading(false))
}
