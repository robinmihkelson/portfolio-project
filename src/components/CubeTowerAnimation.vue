<template>
    <div class="cube-container">
      <div class="scene">
        <div class="column" v-for="col in 12" :key="`column-${col}`">
          <div class="box" v-for="box in 6" :key="`box-${col}-${box}`">
            <i v-for="face in 6" :key="`face-${col}-${box}-${face}`"></i>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CubeTowerAnimation',
  }
  </script>
  
  <style scoped>
  .cube-container {
    background-color: #000;
    min-height: 100vh;
    display: grid;
    place-items: center;
    perspective: 800px;
    overflow: hidden;
  }
  
  .cube-container * {
    transform-style: preserve-3d;
  }
  
  .scene {
    position: relative;
    transform: rotateX(-30deg) rotateY(-60deg);
    font-size: 60px;
    animation: sceneRotate 60s infinite linear;
  }
  
  @keyframes sceneRotate {
    from { transform: rotateX(-30deg) rotateY(0deg); }
    to { transform: rotateX(-30deg) rotateY(360deg); }
  }
  
  .column {
    position: absolute;
    transform: rotateY(var(--ry)) translateX(2.8em);
  }
  
  /* Define the rotation values for each column */
  .column:nth-child(1) { --ry: 0deg; }
  .column:nth-child(2) { --ry: 30deg; }
  .column:nth-child(3) { --ry: 60deg; }
  .column:nth-child(4) { --ry: 90deg; }
  .column:nth-child(5) { --ry: 120deg; }
  .column:nth-child(6) { --ry: 150deg; }
  .column:nth-child(7) { --ry: 180deg; }
  .column:nth-child(8) { --ry: 210deg; }
  .column:nth-child(9) { --ry: 240deg; }
  .column:nth-child(10) { --ry: 270deg; }
  .column:nth-child(11) { --ry: 300deg; }
  .column:nth-child(12) { --ry: 330deg; }
  
  .box {
    position: absolute;
    width: 1em;
    height: 1em;
    transform-origin: top left;
  }
  
  /* Set delays for each box in a column */
  .box:nth-child(1) { --delay: 0s; }
  .box:nth-child(2) { --delay: -2s; }
  .box:nth-child(3) { --delay: -4s; }
  .box:nth-child(4) { --delay: -6s; }
  .box:nth-child(5) { --delay: -8s; }
  .box:nth-child(6) { --delay: -10s; }
  
  /* Common animation for all boxes */
  .box {
    animation: boxTranslate 12s var(--delay) infinite linear;
  }
  
  @keyframes boxTranslate {
    from { translate: 0 1em; }
    to { translate: 0 7em; }
  }
  
  /* Column-specific animations */
  .column:nth-child(1) .box {
    animation: boxRotate0 12s var(--delay) infinite ease-in-out,
              boxTop0 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(2) .box {
    animation: boxRotate1 12s var(--delay) infinite ease-in-out,
              boxTop1 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(3) .box {
    animation: boxRotate2 12s var(--delay) infinite ease-in-out,
              boxTop2 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(4) .box {
    animation: boxRotate3 12s var(--delay) infinite ease-in-out,
              boxTop3 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(5) .box {
    animation: boxRotate4 12s var(--delay) infinite ease-in-out,
              boxTop4 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(6) .box {
    animation: boxRotate5 12s var(--delay) infinite ease-in-out,
              boxTop5 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(7) .box {
    animation: boxRotate6 12s var(--delay) infinite ease-in-out,
              boxTop6 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(8) .box {
    animation: boxRotate7 12s var(--delay) infinite ease-in-out,
              boxTop7 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(9) .box {
    animation: boxRotate8 12s var(--delay) infinite ease-in-out,
              boxTop8 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(10) .box {
    animation: boxRotate9 12s var(--delay) infinite ease-in-out,
              boxTop9 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(11) .box {
    animation: boxRotate10 12s var(--delay) infinite ease-in-out,
              boxTop10 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  .column:nth-child(12) .box {
    animation: boxRotate11 12s var(--delay) infinite ease-in-out,
              boxTop11 12s var(--delay) infinite step-end,
              boxTranslate 12s var(--delay) infinite linear;
  }
  
  /* Animation keyframes for each column */
  @keyframes boxRotate0 {
    0%, 20% { rotate: 0.25turn; }
    24%, 26%, 28%, 30%, 32% { rotate: -0.25turn; animation-timing-function: step-end; }
    24%, 26%, 28%, 30%, 32% { rotate: 0turn; }
    36%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop0 {
    0%, 20% { top: 0; }
    24% { top: -1em; }
    26% { top: -2em; }
    28% { top: -3em; }
    30% { top: -4em; }
    32% { top: -5em; }
  }
  
  @keyframes boxRotate1 {
    0%, 16% { rotate: 0.25turn; }
    20%, 22%, 24%, 26%, 28% { rotate: -0.25turn; animation-timing-function: step-end; }
    20%, 22%, 24%, 26%, 28% { rotate: 0turn; }
    32%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop1 {
    0%, 16% { top: 0; }
    20% { top: -1em; }
    22% { top: -2em; }
    24% { top: -3em; }
    26% { top: -4em; }
    28% { top: -5em; }
  }
  
  @keyframes boxRotate2 {
    0%, 12% { rotate: 0.25turn; }
    16%, 18%, 20%, 22%, 24% { rotate: -0.25turn; animation-timing-function: step-end; }
    16%, 18%, 20%, 22%, 24% { rotate: 0turn; }
    28%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop2 {
    0%, 12% { top: 0; }
    16% { top: -1em; }
    18% { top: -2em; }
    20% { top: -3em; }
    22% { top: -4em; }
    24% { top: -5em; }
  }
  
  @keyframes boxRotate3 {
    0%, 8% { rotate: 0.25turn; }
    12%, 14%, 16%, 18%, 20% { rotate: -0.25turn; animation-timing-function: step-end; }
    12%, 14%, 16%, 18%, 20% { rotate: 0turn; }
    24%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop3 {
    0%, 8% { top: 0; }
    12% { top: -1em; }
    14% { top: -2em; }
    16% { top: -3em; }
    18% { top: -4em; }
    20% { top: -5em; }
  }
  
  @keyframes boxRotate4 {
    0%, 4% { rotate: 0.25turn; }
    8%, 10%, 12%, 14%, 16% { rotate: -0.25turn; animation-timing-function: step-end; }
    8%, 10%, 12%, 14%, 16% { rotate: 0turn; }
    20%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop4 {
    0%, 4% { top: 0; }
    8% { top: -1em; }
    10% { top: -2em; }
    12% { top: -3em; }
    14% { top: -4em; }
    16% { top: -5em; }
  }
  
  @keyframes boxRotate5 {
    0%, 25% { rotate: 0.25turn; }
    29%, 31%, 33%, 35%, 37% { rotate: -0.25turn; animation-timing-function: step-end; }
    29%, 31%, 33%, 35%, 37% { rotate: 0turn; }
    41%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop5 {
    0%, 25% { top: 0; }
    29% { top: -1em; }
    31% { top: -2em; }
    33% { top: -3em; }
    35% { top: -4em; }
    37% { top: -5em; }
  }
  
  @keyframes boxRotate6 {
    0%, 30% { rotate: 0.25turn; }
    34%, 36%, 38%, 40%, 42% { rotate: -0.25turn; animation-timing-function: step-end; }
    34%, 36%, 38%, 40%, 42% { rotate: 0turn; }
    46%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop6 {
    0%, 30% { top: 0; }
    34% { top: -1em; }
    36% { top: -2em; }
    38% { top: -3em; }
    40% { top: -4em; }
    42% { top: -5em; }
  }
  
  @keyframes boxRotate7 {
    0%, 35% { rotate: 0.25turn; }
    39%, 41%, 43%, 45%, 47% { rotate: -0.25turn; animation-timing-function: step-end; }
    39%, 41%, 43%, 45%, 47% { rotate: 0turn; }
    51%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop7 {
    0%, 35% { top: 0; }
    39% { top: -1em; }
    41% { top: -2em; }
    43% { top: -3em; }
    45% { top: -4em; }
    47% { top: -5em; }
  }
  
  @keyframes boxRotate8 {
    0%, 40% { rotate: 0.25turn; }
    44%, 46%, 48%, 50%, 52% { rotate: -0.25turn; animation-timing-function: step-end; }
    44%, 46%, 48%, 50%, 52% { rotate: 0turn; }
    56%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop8 {
    0%, 40% { top: 0; }
    44% { top: -1em; }
    46% { top: -2em; }
    48% { top: -3em; }
    50% { top: -4em; }
    52% { top: -5em; }
  }
  
  @keyframes boxRotate9 {
    0%, 45% { rotate: 0.25turn; }
    49%, 51%, 53%, 55%, 57% { rotate: -0.25turn; animation-timing-function: step-end; }
    49%, 51%, 53%, 55%, 57% { rotate: 0turn; }
    61%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop9 {
    0%, 45% { top: 0; }
    49% { top: -1em; }
    51% { top: -2em; }
    53% { top: -3em; }
    55% { top: -4em; }
    57% { top: -5em; }
  }
  
  @keyframes boxRotate10 {
    0%, 50% { rotate: 0.25turn; }
    54%, 56%, 58%, 60%, 62% { rotate: -0.25turn; animation-timing-function: step-end; }
    54%, 56%, 58%, 60%, 62% { rotate: 0turn; }
    66%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop10 {
    0%, 50% { top: 0; }
    54% { top: -1em; }
    56% { top: -2em; }
    58% { top: -3em; }
    60% { top: -4em; }
    62% { top: -5em; }
  }
  
  @keyframes boxRotate11 {
    0%, 55% { rotate: 0.25turn; }
    59%, 61%, 63%, 65%, 67% { rotate: -0.25turn; animation-timing-function: step-end; }
    59%, 61%, 63%, 65%, 67% { rotate: 0turn; }
    71%, 100% { rotate: -0.5turn; }
  }
  @keyframes boxTop11 {
    0%, 55% { top: 0; }
    59% { top: -1em; }
    61% { top: -2em; }
    63% { top: -3em; }
    65% { top: -4em; }
    67% { top: -5em; }
  }
  
  .box i {
    --gap: 0.05em;
    position: absolute;
    inset: var(--gap);
    background-color: #0B0C10;
    border: 2px #66FCF1 solid;
    box-shadow: 0 0 0.5em #66FCF1 inset;
  }
  
  .box i:nth-child(1) { transform: translateZ(calc(0.5em - var(--gap))); }
  .box i:nth-child(2) { transform: rotateY(90deg) translateZ(calc(0.5em - var(--gap))); }
  .box i:nth-child(3) { transform: rotateY(180deg) translateZ(calc(0.5em - var(--gap))); }
  .box i:nth-child(4) { transform: rotateY(270deg) translateZ(calc(0.5em - var(--gap))); }
  .box i:nth-child(5) { transform: rotateX(270deg) translateZ(calc(0.5em - var(--gap))); }
  .box i:nth-child(6) { transform: rotateX(90deg) translateZ(calc(0.5em - var(--gap))); }
  </style>