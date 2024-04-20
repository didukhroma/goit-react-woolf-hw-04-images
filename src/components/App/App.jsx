//IMPORT
import { useEffect, useState } from 'react';
//COMPONENTS
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Error from 'components/Error';
//HELPERS
import scroll from 'helpers/scroll';
//UTILS
import getImagesAPI from 'utils/api/apiService';
//STYLES
import { StyledApp } from './App.styled';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [modalPic, setModalPic] = useState('');
  const [modalAltText, setModalAltText] = useState('');

  useEffect(() => {
    if (!searchQuery) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        const { hits, totalHits } = await getImagesAPI(
          searchQuery,
          currentPage
        );

        setImages(prev => [...prev, ...hits]);
        setLoadMore(currentPage < Math.ceil(totalHits / 12));

        if (currentPage !== 1) {
          scroll();
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [currentPage, searchQuery]);

  const handleSubmit = query => {
    if (!query.length) {
      alert('Please enter a more specific word ');
      return;
    }

    if (query === searchQuery && images.length !== 0) {
      alert(
        'Please enter a more specific word or explore the button "Load more"'
      );
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setError('');
    setCurrentPage(1);
  };

  const handleClickLoadMore = () => setCurrentPage(prev => prev + 1);

  const toggleModal = () => setIsModalOpen(prev => !prev);

  const handleImageClick = (text, modalImg) => {
    setModalPic(modalImg);
    setModalAltText(text);
    toggleModal();
  };

  return (
    <StyledApp>
      <Searchbar cbOnSubmit={handleSubmit} />
      <ImageGallery images={images} handleImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          modalPic={modalPic}
          modalAltText={modalAltText}
        />
      )}
      {loadMore && <Button handleClickLoadMore={handleClickLoadMore} />}
      {error && <Error error={error} />}
    </StyledApp>
  );
};

export default App;
