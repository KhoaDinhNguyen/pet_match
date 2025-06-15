import { useState } from "react";

function InputMultipleChoice({
  labelStyle,
  optionStyle,
  containerStyle,
  id,
  options = [],
  labelText,
  onChangeHandler,
  initialAnswer,
}) {
  const [answer, setAnswer] = useState(
    initialAnswer !== undefined ? initialAnswer : []
  );

  const onChangeOption = (event) => {
    const { value } = event.target;
    let nextAnswer = [];
    if (value === "All the above") {
      if (answer.length === options.length) {
        nextAnswer = [];
      } else {
        nextAnswer = options;
      }
    } else {
      if (answer.includes(value)) {
        nextAnswer = answer.filter((option) => option !== value);
      } else {
        nextAnswer = [...answer, value];
      }
    }
    setAnswer((preAnswer) => nextAnswer);
    onChangeHandler(id, nextAnswer);
  };

  const Options = options.map((option) => (
    <div key={option} className={optionStyle}>
      <input
        type="checkbox"
        value={option}
        id={option}
        name={id}
        onChange={onChangeOption}
        checked={answer.includes(option)}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  ));

  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={id}>
        {labelText}
      </label>
      {Options}
    </div>
  );
}

export default InputMultipleChoice;
