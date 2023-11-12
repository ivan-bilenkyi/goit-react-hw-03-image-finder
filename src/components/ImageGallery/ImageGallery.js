import { Layout } from 'components/Layout';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ initialGallery }) => {
  return (
    <section>
      <Layout>
        <List>
          {initialGallery.map((item, index) => (
            <ImageGalleryItem data={item} key={item.id} />
          ))}
        </List>
      </Layout>
    </section>
  );
};
