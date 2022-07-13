import { createStore } from 'vuex'
import modal from "./modal";
import cities from "@/store/modules/cities-module";

export default createStore({
    modules: {
        modal,
        cities
    },
    state() {
        return {
            apiUrl: 'http://api.home/api/v1'
        }
    },
    getters: {
        stateApiUrl(state){
            return state.apiUrl
        }
    },
    mutations: {},
    actions: {}
});