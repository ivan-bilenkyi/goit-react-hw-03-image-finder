import { Layout } from 'components/Layout';
import { Item, List } from './ImageGallery.styled';

export const ImageGallery = ({ gallery }) => {
  console.log(gallery);
  return (
    <section>
      <Layout>
        <List>
          {gallery.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <Item key={id}>
                <img src={webformatURL} alt={id} />
              </Item>
            );
          })}
        </List>
      </Layout>
    </section>
  );
};
