import { useSelector } from "react-redux";

import InputSelection from "../../Utils/InputMultipleChoice/InputMultipleChoice";

function QuestionSelection({
  question,
  options,
  onChangeHandler,
  labelStyle,
  optionStyle,
  id,
  containerStyle,
}) {
  const initialAnswer = useSelector((store) => store[id]);

  return (
    <div>
      <InputSelection
        labelText={question}
        labelStyle={labelStyle}
        id={id}
        onChangeHandler={onChangeHandler}
        optionStyle={optionStyle}
        options={options}
        containerStyle={containerStyle}
        initialAnswer={initialAnswer}
      />
    </div>
  );
}

export default QuestionSelection;
