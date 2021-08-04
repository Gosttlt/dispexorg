import { createSelector } from 'reselect'

export const getCompanies = state => state.companyReducer.companies
export const getLoaderFlag = state => state.companyReducer.isLoading
export const getCurrentCompany = state => state.companyReducer.currentCompany
export const getStreets = createSelector(getCurrentCompany, companies => {
    let id = companies.map(el => el.streetId).filter((item, index, arr) => index === arr.indexOf(item))
    let arrItems = id.map(item => companies.find(el => el.streetId === item))
    return arrItems
})
export const getBuilding = createSelector(getCurrentCompany, companies => {
    let id = companies.map(el => el.houseId).filter((item, index, arr) => index === arr.indexOf(item))
    let arrItems = id.map(item => companies.find(el => el.houseId === item))
    return arrItems
})
