/*
 * game
 * https://github.com/Hisoka-1/frogjumper
 *
 * Copyright (c) 2016 Claudiu
 * Licensed under the MIT license.
 */
 
 /* globals $: false */
 /* globals createjs: false */

function Position(row, column){
	this.row = row;
	this.column = column;
}

function Level(rows, columns, startposition, goalposition){
	this.rows= rows;
	this.columns= columns;
	this.startposition= startposition;
	this.goalposition= goalposition;
}

function getInvisible(tile){
	var tween = createjs.Tween.get(tile, { override: true, loop: false }).wait(1000);
	tween.to({ alpha:0 }, 500);
}

function jump(stage, figure, dim, stoneNumber){
	var tween = createjs.Tween.get(figure, { loop: false }).wait(500);
	var pos = (dim.sixwidth() * stoneNumber);
	var posHalb = pos - dim.sixwidth() * (0.5);
	var jumpHeight = dim.sixwidth();
	tween.to({ x: posHalb, y: jumpHeight }, 750, createjs.Ease.getPowOut(1));
	tween.to({ x: pos, y: dim.halfheight() -50 }, 750, createjs.Ease.getPowOut(2));
}

function spawn(stage, dim){
	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = -50;
	circle.y = dim.halfheight()-50;
	stage.addChild(circle);
	stage.update();
	createjs.Tween.get(circle, { loop: false }).wait(500)
	.to({ x: dim.sixwidth() }, 1000, createjs.Ease.getPowInOut(4));

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
	
	return circle;
}

function drawTile(stage, posx, posy, color) {
	var shape = new createjs.Shape();
	stage.addChild(shape).set({x:posx,y:posy}).graphics.f(color).dc(0,0,50);
	return shape;
}

var init = function() {

	var level1 = new Level(5, 1, new Position(1,1), new Position (5,1));
	
	var stage = new createjs.Stage('myCanvas');
	var shape = new createjs.Shape();
	createjs.Touch.enable(stage);

	var dim = {
        width: $('#myCanvas').width(),//1366
        height: $('#myCanvas').height(),//768
		halfheight : function () {return this.height/2;},
	    sixwidth : function () {return this.width/6;}
    };
	 
	shape.graphics.beginFill('lightblue').drawRect(0, 0, dim.width, dim.height);
	stage.addChild(shape);
	
	
	var halfheight = dim.halfheight();
	var sixwidth = dim.sixwidth();
	var figure;
	var tile1 = drawTile(stage, sixwidth,halfheight, "red");
	var tile2 = drawTile(stage, sixwidth*2,halfheight, "red");tile2.on("click", function(evt) {
		jump(stage, figure, dim, 2);
		getInvisible(tile1);
	});
	var tile3 = drawTile(stage, sixwidth*3,halfheight, "red");tile3.on("click", function(evt) {
		jump(stage, figure, dim, 3);
		getInvisible(tile2);
	});
	var tile4 = drawTile(stage, sixwidth*4,halfheight, "red");tile4.on("click", function(evt) {
		jump(stage, figure, dim, 4); 
		getInvisible(tile3);
	});
	drawTile(stage, sixwidth*5,halfheight, "blue").on("click", function(evt) {
		jump(stage, figure, dim, 5); 
		getInvisible(tile4);
	});
	
	figure = spawn(stage, dim);
};