<template>
   <div>
       <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in fetchedAsk" class="post">
                <div class="points">
                    {{item.points}}
                </div>
                <div>
                    <p class="news-title">
                        <router-link v-bind:to="`item/${item.id}`">
                            {{ item.title}}
                        </router-link>
                    </p>                        
                    <small class="link-text">
                        {{item.time_ago}} by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
                    </small>
                    
                </div>
            </li>

        </ul> -->

    </div>
      
</template>

<script>
import ListItem from '../components/ListItem.vue';
import {mapState, mapGetters} from 'vuex';


export default{
  components: { ListItem },
    computed:{
        // ...mapGetters([
        //     'fetchedAsk'
        // ]),
        ListItem
        
    },
    data(){
        return{
            // ask:[]
        }
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
        // var vm = this;

        // fetchAskList()
        //     .then(function(response){console.log(response); vm.ask=response.data})
        //     .catch( function(error){ console.log(error)});
    }
}
</script>

<style scoped>
    /* .news-list{
        margin:0;
        padding:0;
    }
    .post{
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .points{
        width:80px;
        height:60px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#42b883;
    }
    .news-title{
        margin:0;
    }
    .link-text{
        color: #828282;
    } */
</style>
