import styled from "styled-components";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PlannerItem} from "../item.tsx";
import {DraggableData, DraggableEvent} from "react-draggable";
import {changeFieldItem, FieldItem, selectFieldItem} from "../../model";

const FieldWrapper = styled.div`
  background: #4b4b4b;
  border-radius: 20px;
  max-height: 700px;
  position: relative;
  & > div {
    position: absolute;
  }
`

type FieldProps = {}

const Field: FC<FieldProps> = (props) => {
  const {field_items} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleOnStop = (_: DraggableEvent, coords: DraggableData, index: number) => {
    const changedItem = {
      index,
      position: {
        x: coords.lastX,
        y: coords.lastY
      }
    }
    dispatch(changeFieldItem(changedItem));
  }

  const select = (item: FieldItem) => {
    dispatch(selectFieldItem(item));
  }

  return <FieldWrapper>
    { field_items.map((item) => {
      const props = {
        key: item.index,
        src: item.src,
        onStop: (e: DraggableEvent, coords: DraggableData) => handleOnStop(e, coords, item.index),
        onClick: () => select(item),
        defaultPosition: {x: item.position.x, y: item.position.y}

      }
      return <PlannerItem { ...props }  />
    }) }
  </FieldWrapper>
}

export default Field;