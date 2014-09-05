/**
 * Created by zhangchi on 2014/9/4.
 */
var SlotDataProxy  = Proxy.extend({

    _betLines:null,
    _coinSize:null,
    _lastSpinResult:{},
    ctor:function(name)
    {
        this._super(SlotDataProxy.NAME);
        this._betLines = 1;
        this._coinSize = 0;
    }
})

SlotDataProxy.NAME="SlotDataProxy";