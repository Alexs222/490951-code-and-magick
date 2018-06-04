'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_VERTIKAL = 10;
var GAP_HORISONTAL = 50;
var GAP_SHADOW = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 16;
var TEXT_GAP = 10;
var TEXT_FONT = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = TEXT_FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + (TEXT_HEIGHT + TEXT_GAP) * 1);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + (TEXT_HEIGHT + TEXT_GAP) * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_HORISONTAL) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP_VERTIKAL, BAR_WIDTH, ((BAR_HEIGHT * times[i]) / maxTime) * (-1));
    } else {
      ctx.fillStyle = 'rgba(10, 65, 204, ' + ((Math.floor(Math.random() * 10)) / 10);
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_HORISONTAL) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - GAP_VERTIKAL, BAR_WIDTH, ((BAR_HEIGHT * times[i]) / maxTime) * (-1));
    }

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_HORISONTAL) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_VERTIKAL);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + GAP_HORISONTAL) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_VERTIKAL - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_HEIGHT - GAP_VERTIKAL);
  }
};
