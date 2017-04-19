"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./android-iosswitch.common");
global.moduleMerge(common, exports);
var switchView = vn.luongvo.widget.iosswitchview.SwitchView;
var AndroidIosSwitch = (function (_super) {
    __extends(AndroidIosSwitch, _super);
    function AndroidIosSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AndroidIosSwitch.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidIosSwitch.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    AndroidIosSwitch.prototype._createUI = function () {
        var that = new WeakRef(this);
        var that1 = this;
        this._android = new switchView(this._context);
    };
    AndroidIosSwitch.prototype.isChecked = function () {
        var checkedValue = this._android.isChecked();
        console.log(checkedValue);
        return checkedValue;
    };
    AndroidIosSwitch.prototype.setChecked = function (value) {
        var val = value;
        this._android.setChecked(val);
    };
    AndroidIosSwitch.prototype.toggleSwitch = function (value) {
        var val = value;
        this._android.toggle(val);
    };
    return AndroidIosSwitch;
}(common.AndroidIosSwitch));
exports.AndroidIosSwitch = AndroidIosSwitch;
//# sourceMappingURL=android-iosswitch.android.js.map