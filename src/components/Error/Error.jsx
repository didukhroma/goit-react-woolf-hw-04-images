//STYLES
import { StyledP } from './Error.styled';

export default function Error({ error }) {
  return (
    <>
      <StyledP>{error}</StyledP>
      <StyledP>Please try again</StyledP>
    </>
  );
}
