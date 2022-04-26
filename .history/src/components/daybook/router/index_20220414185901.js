

export default{
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/components/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "NoEntry" */ '../views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: ()=> import(/* webpackChunkName: "Entry" */ '../views/EntryView.vue'),
            props: ( route ) =>{
                return {
                    id: route.params.id
                }
            }
        },
        
    ]
}