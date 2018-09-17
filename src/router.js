import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
// SingleView
const SingleView = () => import ('@/views/SingleView/SingleView.vue')
// SubMenu
const SubMenu = () => import ('@/views/SubMenu/SubMenu.vue')
const MapsGoogle = () => import('@/views/Maps/MapsGoogle.vue')
const UsuarioListagem = () => import('@/views/Usuario/UsuarioListagem.vue')
const UsuarioCadastro = () => import('@/views/Usuario/UsuarioCadastro.vue')
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/dashboardv1'
        },
        // Admin Pages
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/dashboardv1',
                    component: MapsGoogle
                },
                {
                    component: MapsGoogle,
                    path: '/map-google',
                },
                {
                    path: '/singleview',
                    component: SingleView
                }, {
                    path: '/submenu',
                    component: SubMenu
                }, {
                    path: '/usuario',
                    component: UsuarioListagem
                },
                {
                    path: '/usuario-cadastro',
                    component: UsuarioCadastro
                }
            ]
        },
        // Not found route
        {
            path: '*',
            redirect: '/'
        }
    ]
})