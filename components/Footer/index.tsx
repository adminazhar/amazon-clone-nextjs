import React from 'react'
import { BackToTop } from './BackToTop'
import { BottomFooter } from './BottomFooter/Index'
import { MainFooter } from './MainFooter'

export const Footer = () => {
  return (
    <div>
        <BackToTop></BackToTop>
        <MainFooter></MainFooter>
        <BottomFooter></BottomFooter>
    </div>
  )
}
