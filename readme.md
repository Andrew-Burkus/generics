# Generic library for p5.js
Basic shapes and Object representation so that you can 
jump into your projects and quickly build/iterate ideas.
Totally not done yet.

## Generic methods and objects

### RGB Object
Simple represenation of RGB values.

#### Constructor
Arguments are simply (redValue, greenValue, blueValue)
```javascript
var color = new generic.RGB(0, 150, 75);
color.r += 100;
color.g -= 50;
```

#### Accessors
RGBs have an r, g, and b value which can accessed with dot syntax.


#### Addition and Multiplication
Addition and Multiplication do not have side effects
and instead return new RGB Objects. RGBs are also constrained
between 0 and 255 for any methods used.

```javascript
var color = new generic.RGB(50, 50, 50);
var anotherColor = new generic.RGB(25, 25, 25);
var yetAnotherColor = color.add(anotherColor);
```
#### Random RGB
If you'd like a random RGB Object

```javascript
var randomColor = generic.randomRGB();
```

### Rect Object
Simply a Rectangle 

#### Constructor
Arguments are (Vector, width, height, color)
Color is optional, the default color is black

```javascript
var rect = new generic.Rect(new generic.Vector(25, 50),
                            50,
                            50,
                            generic.randomRGB());

var pos = new generic.Vector.random2D();
var aDifferentRect = new generic.Rect(pos, 100, 50);
```

#### Area and Perimeter
Pretty straighforward, returns 
area or perimemter of Rect in question.

```javascript
var rect = new generic.Rect(generic.Vector.random2D(),
                            30,
                            40);
var area = rect.area();
var perim = rect.perimeter();
```

#### Drawing
Rects have a draw function which takes 
two boolean arguments (_stroke, _fill)

```javascript
function draw() {
    anOutlinedSquare.draw(true, false);
    aFilledSquare.draw(false, true);
}
```

#### Random Rects
Just like randomRGB, there is a randomRect on the 
generic namespace. Random Rects have random color, position,
and dimensions. There are two optional arguments dimW and dimH
which specify a width and heigth range.

```javascript
var randomRect = generic.randomRect();
var anotherOne = generic.randomRect(450, 500);
```

### Line Object
Lines are essentially Vector wrappers which enclose
a color and two vectors.

#### Constructor
Takes three arguments (vector1, vector2, color). 
Color is optional and defaults to black.

```javascript
var line = new generic.Line(generic.Vector.random2D(),
                            generic.Vector.random2D());

var v = new generic.Vector(50, 50);
var otherLine = new generic.Line(v,
                                new generic.Vector(mouseX, mouseY),
                                generic.randomRGB());
```

#### Drawing

```javascript 
function draw() {
    myLine.draw();
}
```

### Circle Object

#### Constructor
Takes (Vector, radius, color). 
Color is optional and defaults to black.

```javascript
var circle = new generic.Circle(generic.Vector.random2D(),
                                55,
                                generic.randomRGB());

var aDifferentCircle = new generic.Circle(circle.origin, 67);
```