var display = new SegmentDisplay("display");
display.pattern         = "##:##:##";
display.cornerType      = 2;
display.displayType     = 7;
display.displayAngle    = 9;
display.digitHeight     = 20;
display.digitWidth      = 12;
display.digitDistance   = 2;
display.segmentWidth    = 3;
display.segmentDistance = 0.5;
display.colorOn         = "rgba(0, 0, 0, 0.9)";
display.colorOff        = "rgba(0, 0, 0, 0.1)";

function animate() {
  var time    = new Date();
  var hours   = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var value   = ((hours < 10) ? ' ' : '') + hours
                + ':' + ((minutes < 10) ? '0' : '') + minutes
                + ':' + ((seconds < 10) ? '0' : '') + seconds;
  display.setValue(value);
  window.setTimeout('animate()', 100);
}

animate();