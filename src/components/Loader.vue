<template>
  <div class="loader">
    <div class="loader-tube-tunnel"></div>
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style>
.loader-tube-tunnel {
	width: 49px;
	height: 49px;
	margin: 0 auto;
	border: 4px solid;
	border-radius: 50%;
	border-color: rgb(0,0,0);
	animation: loader-scale 1035ms infinite linear;
  -o-animation: loader-scale 1035ms infinite linear;
  -ms-animation: loader-scale 1035ms infinite linear;
  -webkit-animation: loader-scale 1035ms infinite linear;
  -moz-animation: loader-scale 1035ms infinite linear;
}

@keyframes loader-scale {
	0% { transform: scale(0); transform: scale(0); }
	90% { transform: scale(0.7); transform: scale(0.7); }
	100% { transform: scale(1); transform: scale(1); }
}

@-o-keyframes loader-scale {
	0% { -o-transform: scale(0); transform: scale(0); }
	90% { -o-transform: scale(0.7); transform: scale(0.7); }
	100% { -o-transform: scale(1); transform: scale(1); }
}

@-ms-keyframes loader-scale {
	0% { -ms-transform: scale(0); transform: scale(0); }
	90% { -ms-transform: scale(0.7); transform: scale(0.7); }
	100% { -ms-transform: scale(1); transform: scale(1); }
}

@-webkit-keyframes loader-scale {
	0% { -webkit-transform: scale(0); transform: scale(0); }
	90% { -webkit-transform: scale(0.7); transform: scale(0.7); }
	100% { -webkit-transform: scale(1); transform: scale(1); }
}

@-moz-keyframes loader-scale {
	0% { -moz-transform: scale(0); transform: scale(0); }
	90% { -moz-transform: scale(0.7); transform: scale(0.7); }
	100% { -moz-transform: scale(1); transform: scale(1); }
}
</style>

