<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">
                         {{fetchedItem.user}}                       
                    </router-link>
                    <div class="time">
                    {{fetchedItem.time_ago}}
                </div>
                </div>
                
                
            </div>
            <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
            <div v-html="fetchedItem.content">
                
            </div>

        </section>
    </div>
</template>
<script>

import {mapGetters}  from 'vuex';


export default{
    data(){
        return{
    
        }
    },
    created(){
        
        const itemId = this.$route.params.id;
        //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
        this.$store.dispatch('FETCH_ITEM', itemId);
    
    },
    computed:{
       
        ...mapGetters(['fetchedItem']),
        
    }
}

</script>

<style scoped>
    .user-container{
        display:flex;
        align-items:center;
    }
    .fa-user{
        font-size: 2.5rem;
    }
    .user-description{
       padding-left:8px; 
    }
    .time{
        font-size: 0.7rem;
    }
</style>
