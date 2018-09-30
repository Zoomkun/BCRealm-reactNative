var emoji = require('node-emoji')
var emojis = [
    'grinning',
    'smiley',
    'wink',
    'sweat_smile',
    'yum',
    'sunglasses',
    'rage',
    'confounded',
    'flushed',
    'disappointed',
    'laughing',
    'smiling_imp',
    'sob',
    'neutral_face',
    'innocent',
    'grin',
    'joy',
    'cry',
    'sleepy',
    'triumph',
    'grimacing',
    'cold_sweat',
    'relieved',
    'kissing_heart',
    'stuck_out_tongue_winking_eye',
    'stuck_out_tongue_closed_eyes',
    'see_no_evil',
    'hear_no_evil',
    'raised_hands',
    'pray',
    'smirk',
    'scream',
    'sleeping',
    'flushed',
    'confused',
    'mask',
    'blush',
    'worried',
    'hushed',
    'heartbeat',
    'broken_heart',
    'crescent_moon',
    'star2',
    'sunny',
    'rainbow',
    'heart_eyes',
    'kissing_smiling_eyes',
    'lips',
    'rose',
    'rose',
    '+1',
];

var map = {};
for (var i in emojis) {
    var name = emojis[i];
    var code = emoji.get(name);
    map[code] = name;
    //console.log("code:", code);
    //console.log("name:", name);
}

module.exports = {
  map: map
};
