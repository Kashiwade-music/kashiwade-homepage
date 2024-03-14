import { P5CanvasInstance } from "@p5-wrapper/react";

export const p5bglines = (p5: P5CanvasInstance): void => {
  class AnimatedBaseLine {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    baseColor: any;
    highlightColor: any;
    currentColor: any;
    currentColorArray: Array<any>;
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
      this.currentColorArray = [];
      for (let i = 0; i <= frameWhenColorBecomesHighlight; i++) {
        this.currentColorArray.push(
          p5.lerpColor(
            this.baseColor,
            this.highlightColor,
            (i / frameWhenColorBecomesHighlight) ** 5
          )
        );
      }
      this.frame = 0;
      this.frameWhenColorBecomesHighlight = frameWhenColorBecomesHighlight;
      this.isIncreasing = true;
    }

    update() {
      if (
        this.isIncreasing &&
        this.frame < this.frameWhenColorBecomesHighlight
      ) {
        this.frame++;
        this.currentColor = this.currentColorArray[this.frame];
      } else if (
        this.isIncreasing &&
        this.frame == this.frameWhenColorBecomesHighlight
      ) {
        this.isIncreasing = false;
      } else if (!this.isIncreasing && this.frame > 0) {
        this.frame--;
        this.currentColor = this.currentColorArray[this.frame];
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

    forceDisplayAllLines() {
      p5.push();
      p5.stroke(p5.color(255, 255, 255));
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

    forceDisplayAllLines() {
      p5.push();
      p5.stroke(p5.color(255, 255, 255));
      p5.line(
        this.currentHighlightX,
        this.currentHighlightY,
        this.currentHighlightX + this.higelightLineLengthX,
        this.currentHighlightY + this.higelightLineLengthY
      );
      p5.line(
        this.currentHighlightX,
        this.currentHighlightY,
        this.currentHighlightX - this.higelightLineLengthX,
        this.currentHighlightY - this.higelightLineLengthY
      );
      p5.pop();
    }
  }

  const gradRatioFunction = (pos: number) => {
    if (pos > 0.6) {
      return 4.5 * (pos - 0.6);
    } else {
      return 0;
    }
  };

  const baselineHighlightColor = p5.color(172, 172, 190);
  const highlightColor = p5.color(244, 244, 246);
  let lineDistance = 0;
  const higelightLineLength = 400;
  const vel = 50;
  const ratio = 0.005;
  const blinkFrame = 100;

  let alphas: Array<number> = [];
  let lines: Array<AnimatedHighlightLine | AnimatedBaseLine> = [];

  let firstNonZeroOrOneIndexOfAlphas = 0;

  let possibleDrawnPixelIndices: Array<number> = [];

  const reCulculate = () => {
    alphas = [];
    lines = [];
    lineDistance = p5.height / 10;
    firstNonZeroOrOneIndexOfAlphas = 0;
    possibleDrawnPixelIndices = [];
    for (let i = 0; i < p5.width * p5.height * 4; i++) {
      if (i % 4 == 3) {
        alphas.push(
          1 -
            gradRatioFunction(
              Math.floor(Math.floor(i / 4) / p5.width) / p5.height
            )
        );
        // console.log(Math.floor(Math.floor(i / 4) / p5.width) / p5.height);

        if (
          alphas[i] != 0 &&
          alphas[i] != 1 &&
          firstNonZeroOrOneIndexOfAlphas == 0
        ) {
          firstNonZeroOrOneIndexOfAlphas = Math.floor(i / 4) * 4;
        }
      } else {
        alphas.push(0);
      }
    }

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

  const getPossibleDrawnPixelIndices = () => {
    let pDPI: Array<number> = [];
    for (let i = 0; i < lines.length; i++) {
      lines[i].forceDisplayAllLines();
    }

    p5.drawingContext.clearRect(0, p5.height * 0.85, p5.width, p5.height);

    p5.loadPixels();
    for (let i = 0; i < p5.pixels.length; i += 4) {
      if (
        p5.pixels[i] != 0 ||
        p5.pixels[i + 1] != 0 ||
        p5.pixels[i + 2] != 0 ||
        p5.pixels[i + 3] != 0
      ) {
        possibleDrawnPixelIndices.push(i);
      }
    }

    possibleDrawnPixelIndices = possibleDrawnPixelIndices.filter(
      (x) => x >= firstNonZeroOrOneIndexOfAlphas
    );
    possibleDrawnPixelIndices = Array.from(
      new Set(possibleDrawnPixelIndices)
    ).sort((a, b) => a - b);
    return pDPI;
  };

  p5.setup = () => {
    p5.frameRate(30);
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    reCulculate();
  };

  p5.windowResized = () => {
    p5.frameRate(30);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    reCulculate();
  };

  p5.draw = () => {
    p5.clear();
    for (let i = 0; i < lines.length; i++) {
      lines[i].update();
      lines[i].display();
    }
    // p5.drawingContext.clearRect(0, p5.height * 0.85, p5.width, p5.height);

    // p5.loadPixels();

    // possibleDrawnPixelIndices.forEach((i) => {
    //   p5.pixels[i + 3] *= alphas[i + 3];
    // });

    // p5.updatePixels();
  };
};
