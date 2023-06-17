import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {basketListConfig} from "./basketListConfig.ts";

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
  basket_items: basketListConfig,
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
        return item.index === index
          ? {...item, position}
          : item
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

