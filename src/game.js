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

function Position(row, column) {
	this.row = row;
	this.column = column;
}

function Tile(x, y, color) {
	this.shape = new createjs.Shape();
	this.x = x;
	this.y = y;
	this.color = color;
	
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
		console.log(this.x);
		stage.addChild(this.shape).set({
			x : this.x,
			y : this.y
		}).graphics.f(this.color).dc(0, 0, 50);
	};
	//this.draw();
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
		console.log(y);
		console.log(startposition.column);
		new Tile(x[startposition.row], y[startposition.column], "red").draw();
		new Tile(x[goalposition.row], y[goalposition.column], "blue").draw();
		for (i = 0; i <this.tiles.length; i++){
			var pos = this.tiles[i];
			new Tile(x[pos.row], y[pos.column], "red").draw();
		}
	};
	this.drawAllTiles();
	
	function spawn(dim) {
		var circle = new createjs.Shape();
		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		circle.x = -50;
		circle.y = dim.halfheight() - 50;
		stage.addChild(circle);
		stage.update();
		createjs.Tween.get(circle, {
			loop : false
		}).wait(500)
		.to({
			x : dim.sixwidth()
		}, 1000, createjs.Ease.getPowInOut(4));

		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", stage);
		return circle;
	}
	
	this.frog = spawn(dim);
}



function jump(figure, dim, stoneNumber) {
	var tween = createjs.Tween.get(figure, {
			loop : false
		}).wait(500);
	var pos = (dim.sixwidth() * stoneNumber);
	var posHalb = pos - dim.sixwidth() * (0.5);
	var jumpHeight = dim.sixwidth();
	tween.to({
		x : posHalb,
		y : jumpHeight
	}, 750, createjs.Ease.getPowOut(1));
	tween.to({
		x : pos,
		y : dim.halfheight() - 50
	}, 750, createjs.Ease.getPowOut(2));
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

	var halfheight = dim.halfheight();
	var sixwidth = dim.sixwidth();
	var figure;
	var tile1 = new Tile(sixwidth, halfheight, "red");
	var tile2 = new Tile(sixwidth * 2, halfheight, "red");
	tile2.shape.on("click", function (evt) {
		jump(figure, dim, 2);
		tile1.disappear();
	});
	var tile3 = new Tile(sixwidth * 3, halfheight, "red");
	tile3.shape.on("click", function (evt) {
		jump(figure, dim, 3);
		tile2.disappear();
	});
	var tile4 = new Tile( sixwidth * 4, halfheight, "red");
	tile4.shape.on("click", function (evt) {
		jump(figure, dim, 4);
		tile3.disappear();
	});
	var tile5 = new Tile(sixwidth * 5, halfheight, "blue");
	tile5.shape.on("click", function (evt) {
		jump(figure, dim, 5);
		tile4.disappear();
	});

};
