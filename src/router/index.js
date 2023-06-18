import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import routes from "./routes";

let router = new VueRouter({
    routes, /*字要打正確不能亂取*/
    scrollBehavior(to,from,position){
        if(position){
            return position;
        }else{
            return {x:0,y:0}
        }
    }
})

export default router


