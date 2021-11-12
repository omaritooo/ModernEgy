import axios from 'axios';
 export const state = () => ({
    data: [],
    form: {
        email: '',
company_name: '',
phone: '',
note: ''

    },
    loading: true,
    id: '24',
    city: [],
    url: 'https://modernegy.adgroup.tech/api/v1/cities/',
    center: [29.9871591, 31.7182112]
  })
  

  export const actions = {
    getData({commit}){
        axios.get('https://modernegy.adgroup.tech/api/v1/cities').then(response => {
            commit('SET_DATA', response.data.data)
       });

    },
    getCity({commit}, payload){
        console.log(getters.getID)
        
        axios.get(`https://modernegy.adgroup.tech/api/v1/cities/of/${payload}`).then(response => {
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
    loaderON(state){
      state.loading = true;
    },
    loaderOFF(state){
      state.loading = false;
    },
    SET_CITY(state, city){
        state.city = city;
    },
 
    SET_ID(state, id)
    {
        state.id = id;
    },
    SET_CENTER(state, center)
    {
      state.center = center;
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
        
        return state.id},
        getCenter(state)
        {return state.center;
        }
  }


