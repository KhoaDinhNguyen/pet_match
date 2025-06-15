import { useSelector } from "react-redux";

import InputRange from "../../Utils/InputRange/InputRange";

function QuestionRange({
  question,
  min,
  max,
  labelStyle,
  optionStyle,
  id,
  onChangeHandler,
}) {
  const initialValue = useSelector((store) => store[id]);

  return (
    <InputRange
      labelText={question}
      min={initialValue !== undefined ? initialValue.min : 0}
      max={initialValue !== undefined ? initialValue.max : 1000}
      labelStyle={labelStyle}
      optionStyle={optionStyle}
      id={id}
      onChangeHandler={onChangeHandler}
    />
  );
}

export default QuestionRange;
