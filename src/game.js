/*
 * game
 * https://github.com/Hisoka-1/frogjumper
 *
 * Copyright (c) 2016 Claudiu
 * Licensed under the MIT license.
 */

/* globals $: false */
/* globals createjs: false */
/* globals console: false */

var stage;
var frog;

function Position(row, column) {
	this.row = row;
	this.column = column;
}

function Tile(x, y, color, pos) {
	this.shape = new createjs.Shape();
	this.x = x;
	this.y = y;
	this.color = color;
	this.pos = pos;
	var that = this;
	this.disappear = function () {
		var tween = createjs.Tween.get(this.shape, {
				override : true,
				loop : false
			}).wait(1000);
		tween.to({
			alpha : 0
		}, 500);
	};
	this.draw = function() {
		console.log(x);
		stage.addChild(this.shape).set({
			x : this.x,
			y : this.y
		}).graphics.f(this.color).dc(0, 0, 50);
	};
	
	//this.draw();
	
	this.init = function(){
		this.shape.on("click", function (evt) {
			frog.jump(that);
		});
	};
	this.init();
	
}

function Level(columns, rows, startposition, goalposition, dim, tiles) {
	this.rows = rows;
	this.columns = columns;
	this.startposition = startposition;
	this.goalposition = goalposition;
	this.dim = dim;
	this.tiles = tiles;
	
	this.drawAllTiles = function(){
		var x = [];
		for (var i = 0; i <this.columns; i++){
			x [i] = (this.dim.width / (this.columns+1) * (i+1));
		}
		
		var y = [];
		for (i = 0; i <this.rows; i++){
			y [i] = (this.dim.height / (this.rows+1) * (i+1));
		}
		frog.tile = new Tile(x[startposition.row], y[startposition.column], "red", startposition);
		frog.tile.draw();
		new Tile(x[goalposition.row], y[goalposition.column], "blue", goalposition).draw();
		for (i = 0; i <this.tiles.length; i++){
			var pos = this.tiles[i];
			new Tile(x[pos.row], y[pos.column], "red", pos).draw();
		}
	};
	
	
	this.spawn = function() {
		frog.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		frog.x = -50;
		frog.y = this.dim.halfheight() - 50;
		stage.addChild(frog);
		stage.update();
		createjs.Tween.get(frog, {
			loop : false
		}).wait(500)
		.to({
			x : this.dim.sixwidth()
		}, 1000, createjs.Ease.getPowInOut(4));

		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", stage);
	};
	frog = new createjs.Shape();
	this.drawAllTiles();
	this.spawn();
	
	frog.jump = function(tile) {
		var tween = createjs.Tween.get(frog, {
				loop : false
			}).wait(500);
		tween.to({
			x : (tile.x-frog.x)/2 + frog.x,
			y : tile.y - 100
		}, 750, createjs.Ease.getPowOut(1));
		tween.to({
			x : tile.x,
			y : tile.y - 50
		}, 750, createjs.Ease.getPowOut(2));
		frog.tile.disappear();
		frog.tile = tile;
	};
	
}

var init = function () {

	stage = new createjs.Stage('myCanvas');
	var shape = new createjs.Shape();
	createjs.Touch.enable(stage);

	var dim = {
		width : $('#myCanvas').width(), //1366
		height : $('#myCanvas').height(), //768
		halfheight : function () {
			return this.height / 2;
		},
		sixwidth : function () {
			return this.width / 6;
		}
	};
	
	shape.graphics.beginFill('lightblue').drawRect(0, 0, dim.width, dim.height);
	
	stage.addChild(shape);
	var level1 = new Level(5, 1, new Position(0, 0), new Position(4, 0), dim, [
		new Position(1, 0),
		new Position(2, 0),
		new Position(3, 0)
	]);
};
