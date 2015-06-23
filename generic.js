// assumes p5.js is in Global Namespace
// Rect and RGB is working
// Line is working
var generic = {};

generic.Vector = p5.Vector;

generic.RGB = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

generic.randomRGB = function() {
    return new this.RGB(random(0, 255), random(0, 255), random(0, 255));
};

generic.RGB.prototype.multiply = function(otherColor) {
    var r = constrain(this.r * otherColor.r, 0, 255);
    var g = constrain(this.g * otherColor.g, 0, 255);
    var b = constrain(this.b * otherColor.b, 0, 255);
    return new this.constructor(r, g, b);
};

generic.RGB.prototype.add = function(otherColor) {
    var r = constrain(this.r + otherColor.r, 0, 255);
    var g = constrain(this.g + otherColor.g, 0, 255);
    var b = constrain(this.b + otherColor.b, 0, 255);
    return new this.constructor(r, g, b);
};

generic.Rect = function(origin, width, height, color) {
    this.origin = origin;
    this.width  = width;
    this.height = height;
    if(color) this.color = color;
};

generic.Rect.prototype.color = new generic.RGB(0, 0, 0);

generic.Rect.prototype.draw = function(_fill, _stroke) {
    if(_fill) fill(this.color.r, this.color.g, this.color.b);
    if(_stroke) stroke(this.color.r, this.color.g, this.colorb);

    rect(this.origin.x, this.origin.y, this.width, this.height);
};

generic.Rect.prototype.area = function() {
    return this.width * this.height;
}

generic.Rect.prototype.perimeter = function() {
    return this.width * 2 + this.height * 2;
}

generic.randomRect = function(dimW, dimH) {
    if(dimW && dimH) {
        return new this.constructor(generic.Vector.random2D(), 
                            random(dimW),
                            random(dimH),
                            this.randomRGB());
    } else {
        return new this.constructor(generic.Vector.random2D(),
                            random(100), 
                            random(100));
    }
}

generic.Line = function(v1, v2, color) {
    this.start = v1;
    this.end = v2;
    if(color) this.color = color;
}

generic.Line.prototype.color = new generic.RGB(0, 0, 0);

generic.Line.prototype.length = function() {
    return this.start.dist(this.end);
}

generic.Line.prototype.draw = function() {
    stroke(this.color.r, this.color.g, this.color.b);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
}

generic.randomLine = function() {
    return new this.Line(this.Vector.random2D(), this.Vector.random2D());
}

generic.Circle = function(origin, radius, color) {
    this.origin = origin;
    this.radius = radius;
    if(color) this.color = color;
}

generic.Circle.prototype.color = new generic.RGB(0, 0, 0);

generic.Circle.prototype.draw = function(_fill, _stroke) {
    if(_fill) fill(this.color.r, this.color.g, this.color.b);
    if(_stroke) stroke(this.color.r, this.color.g, this.color.b);

    ellipse(this.origin.x, this.origin.y, this.radius, this.radius);
}