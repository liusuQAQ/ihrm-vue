/*
 * @Author: 陶峙巍 <taoshiwei@itcast.cn> 
 * @Description: 公司设置 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:13:19
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/recruitment',
    component: Layout,
    redirect: 'noredirect',
    name: 'recruitment',
    meta: {
      title: '招聘管理',
      icon: 'user'
    },
    children: [
      {
        path: 'index',
        component: _import('recruitment/pages/index'),
        name: 'recruitment-index',
        meta: {title: '招聘管理', icon: 'user', noCache: true}
      }
    ]
  }
]
