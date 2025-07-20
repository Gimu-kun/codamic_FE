import React from 'react'

export default function ClipPathShape() {
  return (
    <svg  viewBox='0 0'>
        <clipPath id='clipPath'>
            <path fill='green' stroke='red' d='M 720 40 C 800 40 800 160 720 160 L 80 160 C 0 160 0 40 80 40 Z'></path>
        </clipPath>
    </svg>
  )
}
