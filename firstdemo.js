new p5(
  (p) =>
    new Sketch(p, 600, 600, [new Circle(p, 200, 300), new Square(p, 400, 300)]),
  'first'
);
new p5(
  (p) =>
    new Sketch(p, 600, 600, [new Circle(p, 300, 200), new Square(p, 300, 400)]),
  'second'
);
