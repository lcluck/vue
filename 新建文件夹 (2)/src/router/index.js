import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '../components/movie'
import Cinema from '../components/cinema'
import MovieBuy from '../components/movieBuy'
import Login from '../components/login'
import Register from '../components/register'
import Detail from '../components/detail'
import Search from '../components/search'
import Nowplaying from '../components/nowplaying'
import Commingsoon from '../components/commingsoon'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
   
       {
      path:"/movie",
      component:Movie,
      children:[
      {
       path:"/search",
       component:Search
           },
        
        {
          path:"nowplaying", 
          component:Nowplaying
        },
        {
          path:"commingsoon",
          component:Commingsoon
        },
        {
          path:"/movie",
          redirect:"/movie/nowplaying"
        }
      ]
    },
    {
      path:"/cinema",
      component:Cinema
     },
     {
        path:"/login",
        component:Login
      },
      {
        path:"/register",
        component:Register
       },
       
        {
      path:"*",
      redirect:"/movie"
    },
       
    {
      path:"/detail/:id", //动态路由
      component:Detail
    },    

    {
      path:"/movieBuy/:id", //动态路由
      component:MovieBuy
    },
     
  ]
})
