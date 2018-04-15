/**
 * Created by flp on 2018/4/12.
 */
import indexModel from '../models/indexModel'
const indexController = {
    index(){
        return async (ctx, next) => {
            ctx.body = await ctx.render('index.html', {
                title: "首页-index"
            })
        }
    },
    addition(){
        return async (ctx, next) => {
            const indexMode_=new indexModel();
            ctx.body = await indexMode_.addition();
        }
    }
};

export default indexController;