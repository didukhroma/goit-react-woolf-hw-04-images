//STYLES
import { StyledIMG, StyledItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  source,
  text,
  modalImg,
  handleImageClick,
}) {
  const handleClick = () => {
    handleImageClick(text, modalImg);
  };

  return (
    <StyledItem onClick={handleClick}>
      <StyledIMG src={source} alt={text} />
    </StyledItem>
  );
}
