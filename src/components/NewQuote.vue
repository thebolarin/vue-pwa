<template>
    <div class="row">
       <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Diary</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
               <button class="btn btn-primary" @click.prevent="createNew">Add</button>
            </div>
        </form>
      
    </div>
</template>

<script>

export default {
    data:function(){
        return{
            // to which we are binding with the use of v-model on the text-area
            quote:''
        };
    },
    methods:{
        createNew(){
            //this.$emet (data passed to the app.vue, new quote which was added)
            this.$emit('quoteAdded', this.quote);
            this.quote='';
        }
    }
}
</script>

<style scoped>

</style>