import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import { reqtest } from '@/api/index'

const state = {
    aComicData: {},
    mockData:{},
}
const mutations = {
    GETACOMICDATA(state, value) {
        state.aComicData = value
    },
    SETMOCKDATA(state, value){
        state.mockData = value
    }
}
const actions = {
    DCsend(context, value) {
        context.commit('GETACOMICDATA', value)
    },
    mock123(context, value){
        context.commit('SETMOCKDATA', value)
    }
   
   

}
const getters = {
    GGData(state) {

        const files = state.mockData.files;
        const imageFiles = files.keys();
        const fileData = []
        imageFiles.forEach((file) => {
            const filePath = files(file);
            const fileName = file.split("/").pop();
            const uploadtime = state.aComicData.uploadtime;
            fileData.push({ filePath, fileName, uploadtime });
        });
        return fileData
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})