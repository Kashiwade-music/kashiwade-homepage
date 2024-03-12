import * as vanilla from "./background.css";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const backgroundSketch = (p5: P5CanvasInstance): void => {
  class AnimatedBaseLine {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    baseColor: any;
    highlightColor: any;
    currentColor: any;
    frame: number;
    frameWhenColorBecomesHighlight: number;
    isIncreasing: boolean;
    constructor(
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      highlightColor: any,
      frameWhenColorBecomesHighlight: any
    ) {
      this.fromX = fromX;
      this.fromY = fromY;
      this.toX = toX;
      this.toY = toY;
      this.baseColor = p5.color(255, 255, 255, 0);
      this.highlightColor = highlightColor;
      this.currentColor = p5.color(255, 255, 255, 0);
      this.frame = 1;
      this.frameWhenColorBecomesHighlight = frameWhenColorBecomesHighlight;
      this.isIncreasing = true;
    }

    update() {
      if (
        this.isIncreasing &&
        this.frame < this.frameWhenColorBecomesHighlight
      ) {
        this.frame++;
        this.currentColor = p5.lerpColor(
          this.baseColor,
          this.highlightColor,
          (this.frame / this.frameWhenColorBecomesHighlight) ** 5
        );
      } else if (
        this.isIncreasing &&
        this.frame == this.frameWhenColorBecomesHighlight
      ) {
        this.isIncreasing = false;
      } else if (!this.isIncreasing && this.frame > 0) {
        this.frame--;
        this.currentColor = p5.lerpColor(
          this.baseColor,
          this.highlightColor,
          (this.frame / this.frameWhenColorBecomesHighlight) ** 5
        );
      } else if (!this.isIncreasing && this.frame == 0) {
        this.isIncreasing = true;
      }
    }

    display() {
      p5.push();
      p5.stroke(this.currentColor);
      p5.line(this.fromX, this.fromY, this.toX, this.toY);
      p5.pop();
    }
  }

  class AnimatedHighlightLine {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    velX: number;
    velY: number;
    baseColor: any;
    highlightColor: any;
    higelightLineLengthX: number;
    higelightLineLengthY: number;
    currentHighlightX: number;
    currentHighlightY: number;
    shouldRun: boolean;
    isRunning: boolean;
    ratio: number;
    constructor(
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      vel: number,
      highlightColor: any,
      higelightLineLength: any,
      ratio: number
    ) {
      this.fromX = fromX;
      this.fromY = fromY;
      this.toX = toX;
      this.toY = toY;
      this.velX = (vel * (toX - fromX)) / p5.dist(fromX, fromY, toX, toY);
      this.velY = (vel * (toY - fromY)) / p5.dist(fromX, fromY, toX, toY);
      this.baseColor = p5.color(255, 255, 255, 0);
      this.highlightColor = highlightColor;
      this.higelightLineLengthX =
        ((higelightLineLength * (toX - fromX)) /
          p5.dist(fromX, fromY, toX, toY)) *
        0.5;
      this.higelightLineLengthY =
        ((higelightLineLength * (toY - fromY)) /
          p5.dist(fromX, fromY, toX, toY)) *
        0.5;
      this.currentHighlightX = this.fromX - this.higelightLineLengthX;
      this.currentHighlightY = this.fromY - this.higelightLineLengthY;
      this.shouldRun = false;
      this.isRunning = false;
      this.ratio = ratio;
    }
    gradientLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color1: any,
      color2: any
    ) {
      // linear gradient from start to end of line
      var grad = p5.drawingContext.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);

      p5.drawingContext.strokeStyle = grad;

      p5.line(x1, y1, x2, y2);
    }
    update() {
      // 50% chance that shouldRun is True
      if (p5.random(1) < this.ratio) {
        this.shouldRun = true;
        this.isRunning = true;
      }
      if (this.isRunning) {
        this.currentHighlightX += this.velX;
        this.currentHighlightY += this.velY;
      }
      if (
        (this.velX > 0 && this.currentHighlightX > this.toX) ||
        (this.velX < 0 && this.currentHighlightX < this.toX) ||
        (this.velY > 0 && this.currentHighlightY > this.toY) ||
        (this.velY < 0 && this.currentHighlightY < this.toY)
      ) {
        this.currentHighlightX = this.fromX - this.higelightLineLengthX;
        this.currentHighlightY = this.fromY - this.higelightLineLengthY;
        this.isRunning = false;
        this.shouldRun = false;
      }
    }

    display() {
      p5.push();
      p5.stroke(this.highlightColor);
      this.gradientLine(
        this.currentHighlightX,
        this.currentHighlightY,
        this.currentHighlightX + this.higelightLineLengthX,
        this.currentHighlightY + this.higelightLineLengthY,

        this.highlightColor,
        this.baseColor
      );
      this.gradientLine(
        this.currentHighlightX,
        this.currentHighlightY,
        this.currentHighlightX - this.higelightLineLengthX,
        this.currentHighlightY - this.higelightLineLengthY,
        this.highlightColor,
        this.baseColor
      );
      p5.pop();
    }
  }

  let lines: Array<AnimatedHighlightLine | AnimatedBaseLine> = [];
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    const baselineHighlightColor = p5.color(172, 172, 190);
    const highlightColor = p5.color(244, 244, 246);
    let lineDistance = p5.height / 10;
    let higelightLineLength = 400;
    let vel = 50;
    let ratio = 0.0025;
    let blinkFrame = 200;

    // Diagonally upward 60-degree line
    let fromY = 0;
    let toY = -20;
    while (toY < p5.height) {
      fromY += lineDistance;
      let toX = p5.width;
      toY = fromY - p5.width / p5.sqrt(3);
      lines.push(
        new AnimatedHighlightLine(
          0,
          fromY,
          toX,
          toY,
          vel,
          highlightColor,
          higelightLineLength,
          ratio
        )
      );
      lines.push(
        new AnimatedBaseLine(
          0,
          fromY,
          toX,
          toY,
          baselineHighlightColor,
          blinkFrame
        )
      );

      lines.push(
        new AnimatedHighlightLine(
          0,
          fromY,
          toX,
          fromY + p5.width / p5.sqrt(3),
          vel,
          highlightColor,
          higelightLineLength,
          ratio
        )
      );
      lines.push(
        new AnimatedBaseLine(
          0,
          fromY,
          toX,
          fromY + p5.width / p5.sqrt(3),
          baselineHighlightColor,
          blinkFrame
        )
      );
    }

    fromY = 0;
    toY = 100;
    while (toY > 0) {
      let toX = p5.width;
      toY = fromY + p5.width / p5.sqrt(3);
      lines.push(
        new AnimatedHighlightLine(
          0,
          fromY,
          toX,
          toY,
          vel,
          highlightColor,
          higelightLineLength,
          ratio
        )
      );
      lines.push(
        new AnimatedBaseLine(
          0,
          fromY,
          toX,
          toY,
          baselineHighlightColor,
          blinkFrame
        )
      );
      fromY -= lineDistance;
    }

    lineDistance = lineDistance * p5.sqrt(3) * 0.5;
    let fromX = lineDistance;
    while (fromX < p5.width) {
      lines.push(
        new AnimatedBaseLine(
          fromX,
          0,
          fromX,
          p5.width + 10,
          baselineHighlightColor,
          blinkFrame
        )
      );
      fromX += lineDistance;
    }
  };

  p5.draw = () => {
    p5.background(0, 0, 0, 0);
    p5.clear();
    for (let i = 0; i < lines.length; i++) {
      lines[i].update();
      lines[i].display();
    }
  };
};

const Background: React.FC = () => {
  return (
    <div className={vanilla.BackgroundWrapper}>
      <StaticImage
        src="../../../resources/common/bg.png"
        alt="hero"
        className={vanilla.BackgroundImage}
        quality={95}
      />
      <StaticImage
        src="../../../resources/common/bg2.png"
        alt="hero"
        className={vanilla.BackgroundImage2}
        quality={95}
      />
      <div style={{ mixBlendMode: "overlay", zIndex: -90 }}>
        <ReactP5Wrapper sketch={backgroundSketch} />
      </div>
    </div>
  );
};

export default Background;
