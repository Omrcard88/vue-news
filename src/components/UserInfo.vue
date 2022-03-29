<template>
    <div>
       <p>name : {{ userInfo.id}}</p>
       <p>karma : {{ userInfo.karma}}</p>
       <p>created : {{ userInfo.created}}</p>
       
    </div>
</template>
<script>




export default{
    data(){
        return{
            

        }
    },
    created(){
        
        //const name = this.$route.name;
        const path = this.$route.path.split('/')[1];
        let userName ;
        if(path ==='user'){
            userName = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', userName);
        }else if(path ==='my'){
            userName = 'davideast';
         

            this.$store.dispatch('FETCH_USER', userName);
        }


        //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
        
    
    },
    computed:{
        userInfo(){
            const name = this.$route.name;
            if(name ==='my'){
                //    return this.$store.state.myInfo;
                return {'id': '진태우', 'karma' : '999', 'created': '2022.03.30' };
            }
            else if(name ==='user'){
                return this.$store.state.user;
            }
        }
    }
}

</script>

<style>
</style>
