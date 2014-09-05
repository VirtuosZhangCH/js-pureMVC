/**
 * Created by zhangchi on 2014/9/5.
 */
var SlotGameViewMediator=AbstractSlotComponentMediator.extend({
    _view:null,
    _slotDataProxy:SlotDataProxy,
    ctor:function(viewComponent)
    {
        this._super("ComponentTypes_MAIN_VIEW",viewComponent);
        this._view=viewComponent;
    },

    onRegister:function()
    {
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        cc.log("VIEW IS:", this._view);
    }
})