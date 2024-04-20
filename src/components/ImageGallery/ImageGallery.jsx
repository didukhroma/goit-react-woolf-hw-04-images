//IMPORT
import { nanoid } from 'nanoid';
//COMPONENTS
import ImageGalleryItem from 'components/ImageGalleryItem';
//STYLES
import { StyledList } from './ImageGallery.styled';

export default function ImageGallery({ images, handleImageClick }) {
  return (
    <StyledList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={`${id}${nanoid()}`}
          source={webformatURL}
          text={tags}
          modalImg={largeImageURL}
          handleImageClick={handleImageClick}
        />
      ))}
    </StyledList>
  );
}
