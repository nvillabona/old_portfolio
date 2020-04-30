<template>
  <!-- <svg class="NuxtLogo" width="245" height="180" viewBox="0 0 452 342" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <path
        d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z"
        fill="#00C58E"
      />
      <path
        d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z"
        fill="#108775"
      />
      <path
        d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z"
        fill="#2F495E"
        fill-rule="nonzero"
      />
    </g>
  </svg>-->
  <svg
    class="NuxtLogo"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 640 640"
    width="640"
    height="640"
  >
    <defs>
      <path d="M255.5 177.98L255.5 449.98L199.5 449.98L202.5 177.98L255.5 177.98Z" id="b19DIWlDmm" />
      <path d="M384.5 175.98L440.5 175.98L440.5 447.98L384.5 447.98L384.5 175.98Z" id="a1ye4iG3q2" />
      <path d="M255.5 177.98L440.5 449.98L378.5 449.98L202.5 177.98" id="dqBkemw0z" />
    </defs>
    <g>
      <g>
        <g>
          <g>
            <filter
              id="shadow4094186"
              x="190.5"
              y="168.98"
              width="75"
              height="291"
              filterUnits="userSpaceOnUse"
              primitiveUnits="userSpaceOnUse"
            >
              <feFlood />
              <feComposite in2="SourceAlpha" operator="in" />
              <feGaussianBlur stdDeviation="1" />
              <feOffset dx="1" dy="1" result="afterOffset" />
              <feFlood flood-color="#000000" flood-opacity="0.5" />
              <feComposite in2="afterOffset" operator="in" />
              <feMorphology operator="dilate" radius="1" />
              <feComposite in2="SourceAlpha" operator="out" />
            </filter>
            <path
              d="M255.5 177.98L255.5 449.98L199.5 449.98L202.5 177.98L255.5 177.98Z"
              id="aNy1w38mj"
              fill="white"
              fill-opacity="1"
              filter="url(#shadow4094186)"
            />
          </g>
          <use xlink:href="#b19DIWlDmm" opacity="1" fill="#00c58e" fill-opacity="1" />
        </g>
        <g>
          <g>
            <filter
              id="shadow629548"
              x="375.5"
              y="166.98"
              width="75"
              height="291"
              filterUnits="userSpaceOnUse"
              primitiveUnits="userSpaceOnUse"
            >
              <feFlood />
              <feComposite in2="SourceAlpha" operator="in" />
              <feGaussianBlur stdDeviation="1" />
              <feOffset dx="1" dy="1" result="afterOffset" />
              <feFlood flood-color="#000000" flood-opacity="0.5" />
              <feComposite in2="afterOffset" operator="in" />
              <feMorphology operator="dilate" radius="1" />
              <feComposite in2="SourceAlpha" operator="out" />
            </filter>
            <path
              d="M384.5 175.98L440.5 175.98L440.5 447.98L384.5 447.98L384.5 175.98Z"
              id="b1gh6lUXcf"
              fill="white"
              fill-opacity="1"
              filter="url(#shadow629548)"
            />
          </g>
          <use xlink:href="#a1ye4iG3q2" opacity="1" fill="#108775" fill-opacity="1" />
        </g>
        <g>
          <g>
            <filter
              id="shadow7148948"
              x="193.5"
              y="168.98"
              width="257"
              height="291"
              filterUnits="userSpaceOnUse"
              primitiveUnits="userSpaceOnUse"
            >
              <feFlood />
              <feComposite in2="SourceAlpha" operator="in" />
              <feGaussianBlur stdDeviation="1" />
              <feOffset dx="1" dy="1" result="afterOffset" />
              <feFlood flood-color="#000000" flood-opacity="0.5" />
              <feComposite in2="afterOffset" operator="in" />
              <feMorphology operator="dilate" radius="1" />
              <feComposite in2="SourceAlpha" operator="out" />
            </filter>
            <path
              d="M255.5 177.98L440.5 449.98L378.5 449.98L202.5 177.98"
              id="ctDEKvodj"
              fill="none"
              stroke="white"
              filter="url(#shadow7148948)"
            />
          </g>
          <use xlink:href="#dqBkemw0z" opacity="1" fill="#2f495e" fill-opacity="1" />
          <g>
            <use
              xlink:href="#dqBkemw0z"
              opacity="1"
              fill-opacity="0"
              stroke="#2f495e"
              stroke-width="1"
              stroke-opacity="1"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
