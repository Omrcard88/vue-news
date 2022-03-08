<template>
   <div>
        
        <p v-for="item in askItems">
            <a v-bind:href="item.url">
                {{ item.title}}
            </a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
      
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default{
    computed:{
        ...mapGetters({
            askItems: 'fetchedAsk'
        })
        // ...mapState({
        //     ask:state => state.ask
        // })
        // ask(){
        //     return this.$store.state.ask;
        // }
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

<style>

</style>
