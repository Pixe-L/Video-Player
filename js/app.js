const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

function handlePlay() {
	$video.play();
	$play.hidden = true;
	$pause.hidden = false;
	console.log('Le diste click al botón de play');
}

function handlePause() {
	$video.pause();
	$play.hidden = false;
	$pause.hidden = true;
	console.log('Le diste click al botón de pause');
}

$backward.addEventListener('click', handleBackward);

function handleBackward() {
	// $video.currentTime = $video.currentTime - 10;
	$video.currentTime -= 10;
	console.log('Retroceder 10 segundos');
}

$forward.addEventListener('click', handleForward);

function handleForward() {
	// $video.currentTime = $video.currentTime + 10
	$video.currentTime += 10;
	console.log('Adelantar 10 segundos', $video.currentTime);
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

const $progress = document.querySelector('#progress');
function handleLoaded() {
	$progress.max = $video.duration;
	console.log('Video cargado', $video.duration);
}

function handleTimeUpdate() {
	$progress.value = $video.currentTime;
	console.log('Tiempo actual	', $video.currentTime);
}

$progress.addEventListener('input', hadleInput);

function hadleInput() {
	$video.currentTime = $progress.value;
	console.log($progress.value);
}
