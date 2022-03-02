class Sketch {
  constructor(p, width, height) {
    this.p = p;
    this.createSetup(width, height);
    this.createDraw(this.drawAxes);
    this.createDraggingFunctions();
  }
  createSetup(width, height) {
    this.p.setup = function () {
      this.createCanvas(width, height);
    };
  }
  createDraw(...args) {
    this.p.draw = function () {
      this.background('tan');
      args.forEach((f) => f(this));
    };
  }
  drawAxes(p) {
    p.stroke(0);
    p.strokeWeight(1);
    p.line(p.width / 2, p.height * 0.1, p.width / 2, p.height * 0.9);
    p.line(p.width * 0.1, p.height / 2, p.width * 0.9, p.height / 2);
  }
    createDraggingFunctions()
}

new p5((p) => new Sketch(p, 600, 600), 'first');
