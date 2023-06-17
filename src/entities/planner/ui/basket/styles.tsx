import styled from "styled-components";
import {Swiper} from "swiper/react";

export const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  max-width: calc(1440px / 2);
`

export const BasketItems = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`

export const SwiperStyled = styled(Swiper)`
  width: 100%;
`

export const BasketSelected = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-transform: capitalize;
  letter-spacing: 1px;
`

export const ButtonWrapper = styled.div`
  width: 25%;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Button = styled.button`
  width: 100px;
  all: unset;
  position: absolute;
  bottom: 0;
  right: 0;
  background: gray;
  color: white;
  font-size: 20px;
  padding: 11px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: black;
  }
`
export const InputWrapper = styled.div`
  height: 32px;
  width: 64px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
  /*Using a background color, but you can use a background image to represent a button*/
  background: gray;
  color: white;
  font-size: 20px;
  padding: 6px;
  line-height: 32px;
  border-radius: 10px;
`
export const Input = styled.input`
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  /*This makes the button huge. If you want a bigger button, increase the font size*/
  font-size: 50px;
  /*Opacity settings for all browsers*/
  opacity: 0;
  -moz-opacity: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0)
`