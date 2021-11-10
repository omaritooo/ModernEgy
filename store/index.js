import axios from 'axios'
 export const state = () => ({
    data: [],
    form: {
        email: '',
company_name: '',
phone: '',
note: ''

    },
    id: '',
    city: [],
    url: 'https://modernegy.adgroup.tech/api/v1/cities/'
  })
  

  export const actions = {
    getData({commit}){
        axios.get('https://modernegy.adgroup.tech/api/v1/cities').then(response => {
            commit('SET_DATA', response.data.data)
       });

    },
    getCity({commit, getters}){
        console.log(getters.getID)
        
        axios.get(`https://modernegy.adgroup.tech/api/v1/cities/${getters.getID}`).then(response => {
            commit('SET_CITY', response.data.data)
            
       });

    },
    loginUser(context){
        context.commit("FORM")
    }
  }
  
  export const mutations = {
    SET_DATA(state, data){
      state.data = data;
    },
    SET_CITY(state, city){
        state.city = city;
    },
 
   async SET_ID(state, id)
    {
        state.id = id;
    },
    SET_URL(state, id, url){
        
    }
  }
  
  export const getters = {
      myGetter(state){ return state.data},
      cityGetter(state){
          console.log(state.url)
        return state.city},
      getFormDetails(state)
      {
          return state.form.email;
      },
     getID(state){
        
        return state.id}
  }


