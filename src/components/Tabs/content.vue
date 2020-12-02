<script>
export default {
    name:'Content',
    props:{
        spans:{
            type:Array,
            default:function(){
                return[]
            }
        }
    },
    render(){
        return(
            <div>
                {
                    this.spans.map((element,index) =>{
                        return <div>{ element.isActive ? element.$slots.default : '' }</div>
                    })
                }
            </div>
        )
    }
}
// element -> tab组件
/**
 * 
 *  <tab index="1" label="标签1">
        <div>
            <h3>我是标题</h3>
            <p>我是文本</p>
        </div>
    </tab>
 * 
 */
</script>

