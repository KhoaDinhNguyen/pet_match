import { useEffect, useState } from "react";

import styles from "./InputRange.module.css";

function InputRange({
  id,
  labelText,
  labelStyle,
  min,
  max,
  optionStyle,
  onChangeHandler,
}) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const minOptions = [];
  const maxOptions = [];

  const onSelectMinValue = (event) => {
    setMinValue((preState) => parseInt(event.target.value));
  };

  const onSelectMaxValue = (event) => {
    setMaxValue((preState) => parseInt(event.target.value));
  };

  useEffect(() => {
    onChangeHandler(id, {
      min: minValue,
      max: maxValue,
    });
  }, [minValue, maxValue, onChangeHandler, id]);
  for (let value = min; value <= max; ++value) {
    if (value < maxValue) {
      minOptions.push(
        <option key={`${id}_${value}_min`} value={value}>
          {value}
        </option>
      );
    }
    if (value > minValue) {
      maxOptions.push(
        <option key={`${id}_${value}_max`} value={value}>
          {value}
        </option>
      );
    }
  }

  return (
    <div>
      <p className={labelStyle}>{labelText}</p>
      <div className={styles.rangeContainer}>
        <div>
          <label htmlFor={`${id}_from`}>From</label>
          <select
            id={`${id}_from`}
            name={`${id}_from`}
            onChange={onSelectMinValue}
            value={minValue}
            className={optionStyle}
          >
            {minOptions}
          </select>
        </div>
        <div className={styles.maxValueContainer}>
          <label htmlFor={`${id}_to`}>To</label>
          <select
            id={`${id}_to`}
            name={`${id}_to`}
            onChange={onSelectMaxValue}
            value={maxValue}
            className={optionStyle}
          >
            {maxOptions}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputRange;
