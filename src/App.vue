<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <!-- listening to the emit from the newQuote component -->
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted = "deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text center">
                    <div class="alert alert-info">
                        Click on a topic to delete it 
                    </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';
    export default {
        data: function(){
            return{
                quotes:[
                    'Just a quote to see cum'
                ],
                maxQuotes:10
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Maximum number of quotes reached')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                if( confirm('Do you wish to continue this action?')){
                        this.quotes.splice(index , 1);
                }
               
               
            }
        },
        components:{
            appQuoteGrid:QuoteGrid,
            appNewQuote:NewQuote,
            appHeader:Header
        }
    }
</script>

<style>
</style>
