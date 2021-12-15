import axios from "axios";

export const getUsers = {
    async fetchData (x) {
        const {data} = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${x}/20`)
        return data
    },
   async fetUserid ( id) {
       const {data} = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
       return data
   }
    // async LoginApi(dto: loginUserDto) {
    //     const {data} = await instance.post<loginUserDto,{data: ResponseUserDto}>('/auth/login', dto)
    //     return data
    //
    // },
    // async getMe() {
    //     const {data} = await instance.get<ResponseUserDto>('/users/me')
    //     return data
    // }
}