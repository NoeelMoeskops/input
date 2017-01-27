# Input class for html games
Use this class to make your browser respond to input from the user. Keyboard, gamepad or touch (mouse input is planned). Store everything in a single json object like so:
`
// list our keys
let inputObject = {
    "up": {
        "key": ["KEY_W", "UP_ARROW"],
        "pad": ["DPAD_UP", "RIGHT_TRIGGER"]
    },
    "down": {
        "key": ["KEY_S", "DOWN_ARROW"],
        "pad": ["DPAD_DOWN", "LEFT_TRIGGER"],
        "axes": ["LEFT_Y"]
    },
    "left": {
        "key": ["KEY_A", "LEFT_ARROW"],
        "pad": ["DPAD_LEFT"]
    },
    "right": {
        "key": ["KEY_D", "RIGHT_ARROW"],
        "pad": ["DPAD_RIGHT"],
        "axes": ["LEFT_X"]
    }
};
`
and whenever the user pressed `KEY_W`, `UP_ARROW`, `DPAD_UP` or `RIGHT_TRIGGER` `up.press()` is called and you can make something happen. Please see example/index.html for more information.

## Install

This package uses bower so simply type `bower install input` and you should be all set. You can also choice from es3, es5 and es6 version. The class is written in Typescript so you could also import that directly if you are using Typescript. a `.d.ts` file is planned.

## supported buttons

### Keyboard:
`
    BACKSPACE
    TAB
    ENTER,
    SHIFT,
    CTRL,
    ALT,
    PAUSE,
    CAPS_LOCK,
    ESCAPE,
    SPACE,
    PAGE_UP,
    PAGE_DOWN,
    END,
    HOME,
    LEFT_ARROW,
    UP_ARROW,
    RIGHT_ARROW,
    DOWN_ARROW,
    INSERT,
    DELETE,
    KEY_0,
    KEY_1,
    KEY_2,
    KEY_3,
    KEY_4,
    KEY_5,
    KEY_6,
    KEY_7,
    KEY_8,
    KEY_9,
    KEY_A,
    KEY_B,
    KEY_C,
    KEY_D,
    KEY_E,
    KEY_F,
    KEY_G,
    KEY_H,
    KEY_I,
    KEY_J,
    KEY_K,
    KEY_L,
    KEY_M,
    KEY_N,
    KEY_O,
    KEY_P,
    KEY_Q,
    KEY_R,
    KEY_S,
    KEY_T,
    KEY_U,
    KEY_V,
    KEY_W,
    KEY_X,
    KEY_Y,
    KEY_Z,
    LEFT_META,
    RIGHT_META,
    SELECT,
    NUMPAD_0,
    NUMPAD_1,
    NUMPAD_2,
    NUMPAD_3,
    NUMPAD_4,
    NUMPAD_5,
    NUMPAD_6,
    NUMPAD_7,
    NUMPAD_8,
    NUMPAD_9,
    MULTIPLY,
    ADD,
    SUBTRACT,
    DECIMAL,
    DIVIDE,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    NUM_LOCK,
    SCROLL_LOCK,
    SEMICOLON,
    EQUALS,
    COMMA,
    DASH,
    PERIOD,
    FORWARD_SLASH,
    GRAVE_ACCENT,
    OPEN_BRACKET,
    BACK_SLASH,
    CLOSE_BRACKET,
    SINGLE_QUOTE
`

### gamepad buttons:
`
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
    SUPER (super is experimental!)
`

### gamepad axis
`    
    LEFT_X,
    LEFT_Y,
    RIGHT_X,
    RIGHT_Y
`
