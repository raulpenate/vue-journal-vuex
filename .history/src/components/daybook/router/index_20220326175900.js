

export default{
    path: '/Daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/components/daybook/layouts/DayBookLayout.vue'),
    children: [
        
    ]
}