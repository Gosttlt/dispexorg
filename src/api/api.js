import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://dispex.org/api/vtest/',
});


export const companiesAPI = {
    async getData(name) {
        let data = await instance.get(`request/${name}`)
        return data.data
    },
    async getCurrentCompany(query, id) {
        let data = await instance.get(`HousingStock?${query}=${id}`)
        return data.data
    },
    async addTenant(Name, Phone, Email) {
        let data = await instance.post(`HousingStock/client`, { Name, Phone, Email })
        return data.data
    },
    async bindTenant(AddressId, ClientId) {
        let data = await instance.put(`/HousingStock/bind_client`, { AddressId, ClientId })
        return data.data
    },
    async deleteTenant(BindId) {
        let data = await instance.delete(`/HousingStock/bind_client/${BindId}`)
        return data.data
    },


}










// async getClient() {
//     let data = await instance.get('HousingStock/client?phone=9829168860')
//     return data.data
// },
// async deleteClient() {
//     let data = await instance.delete('/HousingStock/bind_client/32348')
//     return data.data
// },
// async setClient() {
//     let data = await instance.post('HousingStock/client', {
//         "Name": "firstName",
//         "Phone": "892721004931",
//         "Email": "Gosttlt@ya.ru",
//     })
//     return data.data
// },
// async bindClient1() {
//     let data = await instance.put('HousingStock/client', {
//         "AddressId": 1,
//         "ClientId": 33618,
//     })
//     return data.data
// },
// async bindClient() {
//     let data = await fetch('https://dispex.org/api/vtest/HousingStock/bind_client', {
//         method: 'PUT',
//         body: {
//             "AddressId": 343653,
//             "ClientId": 33618,
//         }
//     })
//     return data

// },