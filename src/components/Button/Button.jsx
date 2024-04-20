//STYLES
import { StyledButton } from './Button.styled';

export default function Button({ handleClickLoadMore }) {
  return <StyledButton onClick={handleClickLoadMore}>Load More</StyledButton>;
}
