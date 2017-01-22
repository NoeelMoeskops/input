namespace Input {
    /**Stores all the keys*/
    enum keyTypes {
        BACKSPACE = 8,
        TAB = 9,
        ENTER = 13,
        SHIFT = 16,
        CTRL = 17,
        ALT = 18,
        PAUSE = 19,
        CAPS_LOCK = 20,
        ESCAPE = 27,
        SPACE = 32,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        END = 35,
        HOME = 36,
        LEFT_ARROW = 37,
        UP_ARROW = 38,
        RIGHT_ARROW = 39,
        DOWN_ARROW = 40,
        INSERT = 45,
        DELETE = 46,
        KEY_0 = 48,
        KEY_1 = 49,
        KEY_2 = 50,
        KEY_3 = 51,
        KEY_4 = 52,
        KEY_5 = 53,
        KEY_6 = 54,
        KEY_7 = 55,
        KEY_8 = 56,
        KEY_9 = 57,
        KEY_A = 65,
        KEY_B = 66,
        KEY_C = 67,
        KEY_D = 68,
        KEY_E = 69,
        KEY_F = 70,
        KEY_G = 71,
        KEY_H = 72,
        KEY_I = 73,
        KEY_J = 74,
        KEY_K = 75,
        KEY_L = 76,
        KEY_M = 77,
        KEY_N = 78,
        KEY_O = 79,
        KEY_P = 80,
        KEY_Q = 81,
        KEY_R = 82,
        KEY_S = 83,
        KEY_T = 84,
        KEY_U = 85,
        KEY_V = 86,
        KEY_W = 87,
        KEY_X = 88,
        KEY_Y = 89,
        KEY_Z = 90,
        LEFT_META = 91,
        RIGHT_META = 92,
        SELECT = 93,
        NUMPAD_0 = 96,
        NUMPAD_1 = 97,
        NUMPAD_2 = 98,
        NUMPAD_3 = 99,
        NUMPAD_4 = 100,
        NUMPAD_5 = 101,
        NUMPAD_6 = 102,
        NUMPAD_7 = 103,
        NUMPAD_8 = 104,
        NUMPAD_9 = 105,
        MULTIPLY = 106,
        ADD = 107,
        SUBTRACT = 109,
        DECIMAL = 110,
        DIVIDE = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NUM_LOCK = 144,
        SCROLL_LOCK = 145,
        SEMICOLON = 186,
        EQUALS = 187,
        COMMA = 188,
        DASH = 189,
        PERIOD = 190,
        FORWARD_SLASH = 191,
        GRAVE_ACCENT = 192,
        OPEN_BRACKET = 219,
        BACK_SLASH = 220,
        CLOSE_BRACKET = 221,
        SINGLE_QUOTE = 222
    }
    /**Stores all the buttonTypes*/
    enum buttonTypes {
        BUTTON_A,
        BUTTON_B,
        BUTTON_X,
        BUTTON_Y,
        LEFT_BUTTON,
        RIGHT_BUTTON,
        LEFT_TRIGGER,
        RIGHT_TRIGGER,
        SELECT,
        START,
        LEFT_STICK,
        RIGHT_STICK,
        DPAD_UP,
        DPAD_DOWN,
        DPAD_LEFT,
        DPAD_RIGHT,
        // super is experimental!
        SUPER
    }
    /**Stores all the axesTypes*/
    enum axesTypes {
        LEFT_X,
        LEFT_Y,
        RIGHT_X,
        RIGHT_Y
    }
    //  ###
    //   #  #    # #####  #    # #####
    //   #  ##   # #    # #    #   #
    //   #  # #  # #    # #    #   #
    //   #  #  # # #####  #    #   #
    //   #  #   ## #      #    #   #
    //  ### #    # #       ####    #
    //

    export class Input {
        // get all input classes
        public gamepad: Gamepad;
        private key: Key;
        private touch: Touch;
        private gamepadIndex: number;
        private button: any[];


        // got gameConfig from global var.ts, ignore error
        // JSON errors all over the place, but it are all false positives!
        private input: JSON = Base.gameConfig.settings.input;

        // to check the status of the button
        public isDown: boolean = false;
        public isUp: boolean = true;
        public press: any = undefined;
        public release: any = undefined;
        public value: number = 0;

        constructor(button: any[], gamepadIndex: number,private touchDomObject?: any) {
            this.gamepadIndex = gamepadIndex;
            this.button = button;


            let butToCheck: JSON = this.input[button[0]][button[1]][button[2]];
            // check input for key
            if (butToCheck.hasOwnProperty("key")) {
                let _this = this;
                this.key = new Key(butToCheck.key);

                this.key.press = function() {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                };
                this.key.release = function() {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                    // console.trace("isdown: %s, isUp: %s, value: %d", _this.isDown, _this.isUp, _this.value);
                };
            }
            if (butToCheck.hasOwnProperty("axes") || butToCheck.hasOwnProperty("pad")) {
                // make gamepad class with correct playernumber
                this.gamepad = new Gamepad({ "button": butToCheck.pad, "axes": butToCheck.axes }, this.gamepadIndex);
                let _this = this;
                this.gamepad.press = function() {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                    // console.trace("PRESS isdown: %s, isUp: %s, value: %d", _this.isDown, _this.isUp, _this.value);
                };
                this.gamepad.release = function() {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                    // console.trace("RELEASE isdown: %s, isUp: %s, value: %d", _this.isDown, _this.isUp, _this.value);
                };
            }
            if (butToCheck.hasOwnProperty("mouse")) {
                console.error("Mouse input class has not been made yet. Get working!");
            }
            if (this.touchDomObject != null){
                this.touch = new Touch(this.touchDomObject);
                let _this = this;
                this.touch.press = function() {
                    _this.isDown = true;
                    _this.isUp = false;
                    _this.value = this.value;
                    _this.press();
                    // console.trace("PRESS isdown: %s, isUp: %s, value: %d", _this.isDown, _this.isUp, _this.value);
                };
                this.touch.release = function() {
                    _this.isDown = false;
                    _this.isUp = true;
                    _this.value = this.value;
                    _this.release();
                    // console.trace("RELEASE isdown: %s, isUp: %s, value: %d", _this.isDown, _this.isUp, _this.value);
                };
            }

        }
    }
    //  #    #
    //  #   #  ###### #   #
    //  #  #   #       # #
    //  ###    #####    #
    //  #  #   #        #
    //  #   #  #        #
    //  #    # ######   #
    //
    // check the status of the given key
    class Key {
        private key: any[];
        // the keys that are currently pressed
        public keyDown: number[] = [];

        // check the status of the key
        public isDown: boolean = false;
        public isUp: boolean = true;
        public press: any = undefined;
        public release: any = undefined;
        public value: number = 0;

        /**check status of key's. inseard as text ("KEY_W")*/
        constructor(key: any[]) {
            this.key = key;
            // convert text to acii number
            for (let i: number = 0; i < this.key.length; i++) {
                this.key[i] = keyTypes[this.key[i]];
            }
            this.eventHandelers();
        }
        private eventHandelers(): void {
            // Attach event listeners
            let _this = this;
            window.addEventListener(
                "keydown", function(e) {
                    _this.downHandler(e);
                }
            );
            window.addEventListener(
                "keyup", function(e) {
                    _this.upHandler(e);
                }
            );
        }
        private downHandler(event) {
            if (this.key.indexOf(event.keyCode) >= 0) {
                this.value = 1;
                // press is only called once
                if (this.isUp && this.press) this.press();
                // add key to keyDown array
                if (this.keyDown.indexOf(event.keyCode) < 0) this.keyDown.push(event.keyCode);

                this.isDown = true;
                this.isUp = false;
            }
            event.preventDefault();
        }
        private upHandler(event) {
            // remove key from keyDown
            this.keyDown.splice(this.keyDown.indexOf(event.keyCode), 1);
            // sets value to not pressed and call release
            if (this.key.indexOf(event.keyCode) >= 0 && this.keyDown.length === 0) {
                this.value = 0;
                if (this.isDown && this.release) this.release();
                this.isDown = false;
                this.isUp = true;
            }
            event.preventDefault();
        }
    }
    //
    //   ####    ##   #    # ###### #####    ##   #####
    //  #    #  #  #  ##  ## #      #    #  #  #  #    #
    //  #      #    # # ## # #####  #    # #    # #    #
    //  #  ### ###### #    # #      #####  ###### #    #
    //  #    # #    # #    # #      #      #    # #    #
    //   ####  #    # #    # ###### #      #    # #####
    //
    // gamepad handeler
    class Gamepad {
        private button: any[];
        private axes: any[];

        private _dead: number = 0.15;
        // is the controller connected
        // check the status of the key
        public isDown: boolean = false;
        public isUp: boolean = true;
        public press: any = undefined;
        public release: any = undefined;

        /**Axes dead*/
        public get dead(): number {
            return this._dead;
        }
        public set dead(int: number) {
            this._dead = int;
        }

        /**gampad input handeler provide button or/and axes as provided by gameConfig.json*/
        constructor({button, axes}: { button?: any[], axes?: any[] }, private gamepadIndex: number) {
            let _this = this;
            this.button = button;
            this.axes = axes;
            if (this.connect) this.handeler();
            // when new gamepad is connect check if its ours
            window.addEventListener("gamepadconnected", function(e) {
                if (_this.connect) _this.handeler();
            });
        }
        /**navigator.getGamepads()*/
        private get gamepad(): any {
            return navigator.getGamepads();
        }
        /** Gets the nummer of gamepads connected */
        public get length(): number {
            let n: number = 0;
            for (let i: number = 0; i < this.gamepad.length; i++) {
                if (this.gamepad[i]) {
                    n++;
                }
            }
            return n;
        }
        /**Returns the axes value*/
        private get axesValue(): number {
            let b: any = this.gamepad[this.gamepadIndex].buttons;
            // RIGHT and LEFT triggers must be handeld as axes
            if (b[6].pressed === true || b[7].pressed === true) {
                return this.buttonValue;
            }
            if (this.axes) {
                for (let i: number = 0; i < this.axes.length; i++) {
                    let v: any = this.gamepad[this.gamepadIndex].axes[axesTypes[this.axes[i]]];
                    if (v) return v;
                }
            }
            return 0;
        }
        /**Returns the button value*/
        private get buttonValue(): number {
            if (this.button) {
                for (let i: number = 0; i < this.button.length; i++) {
                    let v: any = this.gamepad[this.gamepadIndex].buttons[buttonTypes[this.button[i]]].value;
                    if (v) return v;
                }
            }
            return 0;
        }
        /**Returns true if a axes of the input is being pushed*/
        public get isAxesDown(): boolean {
            // check if RIGHT_TRIGGER and LEFT_TRIGGER are being pressed.
            let b: any = this.gamepad[this.gamepadIndex].buttons;
            if (this.axesValue > this.dead || this.axesValue < -this.dead || b[6].pressed === true || b[7].pressed === true) {
                return true;
            }
            return false;
        }
        /**Returns true if a button of the input is being pushed*/
        public get isButtonDown(): boolean {
            if (this.buttonValue) {
                return true;
            }
            return false;
        }
        /**get the value of the button/axes, axes overwrites the button*/
        public get value(): number {
            if (this.isAxesDown) {
                return this.axesValue;
            }
            if (this.isButtonDown) {
                return this.buttonValue;
            }
            return 0;
        }
        /**check if gamepad is connected*/
        public get connect(): boolean {
            if (this.length === 0) {
                console.warn("No gamepads connected!");
            } else if (!this.gamepad[this.gamepadIndex]) {
                console.error("Gamepad %d is not connected!", this.gamepadIndex);
            } else {
                return true;
            }
            return false;
        }

        /**check for input*/
        private handeler = (): void => {
            // fat arrow function because "this" would else have been lost
            // only call onces from constructor
            if (this.value) this.downHandler();
            else this.upHandler();
            // loops
            requestAnimationFrame(this.handeler);
        }

        private downHandler(): void {
            // press is only called once
            // if isAxesDown it is called 60 * a second
            if (this.isUp && this.press || this.isAxesDown) {
                this.press();
                this.isDown = true;
                this.isUp = false;
            }
        }
        private upHandler(): void {
            if (this.isDown && this.release) {
                this.release();
                this.isDown = false;
                this.isUp = true;
            }
        }
    }
    //
    //  #####  ####  #    #  ####  #    #
    //    #   #    # #    # #    # #    #
    //    #   #    # #    # #      ######
    //    #   #    # #    # #      #    #
    //    #   #    # #    # #    # #    #
    //    #    ####   ####   ####  #    #
    //
    class Touch {
        public isDown: boolean = false;
        public isUp: boolean = true;
        public press: any = undefined;
        public release: any = undefined;

        constructor(private touchDomObject: any) {
            this.handeler();
        }

        private handeler() {
            let _this = this;
            this.touchDomObject.addEventListener("touchstart", function() {
                _this.downHandler();
            })
            this.touchDomObject.addEventListener("touchend", function() {
                _this.upHandler();
            })
        }
        private downHandler() {
            this.value = 1;
            // press is only called once
            if (this.isUp && this.press) this.press();

            this.isDown = true;
            this.isUp = false;
        }
        private upHandler() {
            // sets value to not pressed and call release
            this.value = 0;
            if (this.isDown && this.release) this.release();
            this.isDown = false;
            this.isUp = true;
        }
    }
}
