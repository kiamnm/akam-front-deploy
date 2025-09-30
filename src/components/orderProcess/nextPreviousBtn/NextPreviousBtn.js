import React from 'react'
import "./style.css"

export default function NextPreviousBtn({previosText,nextText,isPreviousEnable,isNextEnable,previousAction,nextAction}) {
  return (
    <div className='nextPrevious-btn-container d-flex justify-content-between '>
        <div onClick={previousAction} className={`privious fs_14 anjoman_regular px-3 py-1 rounded-1  text-center  ${isPreviousEnable?"bg_color_orange color_white cursor_pointer":"disable"}`}> {previosText}</div>
        <div onClick={nextAction} className={`privious fs_14 anjoman_regular px-3 py-1 rounded-1  text-center ${isNextEnable?"bg_color_orange color_white cursor_pointer":"disable"}`}> {nextText}</div>
    </div>
  )
}
