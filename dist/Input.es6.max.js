var Input;
(function (Input_1) {
    var keyTypes;
    (function (keyTypes) {
        keyTypes[keyTypes["BACKSPACE"] = 8] = "BACKSPACE";
        keyTypes[keyTypes["TAB"] = 9] = "TAB";
        keyTypes[keyTypes["ENTER"] = 13] = "ENTER";
        keyTypes[keyTypes["SHIFT"] = 16] = "SHIFT";
        keyTypes[keyTypes["CTRL"] = 17] = "CTRL";
        keyTypes[keyTypes["ALT"] = 18] = "ALT";
        keyTypes[keyTypes["PAUSE"] = 19] = "PAUSE";
        keyTypes[keyTypes["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        keyTypes[keyTypes["ESCAPE"] = 27] = "ESCAPE";
        keyTypes[keyTypes["SPACE"] = 32] = "SPACE";
        keyTypes[keyTypes["PAGE_UP"] = 33] = "PAGE_UP";
        keyTypes[keyTypes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        keyTypes[keyTypes["END"] = 35] = "END";
        keyTypes[keyTypes["HOME"] = 36] = "HOME";
        keyTypes[keyTypes["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        keyTypes[keyTypes["UP_ARROW"] = 38] = "UP_ARROW";
        keyTypes[keyTypes["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        keyTypes[keyTypes["DOWN_ARROW"] = 40] = "DOWN_ARROW";
        keyTypes[keyTypes["INSERT"] = 45] = "INSERT";
        keyTypes[keyTypes["DELETE"] = 46] = "DELETE";
        keyTypes[keyTypes["KEY_0"] = 48] = "KEY_0";
        keyTypes[keyTypes["KEY_1"] = 49] = "KEY_1";
        keyTypes[keyTypes["KEY_2"] = 50] = "KEY_2";
        keyTypes[keyTypes["KEY_3"] = 51] = "KEY_3";
        keyTypes[keyTypes["KEY_4"] = 52] = "KEY_4";
        keyTypes[keyTypes["KEY_5"] = 53] = "KEY_5";
        keyTypes[keyTypes["KEY_6"] = 54] = "KEY_6";
        keyTypes[keyTypes["KEY_7"] = 55] = "KEY_7";
        keyTypes[keyTypes["KEY_8"] = 56] = "KEY_8";
        keyTypes[keyTypes["KEY_9"] = 57] = "KEY_9";
        keyTypes[keyTypes["KEY_A"] = 65] = "KEY_A";
        keyTypes[keyTypes["KEY_B"] = 66] = "KEY_B";
        keyTypes[keyTypes["KEY_C"] = 67] = "KEY_C";
        keyTypes[keyTypes["KEY_D"] = 68] = "KEY_D";
        keyTypes[keyTypes["KEY_E"] = 69] = "KEY_E";
        keyTypes[keyTypes["KEY_F"] = 70] = "KEY_F";
        keyTypes[keyTypes["KEY_G"] = 71] = "KEY_G";
        keyTypes[keyTypes["KEY_H"] = 72] = "KEY_H";
        keyTypes[keyTypes["KEY_I"] = 73] = "KEY_I";
        keyTypes[keyTypes["KEY_J"] = 74] = "KEY_J";
        keyTypes[keyTypes["KEY_K"] = 75] = "KEY_K";
        keyTypes[keyTypes["KEY_L"] = 76] = "KEY_L";
        keyTypes[keyTypes["KEY_M"] = 77] = "KEY_M";
        keyTypes[keyTypes["KEY_N"] = 78] = "KEY_N";
        keyTypes[keyTypes["KEY_O"] = 79] = "KEY_O";
        keyTypes[keyTypes["KEY_P"] = 80] = "KEY_P";
        keyTypes[keyTypes["KEY_Q"] = 81] = "KEY_Q";
        keyTypes[keyTypes["KEY_R"] = 82] = "KEY_R";
        keyTypes[keyTypes["KEY_S"] = 83] = "KEY_S";
        keyTypes[keyTypes["KEY_T"] = 84] = "KEY_T";
        keyTypes[keyTypes["KEY_U"] = 85] = "KEY_U";
        keyTypes[keyTypes["KEY_V"] = 86] = "KEY_V";
        keyTypes[keyTypes["KEY_W"] = 87] = "KEY_W";
        keyTypes[keyTypes["KEY_X"] = 88] = "KEY_X";
        keyTypes[keyTypes["KEY_Y"] = 89] = "KEY_Y";
        keyTypes[keyTypes["KEY_Z"] = 90] = "KEY_Z";
        keyTypes[keyTypes["LEFT_META"] = 91] = "LEFT_META";
        keyTypes[keyTypes["RIGHT_META"] = 92] = "RIGHT_META";
        keyTypes[keyTypes["SELECT"] = 93] = "SELECT";
        keyTypes[keyTypes["NUMPAD_0"] = 96] = "NUMPAD_0";
        keyTypes[keyTypes["NUMPAD_1"] = 97] = "NUMPAD_1";
        keyTypes[keyTypes["NUMPAD_2"] = 98] = "NUMPAD_2";
        keyTypes[keyTypes["NUMPAD_3"] = 99] = "NUMPAD_3";
        keyTypes[keyTypes["NUMPAD_4"] = 100] = "NUMPAD_4";
        keyTypes[keyTypes["NUMPAD_5"] = 101] = "NUMPAD_5";
        keyTypes[keyTypes["NUMPAD_6"] = 102] = "NUMPAD_6";
        keyTypes[keyTypes["NUMPAD_7"] = 103] = "NUMPAD_7";
        keyTypes[keyTypes["NUMPAD_8"] = 104] = "NUMPAD_8";
        keyTypes[keyTypes["NUMPAD_9"] = 105] = "NUMPAD_9";
        keyTypes[keyTypes["MULTIPLY"] = 106] = "MULTIPLY";
        keyTypes[keyTypes["ADD"] = 107] = "ADD";
        keyTypes[keyTypes["SUBTRACT"] = 109] = "SUBTRACT";
        keyTypes[keyTypes["DECIMAL"] = 110] = "DECIMAL";
        keyTypes[keyTypes["DIVIDE"] = 111] = "DIVIDE";
        keyTypes[keyTypes["F1"] = 112] = "F1";
        keyTypes[keyTypes["F2"] = 113] = "F2";
        keyTypes[keyTypes["F3"] = 114] = "F3";
        keyTypes[keyTypes["F4"] = 115] = "F4";
        keyTypes[keyTypes["F5"] = 116] = "F5";
        keyTypes[keyTypes["F6"] = 117] = "F6";
        keyTypes[keyTypes["F7"] = 118] = "F7";
        keyTypes[keyTypes["F8"] = 119] = "F8";
        keyTypes[keyTypes["F9"] = 120] = "F9";
        keyTypes[keyTypes["F10"] = 121] = "F10";
        keyTypes[keyTypes["F11"] = 122] = "F11";
        keyTypes[keyTypes["F12"] = 123] = "F12";
        keyTypes[keyTypes["NUM_LOCK"] = 144] = "NUM_LOCK";
        keyTypes[keyTypes["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
        keyTypes[keyTypes["SEMICOLON"] = 186] = "SEMICOLON";
        keyTypes[keyTypes["EQUALS"] = 187] = "EQUALS";
        keyTypes[keyTypes["COMMA"] = 188] = "COMMA";
        keyTypes[keyTypes["DASH"] = 189] = "DASH";
        keyTypes[keyTypes["PERIOD"] = 190] = "PERIOD";
        keyTypes[keyTypes["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
        keyTypes[keyTypes["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
        keyTypes[keyTypes["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
        keyTypes[keyTypes["BACK_SLASH"] = 220] = "BACK_SLASH";
        keyTypes[keyTypes["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
        keyTypes[keyTypes["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
    })(keyTypes || (keyTypes = {}));
    var buttonTypes;
    (function (buttonTypes) {
        buttonTypes[buttonTypes["BUTTON_A"] = 0] = "BUTTON_A";
        buttonTypes[buttonTypes["BUTTON_B"] = 1] = "BUTTON_B";
        buttonTypes[buttonTypes["BUTTON_X"] = 2] = "BUTTON_X";
        buttonTypes[buttonTypes["BUTTON_Y"] = 3] = "BUTTON_Y";
        buttonTypes[buttonTypes["LEFT_BUTTON"] = 4] = "LEFT_BUTTON";
        buttonTypes[buttonTypes["RIGHT_BUTTON"] = 5] = "RIGHT_BUTTON";
        buttonTypes[buttonTypes["LEFT_TRIGGER"] = 6] = "LEFT_TRIGGER";
        buttonTypes[buttonTypes["RIGHT_TRIGGER"] = 7] = "RIGHT_TRIGGER";
        buttonTypes[buttonTypes["SELECT"] = 8] = "SELECT";
        buttonTypes[buttonTypes["START"] = 9] = "START";
        buttonTypes[buttonTypes["LEFT_STICK"] = 10] = "LEFT_STICK";
        buttonTypes[buttonTypes["RIGHT_STICK"] = 11] = "RIGHT_STICK";
        buttonTypes[buttonTypes["DPAD_UP"] = 12] = "DPAD_UP";
        buttonTypes[buttonTypes["DPAD_DOWN"] = 13] = "DPAD_DOWN";
        buttonTypes[buttonTypes["DPAD_LEFT"] = 14] = "DPAD_LEFT";
        buttonTypes[buttonTypes["DPAD_RIGHT"] = 15] = "DPAD_RIGHT";
        buttonTypes[buttonTypes["SUPER"] = 16] = "SUPER";
    })(buttonTypes || (buttonTypes = {}));
    var axesTypes;
    (function (axesTypes) {
        axesTypes[axesTypes["LEFT_X"] = 0] = "LEFT_X";
        axesTypes[axesTypes["LEFT_Y"] = 1] = "LEFT_Y";
        axesTypes[axesTypes["RIGHT_X"] = 2] = "RIGHT_X";
        axesTypes[axesTypes["RIGHT_Y"] = 3] = "RIGHT_Y";
    })(axesTypes || (axesTypes = {}));
    class Input {
        constructor(button, gamepadIndex, touchDomObject) {
            this.touchDomObject = touchDomObject;
            this.isDown = false;
            this.isUp = true;
            this.press = undefined;
            this.release = undefined;
            this.value = 0;
            this.gamepadIndex = gamepadIndex;
            this.button = button;
            let butToCheck = button;
            if (butToCheck.hasOwnProperty("key")) {
                let _this = this;
                this.key = new Key(butToCheck.key);
                this.key.press = function () {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                };
                this.key.release = function () {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                };
            }
            if (butToCheck.hasOwnProperty("axes") || butToCheck.hasOwnProperty("pad")) {
                this.gamepad = new Gamepad({ "button": butToCheck.pad, "axes": butToCheck.axes }, this.gamepadIndex);
                let _this = this;
                this.gamepad.press = function () {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                };
                this.gamepad.release = function () {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                };
            }
            if (butToCheck.hasOwnProperty("mouse")) {
                console.error("Mouse input class has not been made yet. Fork or report issue at http://github.com/Noedel-Man/Input/");
            }
            if (this.touchDomObject != null) {
                this.touch = new Touch(this.touchDomObject);
                let _this = this;
                this.touch.press = function () {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                };
                this.touch.release = function () {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                };
            }
        }
    }
    Input_1.Input = Input;
    class Key {
        constructor(key) {
            this.keyDown = [];
            this.isDown = false;
            this.isUp = true;
            this.press = undefined;
            this.release = undefined;
            this.value = 0;
            this.key = key;
            for (let i = 0; i < this.key.length; i++) {
                this.key[i] = keyTypes[this.key[i]];
            }
            this.eventHandelers();
        }
        eventHandelers() {
            let _this = this;
            window.addEventListener("keydown", function (e) {
                _this.downHandler(e);
            });
            window.addEventListener("keyup", function (e) {
                _this.upHandler(e);
            });
        }
        downHandler(event) {
            if (this.key.indexOf(event.keyCode) >= 0) {
                this.value = 1;
                if (this.isUp && this.press)
                    this.press();
                if (this.keyDown.indexOf(event.keyCode) < 0)
                    this.keyDown.push(event.keyCode);
                this.isDown = true;
                this.isUp = false;
            }
            event.preventDefault();
        }
        upHandler(event) {
            this.keyDown.splice(this.keyDown.indexOf(event.keyCode), 1);
            if (this.key.indexOf(event.keyCode) >= 0 && this.keyDown.length === 0) {
                this.value = 0;
                if (this.isDown && this.release)
                    this.release();
                this.isDown = false;
                this.isUp = true;
            }
            event.preventDefault();
        }
    }
    class Gamepad {
        constructor({ button, axes }, gamepadIndex) {
            this.gamepadIndex = gamepadIndex;
            this._dead = 0.15;
            this.isDown = false;
            this.isUp = true;
            this.press = undefined;
            this.release = undefined;
            this.handeler = () => {
                if (this.value)
                    this.downHandler();
                else
                    this.upHandler();
                requestAnimationFrame(this.handeler);
            };
            let _this = this;
            this.button = button;
            this.axes = axes;
            if (this.connect)
                this.handeler();
            window.addEventListener("gamepadconnected", function (e) {
                if (_this.connect)
                    _this.handeler();
            });
        }
        get dead() {
            return this._dead;
        }
        set dead(int) {
            this._dead = int;
        }
        get gamepad() {
            return navigator.getGamepads();
        }
        get length() {
            let n = 0;
            for (let i = 0; i < this.gamepad.length; i++) {
                if (this.gamepad[i]) {
                    n++;
                }
            }
            return n;
        }
        get axesValue() {
            let b = this.gamepad[this.gamepadIndex].buttons;
            if (b[6].pressed === true || b[7].pressed === true) {
                return this.buttonValue;
            }
            if (this.axes) {
                for (let i = 0; i < this.axes.length; i++) {
                    let v = this.gamepad[this.gamepadIndex].axes[axesTypes[this.axes[i]]];
                    if (v)
                        return v;
                }
            }
            return 0;
        }
        get buttonValue() {
            if (this.button) {
                for (let i = 0; i < this.button.length; i++) {
                    let v = this.gamepad[this.gamepadIndex].buttons[buttonTypes[this.button[i]]].value;
                    if (v)
                        return v;
                }
            }
            return 0;
        }
        get isAxesDown() {
            let b = this.gamepad[this.gamepadIndex].buttons;
            if (this.axesValue > this.dead || this.axesValue < -this.dead || b[6].pressed === true || b[7].pressed === true) {
                return true;
            }
            return false;
        }
        get isButtonDown() {
            if (this.buttonValue) {
                return true;
            }
            return false;
        }
        get value() {
            if (this.isAxesDown) {
                return this.axesValue;
            }
            if (this.isButtonDown) {
                return this.buttonValue;
            }
            return 0;
        }
        get connect() {
            if (this.length === 0) {
                console.warn("No gamepads connected!");
            }
            else if (!this.gamepad[this.gamepadIndex]) {
                console.error("Gamepad %d is not connected!", this.gamepadIndex);
            }
            else {
                return true;
            }
            return false;
        }
        downHandler() {
            if (this.isUp && this.press || this.isAxesDown) {
                this.press();
                this.isDown = true;
                this.isUp = false;
            }
        }
        upHandler() {
            if (this.isDown && this.release) {
                this.release();
                this.isDown = false;
                this.isUp = true;
            }
        }
    }
    class Touch {
        constructor(touchDomObject) {
            this.touchDomObject = touchDomObject;
            this.isDown = false;
            this.isUp = true;
            this.press = undefined;
            this.release = undefined;
            this.handeler();
        }
        handeler() {
            let _this = this;
            this.touchDomObject.addEventListener("mousedown", function () {
                _this.downHandler();
            });
            this.touchDomObject.addEventListener("mouseup", function () {
                _this.upHandler();
            });
            this.touchDomObject.addEventListener("touchstart", function () {
                _this.downHandler();
            });
            this.touchDomObject.addEventListener("ontouchend", function () {
                _this.upHandler();
            });
        }
        downHandler() {
            this.value = 1;
            if (this.isUp && this.press)
                this.press();
            this.isDown = true;
            this.isUp = false;
        }
        upHandler() {
            this.value = 0;
            if (this.isDown && this.release)
                this.release();
            this.isDown = false;
            this.isUp = true;
        }
    }
})(Input || (Input = {}));
