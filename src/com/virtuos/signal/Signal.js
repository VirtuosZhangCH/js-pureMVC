/**
 * Created by zhangchi on 2014/9/5.
 */
var Signal  = cc.Class.extend({
        func:null,
        ctor:function()
        {

        },
        add:function($fun)
        {
            this.func=$fun;
        },
        dispatch:function($par)
        {
            $par=$par|null;
            this.func.apply(this,[$par]);
        }
})