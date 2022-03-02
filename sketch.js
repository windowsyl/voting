class Sketch {
  constructor(p, width, height, targets) {
    this.p = p;
    this.targets = targets;
    this.createSetup(width, height);
    this.createDraw(this.drawAxes, this.drawTargets);

    this.createDraggingFunctions();
  }
  createSetup(width, height) {
    this.p.setup = function () {
      this.createCanvas(width, height);
    };
  }
  createDraw(...args) {
    let sketch = this;
    this.p.draw = function () {
      this.background('tan');
      //this now refers to p, not the instanceof Sketch
      args.forEach((f) => f(sketch, this));
    };
  }
  drawAxes(sketch, p) {
    p.stroke(0);
    p.strokeWeight(1);
    p.line(p.width / 2, p.height * 0.1, p.width / 2, p.height * 0.9);
    p.line(p.width * 0.1, p.height / 2, p.width * 0.9, p.height / 2);
  }
  drawTargets(sketch, p) {
    for (let i = sketch.targets.length - 1; i > -1; i--) {
      sketch.targets[i].draw();
    }
  }
  createDraggingFunctions() {
    this.dragTarget = null;
    let sketch = this;
    this.p.mousePressed = function () {
      for (let target of sketch.targets) {
        if (target.mouseInShape()) {
          sketch.dragTarget = target;
          return;
        }
      }
    };
    this.p.mouseReleased = function () {
      sketch.dragTarget = null;
    };
    this.p.mouseDragged = function () {
      if (sketch.dragTarget) {
        sketch.dragTarget.pos = [sketch.dragTarget.posV.x + this.movedX, sketch.dragTarget.posV.y + this.movedY];
      }
    };
  }
}
