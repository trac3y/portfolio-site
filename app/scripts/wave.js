var center, width, height, pathHeight;
var points = 10; // number of points in path
var path = new Path();
initializePath();

function initializePath() {
  center = view.center;
  width = view.size.width;
  height = view.size.height - 200;
  path.segments = [];
  path.add(view.bounds.topLeft);
  path.add(new Point(10, center.y));

  for (var i = 1; i < points; i++) {
    var point = new Point(width / points * i, center.y);
    path.add(point);
  }

  path.add(new Point(width-10, center.y));
  path.add(view.bounds.topRight);
  pathHeight = 200;
  path.fillColor = '#ff6b61';
}

function onFrame(event) {
  path.fillColor.hue += 1;

  for (var i = 1; i < points; i++) {
    var sinSeed = event.count + (i + i % 10) * 100;
    var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
		path.segments[i].point.y = yPos;
  }

  path.smooth({ type: 'continuous' });
}

function onResize(event) {
  initializePath();
}
