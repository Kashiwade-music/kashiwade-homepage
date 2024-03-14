import { P5CanvasInstance } from "@p5-wrapper/react";

export const p5bgTriangles = (p5: P5CanvasInstance): void => {
  class Triangle {
    pos: any;
    euler: any;
    vel: any;
    eulerVel: any;
    size: number;

    constructor(
      x: number,
      y: number,
      z: number,
      eulerX: number,
      eulerY: number,
      eulerZ: number
    ) {
      this.pos = p5.createVector(x, y, z);
      this.vel = p5.createVector(p5.random(0.25, 1), p5.random(-0.05, -0.5), 0);
      this.euler = p5.createVector(eulerX, eulerY, eulerZ);
      this.eulerVel = p5.createVector(
        p5.random(0.01, 0.05),
        p5.random(0.01, 0.05),
        p5.random(0.01, 0.05)
      );
      this.size = 20;
    }

    update() {
      this.pos.add(this.vel);
      this.euler.add(this.eulerVel);

      // 範囲外に出たら反対側にループ
      if (this.pos.x > p5.width / 2 + this.size) {
        this.pos.x = -p5.width / 2 - this.size;
      } else if (this.pos.x < -p5.width / 2 - this.size) {
        this.pos.x = p5.width / 2 + this.size;
      }
      if (this.pos.y > p5.height / 2 + this.size) {
        this.pos.y = -p5.height / 2 - this.size;
      } else if (this.pos.y < -p5.height / 2 - this.size) {
        this.pos.y = p5.height / 2 + this.size;
      }
    }

    display() {
      p5.push();
      p5.translate(this.pos.x, this.pos.y, this.pos.z);
      // p5.fill(172, 172, 190);
      p5.fill(255, 255, 255);
      p5.beginShape();
      // p5.stroke(172, 172, 190);
      p5.stroke(255, 255, 255);
      p5.vertex(0, -this.size / p5.sqrt(3));
      p5.vertex(-this.size / 2, this.size / (2 * p5.sqrt(3)));
      p5.vertex(this.size / 2, this.size / (2 * p5.sqrt(3)));
      p5.rotateX(this.euler.x);
      p5.rotateY(this.euler.y);
      p5.rotateZ(this.euler.z);

      p5.endShape(p5.CLOSE);
      p5.pop();
    }
  }
  let triangles: Array<Triangle> = [];

  const genTriangles = () => {
    triangles = [];
    let num = p5.max(p5.floor(p5.windowWidth * p5.windowHeight * 0.000007), 5);
    console.log(num);

    for (let i = 0; i < num; i++) {
      let x = p5.random(-p5.width / 2, p5.width / 2);
      let y = p5.random(-p5.height / 2, p5.height / 2);
      let triangle = new Triangle(
        x,
        y,
        p5.random(-1, 1),
        p5.random(0, p5.TWO_PI),
        p5.random(0, p5.TWO_PI),
        p5.random(0, p5.TWO_PI)
      );
      triangles.push(triangle);
    }
  };

  p5.setup = () => {
    triangles = [];
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    genTriangles();
  };
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    genTriangles();
  };

  p5.draw = () => {
    // p5.background(25, 25, 42);
    // p5.rotateX(p5.frameCount * 0.01);
    // p5.rotateY(p5.frameCount * 0.01);
    p5.clear();
    for (let i = 0; i < triangles.length; i++) {
      triangles[i].update();
      triangles[i].display();
    }
  };
};
