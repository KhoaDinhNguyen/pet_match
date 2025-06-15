import { createSlice } from "@reduxjs/toolkit";

export const petTypeSlice = createSlice({
  name: "petType",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const breedSlice = createSlice({
  name: "breed",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const ageMonthsSlice = createSlice({
  name: "ageMonths",
  initialState: { min: 1, max: 200 },
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const sizeSlice = createSlice({
  name: "size",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const weightKgSlice = createSlice({
  name: "weightKg",
  initialState: { min: 1, max: 1000 },
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const vaccinatedSlice = createSlice({
  name: "vaccinated",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const medicalConditionSlice = createSlice({
  name: "medicalCondition",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const previousOwnerSlice = createSlice({
  name: "previousOwner",
  initialState: [],
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});

export const adoptionFeeSlice = createSlice({
  name: "adoptionFee",
  initialState: { min: 1, max: 1000 },
  reducers: {
    apply(state, action) {
      return action.payload;
    },
  },
});
