export default function loader() {
  let loader = {
    width: 100,
    height: 100,

    stepsPerFrame: 1,
    trailLength: 1,
    pointDistance: 0.02,
    fps: 60,

    fillColor: "#0d6efd",

    step: function (point, index) {
      this._.beginPath();
      this._.moveTo(point.x, point.y);
      this._.arc(point.x, point.y, index * 7, 0, Math.PI * 2, false);
      this._.closePath();
      this._.fill();
    },

    path: [["arc", 50, 50, 30, 0, 360]],
  };

  let div = document.createElement("div");
  let loaderDraw = new Sonic(loader);

  div.id = 'loader';
  div.className = 'position-absolute sonic start-50 top-50 translate-middle';

  div.appendChild(loaderDraw.canvas);
  document.body.appendChild(div);
  loaderDraw.play();
};
