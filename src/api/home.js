import axios from "axios"

export const homeApi = {
    getSpotData: async() => {
      const { data } = await axios.get('/mock/spot')
      return data
    }
  }
