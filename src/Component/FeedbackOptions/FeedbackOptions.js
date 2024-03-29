import PropTypes from "prop-types";
import { Button, List, Item } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map((option) => {
        return (
          <Item key={option}>
            <Button
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};