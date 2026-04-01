function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nA9W6RqaRC":
        Script1();
        break;
      case "6ms0ikqoOJ3":
        Script2();
        break;
      case "6KXsFN3rwIZ":
        Script3();
        break;
      case "5sn7aPapXxV":
        Script4();
        break;
      case "6BfZ1WXqFuw":
        Script5();
        break;
      case "5vnZl6DPmuY":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6ZU3jgFOhat');
const duration = 750;
const easing = 'ease-out';
const id = '6pjJQ6bEx8X';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6gcNYOOpuBH');
const duration = 750;
const easing = 'ease-out';
const id = '6qyZZLWAqqa';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6Z9LJ4K5P4K');
const duration = 750;
const easing = 'ease-out';
const id = '62fLZwjseWK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
