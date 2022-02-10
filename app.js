const app = Vue.createApp({
    data(){
        return{
            firstName: 'Rodrigue',
            lastName: 'Master',
            email: 'Rodmaster@gmail.com',
            phone: '+237 654818785',
            gender: 'male',
            country: 'Cameroon',
            town: 'Random',
            picture: 'https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.6435-1/c0.29.160.160a/p160x160/167133351_153585039983183_887261784521181087_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeERRabBdoknnSL8PkzZmVnkLPEpR5zPC0Es8SlHnM8LQU3hph-fsU1biq5d9SB_qfmbNpg80kK2rT0AIqS1DprL&_nc_ohc=5Gz6lUm5IkIAX8YSJhP&_nc_ht=z-p3-scontent.fdla2-1.fna&oh=00_AT85hhut7JRPgzEErrftwomvBnzIOu2oiXbFeyCVjsfbvw&oe=622B653D',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results) 


            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.phone = results[0].phone
            this.country = results[0].location.country
            this.town = results[0].location.city
        }
    }
})

app.mount('#app')