var exec = require('cordova/exec');

exports.watchVideo = function (dto, success, error) {
    exec(success, error, "rtsplayer", "watchVideo", [dto.path, dto.x, dto.y, dto.width, dto.height]);
};
exports.finishOkAndDismiss = function (success, error) {
    exec(success, error, "rtsplayer", "finishOkAndDismiss", []);
};


