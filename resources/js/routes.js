import _404Component from './components/404Component.vue';

// WEB

import WebComponent from './components/web/WebComponent.vue';
import WebAuthLoginComponent from './components/web/auth/login/LoginComponent.vue';
import WebAuthRegisterComponent from './components/web/auth/register/RegisterComponent.vue';
import WebAuthForgotPasswordComponent from './components/web/auth/forgotPassword/ForgotPasswordComponent.vue';
import WebIndexComponent from './components/web/index/IndexComponent.vue';
import WebProfileComponent from './components/web/profile/ProfileComponent.vue';

// ADMIN

import AdminAuthLoginComponent from './components/admin/auth/login/LoginComponent.vue';
import AdminAuthRegisterComponent from './components/admin/auth/register/RegisterComponent.vue';
import AdminHomeComponent from './components/admin/home/HomeComponent.vue';
import AdminIndexComponent from './components/admin/index/IndexComponent.vue';

const routes = [
    // WEB PAGES
    {
        name: 'Web',
        path: '/',
        component: WebComponent,
        children: [
            {
                name: 'Index',
                path: '',
                component: WebIndexComponent
            },
            {
                name: 'Login',
                path: 'login',
                component: WebAuthLoginComponent        
            },
            {
                name: 'Register',
                path: 'register',
                component: WebAuthRegisterComponent        
            },
            {
                name: 'ForgotPassword',
                path: 'forgot_password',
                component: WebAuthForgotPasswordComponent        
            },
            {
                name: 'Profile',
                path: 'profile',
                component: WebProfileComponent,
                meta: { 
                    requiresAuth: true
                }
            }
        ]
    },

    // ADMIN PAGES
    {
        path: '/admin',
        component: {
            render (c) { return c('router-view') }
        },
        children: [
            {
                name: 'AdminIndex',
                path: '',
                component: AdminIndexComponent
            },
            {
                name: 'AdminLogin',
                path: 'login',
                component: AdminAuthLoginComponent
            },
            {
                name: 'AdminRegister',
                path: 'register',
                component: AdminAuthRegisterComponent
            },
            {
                name: 'AdminHome',
                path: 'home',
                component: AdminHomeComponent,
                meta: { 
                    requiresAuth: true
                }
            }
        ]
    },

    // GENERIC PAGES
    {
        path: '/*',
        component: _404Component
    }
];

export default routes;