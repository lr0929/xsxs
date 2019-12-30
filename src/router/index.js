import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import vip from '@/pages/vip/vip'
import worry from '@/pages/worry/worry'
import news from '@/pages/news/news'
import my from "../pages/my/my";
import more from "../pages/home/more";
import suggest from "../pages/home/suggest";
import information from "../pages/home/information";
import setting from "../pages/my/setting";
import worrys from "../pages/worry/worrys";
import rain from "../pages/worry/rain";
import story from "../pages/worry/story";
import mood from "../pages/worry/mood"
import help from "../pages/worry/help";

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/vip',
			name: 'vip',
			component: vip
		},
    {
      path: '/worry',
      name: 'worry',
      component: worry,
		},
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
    {
      path: '/suggest',
      name: 'suggest',
      component:suggest
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/worrys',
      name: 'worrys',
      component: worrys
    },
    {
      path: '/rain',
      name: 'rain',
      component: rain
    },
    {
      path: '/story',
      name: 'story',
      component: story
    },
    {
      path: '/mood',
      name: 'mood',
      component: mood
    },
    {
      path: '/help',
      name: 'help',
      component: help
    }
	]
})
