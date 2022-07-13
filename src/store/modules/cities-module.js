import axios from "axios";
import service from '@/store/services/cities-service';

export default ({
    namespaced: true,
    state() {
        return {
            cities: null,
            currentCity: localStorage.getItem("currentCity") ?? null

        }
    },
    getters: {
        stateCities(state) {
            return state.cities
        },
        getCurrentCity(state){
            return state.currentCity
        }
    },
    actions: {
      async getCities({state, commit, rootState}){
          return await service.get().then( cities => { state.cities = cities }).catch( error => console.log(error.response) )
      }
    }

});