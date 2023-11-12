import { Item } from 'components/ImageGallery/ImageGallery.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      data: { id, webformatURL, largeImageURL },
    } = this.props;
    return (
      <Item onClick={this.openModal} key={id}>
        <img src={webformatURL} alt={id} />
        <Modal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          imgUrl={largeImageURL}
        />
      </Item>
    );
  }
}
