<script>
export default {
    name:"Tab",
    props:{
        label:{
            type:String,
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:"1"
        }
    },
    computed:{
        isActive(){
            return this.$parent.currentIndex === this.index
        }
    },
    mounted(){
        this.$parent.spans.push(this); // 3次，3个this  3个自己
    },
    methods:{
        clickTabHandle(){
            this.$parent.updateDefaultIndex(this.index)
        }
    },
    render(){
        var className = {
            tab:true,
            active:this.isActive
        }
        return(
            <li class={ className } onClick={ this.clickTabHandle }>{ this.label }</li>
        )
    }
}
</script>
<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>