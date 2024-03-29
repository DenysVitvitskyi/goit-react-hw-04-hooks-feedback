import PropTypes from "prop-types";
import { Item } from "./Statistics.styled";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <Item>
          <span>Good: {good}</span>
        </Item>
        <Item>
          <span>Neutral: {neutral}</span>
        </Item>
        <Item>
          <span>Bad: {bad}</span>
        </Item>
        <Item>
          <span>Total: {total}</span>
        </Item>
        <Item>
          <span>Positive feedback: {positivePercentage}</span>
        </Item>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};