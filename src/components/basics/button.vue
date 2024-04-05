<template>
  <button class="Button">
    <p>{{ config.label }}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M268 112l144 144l-144 144"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M392 256H100"
      ></path>
    </svg>
  </button>
</template>

<script setup lang="ts">

defineProps<{
  config: any
}>()
</script>

<style scoped>
button {
  min-width: 40px;
  min-height: 40px;
  border-radius: 25px;
  animation: movedefault .5s forwards;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: black;
  border: none;
}

svg {
  width: 16px;
  height: auto;
  color: white;
  position: absolute;
  right: 12px;
  top: 12px;
}

button:hover {
  animation: moveup .5s forwards;
}

button:hover p {
  animation: moveleft .7s forwards;
}

p {
  left: 45px;
  visibility: hidden;
  animation: moverightdefault .7s forwards;
  position: absolute;
  left: 45px;
  top: 12px;
  text-wrap: nowrap;
  pointer-events: none;
  color: white;
  font-style: 16px;
}

@keyframes movedefault {
  0% {
    width: 150px;
  }
  100% {
    width: 40px;
  }
}

@keyframes moveup {
  0% {
    width: 40px;
  }
  100% {
    width: 150px;
  }
}

@keyframes moverightdefault {
  0% {
    left: 25px;
    visibility: visible;
  }
  50% {
    left: 45px;
  }
  100% {
    left: 45px;
    visibility: hidden;
  }
}

@keyframes moveleft {
  0% {
    left: 45px;
    visibility: hidden;
  }
  50% {
    left: 25px;
  }
  100% {
    left: 25px;
    visibility: visible;
  }
}
</style>