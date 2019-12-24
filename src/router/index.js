import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import vip from '@/pages/vip/vip'
import worry from '@/pages/worry/worry'
import news from '@/pages/news/news'
import my from "../pages/my/my";
import gushi from "../pages/worry/gushi";
import setting from "../pages/my/setting";


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
      children: [
        {
          path: '/worry/gushi',
          name: 'gushi',
          component: gushi
        }
        ]
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
      path: '/setting',
      name: 'setting',
      component:setting
    }
	]
})
