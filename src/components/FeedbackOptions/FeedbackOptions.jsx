import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { OptionContainer, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionContainer>
    {options.map(option => (
      <OptionButton key={nanoid()} type="button" onClick={onLeaveFeedback}>
        {option}
      </OptionButton>
    ))}
  </OptionContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
