import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const getImage = (url: string) => {
  return new URL(url, import.meta.url).href;
}

export interface PlannerItem {
  index: number,
  src: string,
  title: string
}

export interface FieldItem extends PlannerItem {
  position: {
    x: number,
    y: number
  }
}

interface PlannerState {
  basket_items: PlannerItem[],
  field_items: FieldItem[],
  selected: FieldItem | null
}

const initialState: PlannerState = {
  // TODO
  basket_items: [
    {
      index: 1,
      src: getImage('../../../assets/couch.png'),
      title: 'item 1'
    },
    {
      index: 2,
      src: getImage('../../../assets/chair.jpg'),
      title: 'item 2'
    },
    {
      index: 3,
      src: getImage('../../../assets/closet.jpg'),
      title: 'item 3'
    },
    {
      index: 4,
      src: getImage('../../../assets/sink.png'),
      title: 'item 4'
    },
    {
      index: 5,
      src: getImage('../../../assets/table.jpg'),
      title: 'item 5'
    },
    {
      index: 6,
      src: getImage('../../../assets/tv.jpg'),
      title: 'item 6'
    }
  ],
  field_items: [],
  selected: null
}

// PAYLOAD TYPES
type AddFieldItemPayload = PayloadAction<FieldItem>
type ChangeFieldListPayload = PayloadAction<{ index: PlannerItem['index'], position: FieldItem['position'] }>
type SelectFieldItem = AddFieldItemPayload
type SetImportedField = PayloadAction<FieldItem[]>
type DeleteFieldItem = AddFieldItemPayload
const plannerSlice = createSlice({
  name: 'planner',
  initialState: initialState,
  reducers: {
    addFieldItem: (state, action: AddFieldItemPayload) => {
      state.field_items.push(action.payload);
    },
    changeFieldItem: (state, action: ChangeFieldListPayload) => {
      const {position, index} = action.payload;
      state.field_items = state.field_items.map((item) => {
        if (item.index === index) {
          return {
            ...item,
            position
          }
        }
        return item;
      })
    },
    selectFieldItem: (state, action: SelectFieldItem) => {
      state.selected = action.payload;
    },
    setDefaultField: (state) => {
      state.field_items = [];
      state.selected = null;
    },

    setImportedField: (state, action: SetImportedField) => {
      const fieldItemKeys = ['index', 'src', 'title', 'position'] as Array<keyof FieldItem>;
      if (!Array.isArray(action.payload)) {
        return alert('Invalid Data. Data must be an array');
      }
      console.log(action.payload);
      if (!action.payload.length) {
        return alert('Invalid Data. Array of data is empty');
      }
      action.payload.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!fieldItemKeys.includes(key as keyof FieldItem)) {
            return alert(`Invalid Data. ${ key } is missing.`)
          }
        })
      })
      state.field_items = action.payload;
    },
    deleteFieldItem: (state, action: DeleteFieldItem) => {
      state.field_items = state.field_items.filter((item) => item.index !== action.payload.index);
      state.selected = null;
    }
  }
})

export const {
  addFieldItem,
  changeFieldItem,
  selectFieldItem,
  setImportedField,
  setDefaultField,
  deleteFieldItem
} = plannerSlice.actions;

export const reducer = plannerSlice.reducer;

