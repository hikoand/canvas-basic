window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  /////////////////////// x,y,width,height

  //   ctx.fillRect(300, 300, 200, 200); //채우기

  //   ctx.strokeStyle = 'red'; //style은 항상 rect 그리기 위에 위치
  //   ctx.lineWidth = 5;
  //   ctx.strokeRect(100, 100, 200, 200); //선

  //   ctx.strokeStyle = 'blue';
  //   ctx.lineWidth = 2;
  //   ctx.strokeRect(200, 200, 200, 200); //선

  /////////////////////// CTX 점 시작 경로
  //   ctx.beginPath();
  //   ctx.moveTo(100, 100);
  //   ctx.lineTo(200, 100);
  //   ctx.lineTo(200, 150);
  //   ctx.closePath()
  //   ctx.stroke();

  //variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'yellow';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  //Eventlistners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
});

// window.addEventListener('resize', )
