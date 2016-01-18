"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var States_1 = require('./state/States');
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this, {
            width: 800,
            height: 600,
            transparent: false,
            enableDebug: true
        });
        this.state.add('boot', States_1.Boot);
        this.state.add('preload', States_1.Preload);
        this.state.add('main', States_1.Main);
        this.state.start('boot');
    }
    return Game;
}(Phaser.Game));
window.onload = function () {
    new Game();
};
