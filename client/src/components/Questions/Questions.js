import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuestionMutipleChoice from "./QuestionMultipleChoice/QuestionMultipleChoice";
import QuestionRange from "./QuestionRange/QuestionRange";

import {
  petTypeSlice,
  breedSlice,
  sizeSlice,
  medicalConditionSlice,
  previousOwnerSlice,
  vaccinatedSlice,
  ageMonthsSlice,
  weightKgSlice,
  adoptionFeeSlice,
} from "../../redux/questionsSlice";

import styles from "./Question.module.css";

function Questions() {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  const petType = useSelector((store) => store[petTypeSlice.name]);
  const breed = useSelector((store) => store[breedSlice.name]);
  const size = useSelector((store) => store[sizeSlice.name]);
  const medicalCondition = useSelector(
    (store) => store[medicalConditionSlice.name]
  );
  const vaccinated = useSelector((store) => store[vaccinatedSlice.name]);
  const previousOwner = useSelector((store) => store[previousOwnerSlice.name]);

  const onChangeMutipleChoiceQuestion = (id, newState) => {
    switch (id) {
      case "petType":
        dispatch(petTypeSlice.actions.apply(newState));
        break;
      case "breed":
        dispatch(breedSlice.actions.apply(newState));
        break;
      case "size":
        dispatch(sizeSlice.actions.apply(newState));
        break;
      case "vaccinated":
        dispatch(vaccinatedSlice.actions.apply(newState));
        break;
      case "medicalCondition":
        dispatch(medicalConditionSlice.actions.apply(newState));
        break;
      case "previousOwner":
        dispatch(previousOwnerSlice.actions.apply(newState));
        break;
    }
  };

  const onChangeRangeQuestion = (id, newState) => {
    switch (id) {
      case "ageMonths":
        dispatch(ageMonthsSlice.actions.apply(newState));
        break;
      case "weightKg":
        dispatch(weightKgSlice.actions.apply(newState));
      case "adoptionFee":
        dispatch(adoptionFeeSlice.actions.apply(newState));
    }
  };
  const onClickNext = () => {
    setCurrIdx((currIdx) => currIdx + 1);
  };

  const onClickPrevious = () => {
    setCurrIdx((currIdx) => currIdx - 1);
  };

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setQuestions((preState) => data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const QuestionsRender = questions.map((questionItem) => {
    if (questionItem.type === "multipleChoices") {
      return (
        <QuestionMutipleChoice
          key={questionItem.question}
          question={questionItem.question}
          options={questionItem.options}
          id={questionItem.id}
          labelStyle={styles.questionLabelStyle}
          optionStyle={styles.mcQuestionOptionStyle}
          containerStyle={styles.mcQuestionContainerStyle}
          onChangeHandler={onChangeMutipleChoiceQuestion}
        />
      );
    } else if (questionItem.type === "range") {
      return (
        <QuestionRange
          key={questionItem.question}
          question={questionItem.question}
          id={questionItem.id}
          min={questionItem.min}
          max={questionItem.max}
          labelStyle={styles.questionLabelStyle}
          optionStyle={styles.rangeQuestionOptionStyle}
          onChangeHandler={onChangeRangeQuestion}
        />
      );
    }

    return <></>;
  });

  const canSubmit =
    petType.length > 0 &&
    breed.length > 0 &&
    size.length > 0 &&
    medicalCondition.length > 0 &&
    vaccinated.length > 0 &&
    previousOwner.length > 0;

  return (
    <div className={styles.rootContainer}>
      <div>{QuestionsRender[currIdx]}</div>
      <div className={styles.buttonsContainer}>
        <button onClick={onClickPrevious} disabled={currIdx === 0}>
          Previous
        </button>
        <button className={styles.submitButton} disabled={!canSubmit}>
          Find Your Pet
        </button>
        <button
          onClick={onClickNext}
          disabled={currIdx === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Questions;
