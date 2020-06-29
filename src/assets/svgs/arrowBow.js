import React from 'react';

const ArrowBow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="175"
    height="151"
    viewBox="0 0 175 151"
  >
    <defs>
      <filter
        id="Rectangle_1906"
        x="0"
        y="0"
        width="175"
        height="151"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="8" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="11.5" result="blur" />
        <feFlood flood-opacity="0.071" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_711" data-name="Group 711" transform="translate(34.5 -346.5)">
      <g
        transform="matrix(1, 0, 0, 1, -34.5, 346.5)"
        filter="url(#Rectangle_1906)"
      >
        <rect
          id="Rectangle_1906-2"
          data-name="Rectangle 1906"
          width="106"
          height="82"
          rx="6"
          transform="translate(34.5 26.5)"
          fill="#fff"
        />
      </g>
      <rect
        id="Rectangle_1907"
        data-name="Rectangle 1907"
        width="98"
        height="74"
        rx="4"
        transform="translate(4 377)"
        fill="#38bdba"
        opacity="0.15"
      />
      <g
        id="Group_702"
        data-name="Group 702"
        transform="translate(-1148.179 -224)"
      >
        <circle
          id="Ellipse_799"
          data-name="Ellipse 799"
          cx="19.814"
          cy="19.814"
          r="19.814"
          transform="translate(1178.736 621.371)"
          fill="#da4836"
        />
        <circle
          id="Ellipse_800"
          data-name="Ellipse 800"
          cx="14.41"
          cy="14.41"
          r="14.41"
          transform="translate(1184.14 626.775)"
          fill="#f2f2f2"
        />
        <circle
          id="Ellipse_801"
          data-name="Ellipse 801"
          cx="9.007"
          cy="9.007"
          r="9.007"
          transform="translate(1189.544 632.179)"
          fill="#da4836"
        />
        <circle
          id="Ellipse_802"
          data-name="Ellipse 802"
          cx="3.603"
          cy="3.603"
          r="3.603"
          transform="translate(1194.948 637.583)"
          fill="#f2f2f2"
        />
        <path
          id="Path_4429"
          data-name="Path 4429"
          d="M348.69,13.51v-5.4L356.8,0V5.4h5.4l-8.106,8.106Z"
          transform="translate(862.47 615.067)"
          fill="#29abe2"
        />
        <g
          id="Group_701"
          data-name="Group 701"
          transform="translate(1197.914 626.403)"
        >
          <path
            id="Path_4430"
            data-name="Path 4430"
            d="M234.287,112.382l-14.146,14.146-1.274-1.274,14.146-14.146Z"
            transform="translate(-218.867 -111.108)"
            fill="#754c24"
          />
        </g>
        <path
          id="Path_4433"
          data-name="Path 4433"
          d="M354.358,38.276l-1.165,1.165V35.31l-1.8,1.8v4.13l-2.7,2.7v1.274h1.273l5.668-5.668Z"
          transform="translate(862.47 583.359)"
          fill="#0071bc"
        />
      </g>
    </g>
  </svg>
);

export default ArrowBow