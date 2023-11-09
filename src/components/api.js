import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (word, page) => {
  const config = {
    key: '39626156-66db482f06efda0b43f7ab67e',
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };
  const response = await axios.get('', { params: config });
  return response.data;
};
