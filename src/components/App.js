import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPhotos } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      const value = this.state.value.split('/');
      const word = value[value.length - 1];
      try {
        this.setState({ isLoading: true, error: false });
        const initialQuizzes = await fetchPhotos(word, this.state.page);
        this.setState({ images: initialQuizzes.hits });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
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

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery gallery={this.state.images} />
        )}

        <GlobalStyle />
      </>
    );
  }
}
