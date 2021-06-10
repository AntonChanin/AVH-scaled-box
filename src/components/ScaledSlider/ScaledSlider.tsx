import { FC } from 'react';
import { css } from '@emotion/css';
import { ScaledSliderProps } from '../types';

export const ScaledSlider:FC<ScaledSliderProps> = ({numeric, step, handleChange, radius='100%', len=62, stepScale=-5, trackScale=1, thumbScale=8, color='gold', rotate=15 }) => {
  const constructSlider = (len: number, step: number, trackScale: number, thumbScale: number, color: string) => (
    `box-shadow: 1px 0px 0px ${thumbScale}px ${color}, ${Array(len).fill(``).map((x,i) => `${(i)*step}px 0 0 ${trackScale}px ${color},`).reduce((x,y) => x += y)} ${len*step}px 0 0 ${trackScale}px ${color}`
  );
  const mozCSS = `
    display: block;
    appearance: none;
    width: 100%;
    margin: 0;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50px;
    padding-left: 7px;
    padding-right: 10px;
    :focus {
      outline: none;
    }

    ::-moz-range-track, ::-moz-range-progress {
      width: 100%;
      height: 30px;
      background: linear-gradient(to bottom, #fff, #fff) 100% 50% / 100% 12px no-repeat transparent;
    }
    ::-moz-range-progress {
      background: linear-gradient(to bottom, #ffd701, #ffd701) 100% 50% / 100% 12px no-repeat transparent;
    }
    ::-moz-range-thumb {
      appearance: none;
      margin: 0;
      height: 12px;
      width: 12px;
      background: #000;
      border-radius: 100%;
      border: #ffd701 solid 8px;
      transition: background-color 150ms;
    }
    ::-ms-track {
      width: 100%;
      height: 30px;
      border: 0;
      color: transparent;
      background: transparent;
    }
    ::-ms-fill-lower {
      background: linear-gradient(to bottom, #0199ff, #0199ff) 100% 50% / 100% 3px no-repeat transparent;
    }
    ::-ms-fill-upper {
      background: linear-gradient(to bottom, #cfcfcf, #cfcfcf) 100% 50% / 100% 3px no-repeat transparent;
    }
    ::-ms-thumb {
      appearance: none;
      height: 13px;
      width: 13px;
      background: #000;
      border-radius: 100%;
      border: 0;
      transition: background-color 150ms;
      top: 0;
      margin: 0;
      box-shadow: none;
    }
    :hover::-moz-range-thumb, :focus::-moz-range-thumb {
      background-color: #000;
    }
    :hover::-ms-thumb, :focus::-ms-thumb {
      background-color: #000;
    }
    body {
      padding: 30px;
    }
  `;

  const webkitCSS = `
    -webkit-appearance: none;
    border-radius: 42%;
    width: 100%;
    overflow:hidden;
    :focus {
      outline:none;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor:pointer;
      background-color: #000;
      width: 10px;
      height: 10px;
      z-index:2;
    }
  `;

  return (
  <div className={css`
    display: block;
  `}>
    <div className={css`
      display: flex;
      justify-content: space-around;
      font-size: 1.3em;
      margin: 6px 30px;
      font-family: arial;
      font-weight: bolder;
    `}>{numeric && numeric.map(
        (num:number, i:number) => (
          <span key={`num-${i}-${step}-${numeric}-${numeric.length}`}>{`${num}`}</span>
        )
      )}</div>
      <div className={css`
        margin: 0 40px;
        width: 100%;
      `}>
        <input className={css`
          background: #0000;
          ${webkitCSS}
          ${mozCSS}
          height: ${thumbScale*trackScale*3 + 2}px;
          ::-webkit-slider-thumb {
            ${constructSlider(len, stepScale, trackScale, thumbScale, color)};
            border-radius: ${radius};
          }
          :active {
            filter: hue-rotate(${rotate}deg);
          }
        `} type="range" min={`${numeric ? numeric[0] : 1}`} step={`${step}`} max={`${numeric ? numeric[numeric.length - 1] : 100}`} onChange={handleChange} />
      </div>
   </div>
)};