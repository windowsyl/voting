class Group {
  constructor(p, x, y, size) {
    this.p = p
    this.posV = p.createVector(x, y);
    this.size = size
  }
  get pos() {
    return [this.posV.x, this.posV.y];
  }
  set pos(npos) {
    this.posV.set(npos);
  }
  mouseInShape() {
    return this.p.dist(...this.pos, this.p.mouseX, this.p.mouseY) < this.size;
  }
}

class Circle extends Group {
  constructor(p, x, y, size = 40) {
    super(p, x, y, size);
  }
  draw() {
    this.p.noStroke();
    this.p.fill(0, 0, 255);
    this.p.circle(...this.pos, this.size);
  }
}

class Square extends Group {
  constructor(p, x, y, size = 40) {
    super(p, x, y, size);
  }
  draw() {
    this.p.noStroke();
    this.p.fill(255, 255, 0);
    this.p.square(...this.pos, this.size * 0.9);
  }
}
