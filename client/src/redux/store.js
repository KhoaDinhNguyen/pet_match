import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  petTypeSlice,
  breedSlice,
  medicalConditionSlice,
  previousOwnerSlice,
  sizeSlice,
  vaccinatedSlice,
  ageMonthsSlice,
  weightKgSlice,
  adoptionFeeSlice,
} from "./questionsSlice";

const reducers = {
  [petTypeSlice.name]: petTypeSlice.reducer,
  [breedSlice.name]: breedSlice.reducer,
  [medicalConditionSlice.name]: medicalConditionSlice.reducer,
  [previousOwnerSlice.name]: previousOwnerSlice.reducer,
  [sizeSlice.name]: sizeSlice.reducer,
  [vaccinatedSlice.name]: vaccinatedSlice.reducer,
  [ageMonthsSlice.name]: ageMonthsSlice.reducer,
  [weightKgSlice.name]: weightKgSlice.reducer,
  [adoptionFeeSlice.name]: adoptionFeeSlice.reducer,
};

const rootReducer = combineReducers(reducers);

const store = configureStore({ reducer: rootReducer });

export default store;
