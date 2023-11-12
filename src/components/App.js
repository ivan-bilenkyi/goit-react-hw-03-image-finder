import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPhotos } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/LoadMore';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    per_page: 12,
    loadMore: false,
    loading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value, page, per_page } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      const valueItem = value.split('/');
      const word = valueItem[valueItem.length - 1];
      try {
        this.setState({ loading: true, error: false, loadMore: false });
        const initialPhotos = await fetchPhotos(word, page, per_page);
        const { totalHits, hits } = initialPhotos;
        const totalPage = Math.ceil(totalHits / per_page);

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
        if (totalPage > page) {
          this.setState({ loadMore: true });
        } else {
          this.setState({ loadMore: false });
        }
      } catch (error) {
        toast.error('Please Try Again');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = ({ value }) => {
    this.setState({
      images: [],
      value: `${Date.now()}/${value}`,
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  render() {
    const { images, loadMore, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery initialGallery={this.state.images} />
        )}
        {loadMore && <LoadMore onClick={this.handleLoadMore} />}

        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
        {loading && <Loader />}
      </>
    );
  }
}
