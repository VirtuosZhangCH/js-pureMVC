/**
 * Created by zhangchi on 2014/9/5.
 */
var testControlBarLayer=cc.Layer.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {
        this._super();
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                //ss.release();
                this.sigOnClick.dispatch(null);
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: 50,
            y: 20
            //anchorX: 0.5,
            //anchorY: 0.5
        });
    }
})