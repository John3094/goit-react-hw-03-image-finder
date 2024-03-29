import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { ImageGalleryStyled, ImageStyled } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { collection } = this.props;
    const { showModal } = this.state;
    return (
      <ImageGalleryStyled>
        <ImageStyled
          src={collection.webformatURL}
          alt={collection.tags}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} imageUrl={collection} />
        )}
      </ImageGalleryStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  collection: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
