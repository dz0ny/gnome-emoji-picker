//Import St because is the library that allow you to create UI elements
const St = imports.gi.St;

//Import Clutter because is the library that allow you to layout UI elements
const Clutter = imports.gi.Clutter;


//Import Main because is the instance of the class that have all the UI elements
const Main = imports.ui.main;


//Import PanelMenu and PopupMenu 
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const Lang = imports.lang;
const Clipboard = St.Clipboard.get_default();
const CLIPBOARD_TYPE = St.ClipboardType.CLIPBOARD;

let numbers = {
  "zero": {
    "keywords": ["0", "numbers", "blue-square", "null"],
    "char": "0️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "one": {
    "keywords": ["blue-square", "numbers", "1"],
    "char": "1️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "two": {
    "keywords": ["numbers", "2", "prime", "blue-square"],
    "char": "2️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "three": {
    "keywords": ["3", "numbers", "prime", "blue-square"],
    "char": "3️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "four": {
    "keywords": ["4", "numbers", "blue-square"],
    "char": "4️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "five": {
    "keywords": ["5", "numbers", "blue-square", "prime"],
    "char": "5️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "six": {
    "keywords": ["6", "numbers", "blue-square"],
    "char": "6️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "seven": {
    "keywords": ["7", "numbers", "blue-square", "prime"],
    "char": "7️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eight": {
    "keywords": ["8", "blue-square", "numbers"],
    "char": "8️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "nine": {
    "keywords": ["blue-square", "numbers", "9"],
    "char": "9️⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "keycap_ten": {
    "keywords": ["numbers", "10", "blue-square"],
    "char": "🔟",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "asterisk": {
    "keywords": ["star", "keycap"],
    "char": "*⃣",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "1234": {
    "keywords": ["numbers", "blue-square"],
    "char": "🔢",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
};

let signs = {
  "warning": {
    "keywords": ["exclamation", "wip", "alert", "error", "problem", "issue"],
    "char": "⚠️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "children_crossing": {
    "keywords": ["school", "warning", "danger", "sign", "driving", "yellow-diamond"],
    "char": "🚸",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "beginner": {
    "keywords": ["badge", "shield"],
    "char": "🔰",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "recycle": {
    "keywords": ["arrow", "environment", "garbage", "trash"],
    "char": "♻️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "u6307": {
    "keywords": ["chinese", "point", "green-square", "kanji"],
    "char": "🈯",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "chart": {
    "keywords": ["green-square", "graph", "presentation", "stats"],
    "char": "💹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sparkle": {
    "keywords": ["stars", "green-square", "awesome", "good", "fireworks"],
    "char": "❇️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "eight_spoked_asterisk": {
    "keywords": ["star", "sparkle", "green-square"],
    "char": "✳️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "negative_squared_cross_mark": {
    "keywords": ["x", "green-square", "no", "deny"],
    "char": "❎",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "white_check_mark": {
    "keywords": ["green-square", "ok", "agree", "vote", "election", "answer", "tick"],
    "char": "✅",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "diamond_shape_with_a_dot_inside": {
    "keywords": ["jewel", "blue", "gem", "crystal", "fancy"],
    "char": "💠",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cyclone": {
    "keywords": ["weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin"],
    "char": "🌀",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "loop": {
    "keywords": ["tape", "cassette"],
    "char": "➿",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "globe_with_meridians": {
    "keywords": ["earth", "international", "world", "internet", "interweb", "i18n"],
    "char": "🌐",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "m": {
    "keywords": ["alphabet", "blue-circle", "letter"],
    "char": "Ⓜ️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "atm": {
    "keywords": ["money", "sales", "cash", "blue-square", "payment", "bank"],
    "char": "🏧",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "sa": {
    "keywords": ["japanese", "blue-square", "katakana"],
    "char": "🈂️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "passport_control": {
    "keywords": ["custom", "blue-square"],
    "char": "🛂",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "customs": {
    "keywords": ["passport", "border", "blue-square"],
    "char": "🛃",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "baggage_claim": {
    "keywords": ["blue-square", "airport", "transport"],
    "char": "🛄",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "left_luggage": {
    "keywords": ["blue-square", "travel"],
    "char": "🛅",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wheelchair": {
    "keywords": ["blue-square", "disabled", "a11y", "accessibility"],
    "char": "♿",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "no_smoking": {
    "keywords": ["cigarette", "blue-square", "smell", "smoke"],
    "char": "🚭",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "wc": {
    "keywords": ["toilet", "restroom", "blue-square"],
    "char": "🚾",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "parking": {
    "keywords": ["cars", "blue-square", "alphabet", "letter"],
    "char": "🅿️",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "potable_water": {
    "keywords": ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
    "char": "🚰",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "mens": {
    "keywords": ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
    "char": "🚹",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "womens": {
    "keywords": ["purple-square", "woman", "female", "toilet", "loo", "restroom", "gender"],
    "char": "🚺",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "baby_symbol": {
    "keywords": ["orange-square", "child"],
    "char": "🚼",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "restroom": {
    "keywords": ["blue-square", "toilet", "refresh", "wc", "gender"],
    "char": "🚻",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "put_litter_in_its_place": {
    "keywords": ["blue-square", "sign", "human", "info"],
    "char": "🚮",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cinema": {
    "keywords": ["blue-square", "record", "film", "movie", "curtain", "stage", "theater"],
    "char": "🎦",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "signal_strength": {
    "keywords": ["blue-square", "reception", "phone", "internet", "connection", "wifi", "bluetooth", "bars"],
    "char": "📶",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "koko": {
    "keywords": ["blue-square", "here", "katakana", "japanese", "destination"],
    "char": "🈁",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ng": {
    "keywords": ["blue-square", "words", "shape", "icon"],
    "char": "🆖",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "ok": {
    "keywords": ["good", "agree", "yes", "blue-square"],
    "char": "🆗",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "up": {
    "keywords": ["blue-square", "above", "high"],
    "char": "🆙",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "cool": {
    "keywords": ["words", "blue-square"],
    "char": "🆒",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "new": {
    "keywords": ["blue-square", "words", "start"],
    "char": "🆕",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
  "free": {
    "keywords": ["blue-square", "words"],
    "char": "🆓",
    "fitzpatrick_scale": false,
    "category": "symbols"
  },
};

const EmojiButton = new Lang.Class({
  Name: 'EmojiButton', //Class Name
  Extends: St.Button, //Parent Class

  //Constructor
  _init: function (emojiText, menuBase) {
    this.parent();
    this.connect('clicked', Lang.bind(menuBase, function () {
      Clipboard.set_text(CLIPBOARD_TYPE, emojiText);
    }));

    this.label = emojiText;
    this.style_class = 'emoji';
  },
});

const GitHubEmojis = new Lang.Class({
  Name: 'GitHubEmojis', //Class Name
  Extends: PanelMenu.Button, //Parent Class

  AddEmojiList: function (title, list) {
    let cat = new PopupMenu.PopupSubMenuMenuItem(title);
    cat.menu.box.style_class = 'EmojisItemStyle';
    let i = 0;
    for (var k in list) {
      let emoji = list[k]["char"];
      if (i % 6 === 0) {
        item = new PopupMenu.PopupBaseMenuItem('');
        item.actor.track_hover = false;
        container = new St.BoxLayout({
          style_class: 'menu-box'
        });
        item.actor.add(container, {
          expand: true
        });
        cat.menu.addMenuItem(item);
      }
      let button = new EmojiButton(emoji, this)
      container.add_child(button, {
        hover: true
      });
      i++;
    }
    this.menu.addMenuItem(cat);
  },

  //Constructor
  _init: function () {

    this.parent(0, 'GitHubEmojis', false);
    let box = new St.BoxLayout();

    let toplabel = new St.Label({
      text: '🎁',
      y_expand: true,
      y_align: Clutter.ActorAlign.CENTER
    });

    box.add(toplabel);
    box.add(PopupMenu.arrowIcon(St.Side.BOTTOM));
    this.actor.add_child(box);

    this.AddEmojiList("Numbers", numbers);
    this.AddEmojiList("Signs", signs);
  },

  destroy: function () {
    this.parent();
  }
});

let button;

function enable() {
  button = new GitHubEmojis;
  Main.panel.addToStatusArea('GitHubEmojis', button, 0, 'right');
}

function disable() {
  button.destroy();
}