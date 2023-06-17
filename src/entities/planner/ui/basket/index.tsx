import {ChangeEvent, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFieldItem, deleteFieldItem, FieldItem, setDefaultField, setImportedField} from "../../model";
import {
  BasketItems,
  BasketSelected,
  BasketWrapper,
  Button,
  ButtonWrapper,
  Input,
  InputWrapper,
  SwiperStyled
} from "./styles.tsx";
import {SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";
import {PlannerItem} from "../item.tsx";

type BasketProps = {}

const Basket: FC<BasketProps> = ({}) => {
  const {basket_items, field_items, selected} = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  const pushFieldItem = (index: number) => {
    const matchedItem = basket_items.find(item => item.index === index);
    const fieldItem: FieldItem = {
      index: field_items.length + 1,
      src: matchedItem!.src,
      title: `item ${ field_items.length + 1 }`,
      position: {
        x: 0,
        y: 0,
      },
    }
    dispatch(addFieldItem(fieldItem))

  }

  const importFieldData = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target?.files?.length) {
      return;
    }
    // create cached value if data is invalid
    const cachedField = field_items;
    // clear field for deploy a new data
    dispatch(setDefaultField());

    const file = e.target.files[0]
    const reader = new FileReader();

    reader.readAsText(file, 'UTF-8');
    reader.onload = (e) => {
      const data = e.target?.result;
      if (data) {
        const parsedData = JSON.parse(data as string);
        console.log(parsedData);
        dispatch(setImportedField(parsedData));
      } else {
        dispatch(setImportedField(cachedField));
      }
    }

  }


  const exportFieldData = () => {
    if (!field_items.length) {
      return alert('Field is empty, please add some items');
    }
    const jsonString = `data:text/json;chatset=utf-8,${ encodeURIComponent(
      JSON.stringify(field_items)
    ) }`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }

  const deleteItem = () => {
    if (selected) {
      dispatch(deleteFieldItem(selected));
    }
  }

  const clearField = () => {
    dispatch(setDefaultField());
  }

  return (
    <BasketWrapper>
      <h2>Select item</h2>
      <BasketItems>
        <SwiperStyled
          slidesPerView={6}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {basket_items.map((item) => {
            return (
              <SwiperSlide key={item.index}>
                <PlannerItem disabled={true} onClick={() => pushFieldItem(item.index)} src={item.src} />
              </SwiperSlide>
            )
          })}
        </SwiperStyled>
      </BasketItems>
      {selected && <BasketSelected>
        <span>name: <b>{ selected?.title }</b></span>
        <span>x: <b>{ selected?.position.x }</b></span>
        <span>y: <b>{ selected?.position.y }</b></span>
        <button style={{width: '150px'}} onClick={deleteItem}>Delete Item</button>
        <button style={{width: '150px'}} onClick={clearField}>Delete All</button>
      </BasketSelected> }
      <ButtonWrapper>
        <Button onClick={ exportFieldData }>Export</Button>
        <InputWrapper>
          Import
          <Input type='file' accept={ '.json' } onChange={ importFieldData }/>
        </InputWrapper>
      </ButtonWrapper>
    </BasketWrapper>
  )
}

export default Basket;