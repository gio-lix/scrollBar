import axios from "axios";
export const getUsers = {
    async fetchData (x, y) {
        const {data} = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${x}/${y}`)
        return data
    },
    async fetchDUserFriends (userID, page) {
        const {data} = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userID}/friends/${page}/12`)
        return data
    },
   async fetUserid ( id) {
       const {data} = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
       return data
   }

}