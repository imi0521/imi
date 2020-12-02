<script>
import Content from "./content.vue"
export default {
    name:"Tabs",
    data(){
        return{
            spans:[]
        }
    },
    components:{
        Content
    },
    props:{
        currentIndex:{
            type:[String,Number],
            default:"1"
        }
    },
    // mounted(){
    //     this.spans.push(this.$slots.default);
    // },
    methods:{
        updateDefaultIndex(index){
            this.$emit("onChangeActive",index)
        }
    },
    render(){
        return(
            <div>
                <ul class='tabs-header'>{ this.$slots.default }</ul>
                <Content spans={ this.spans }/>
            </div>
        )
    }
}
</script>
<style scoped>

.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}

</style>