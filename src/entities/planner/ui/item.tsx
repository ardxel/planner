import styled from "styled-components";
import {FC, MouseEvent} from "react";
import Draggable, {DraggableProps} from "react-draggable";

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`

interface PlannerItemProps extends DraggableProps {
  src: string;
  onClick?: () => void
}

export const PlannerItem: FC<PlannerItemProps> = ({src, onClick, ...rest}) => {

  const dragPreventDefault = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  return (
    <Draggable { ...rest } bounds='parent'>
      <ImgContainer onClick={ onClick } onDragStart={ dragPreventDefault }>
        <img src={ src }/>
      </ImgContainer>
    </Draggable>
  )
}
