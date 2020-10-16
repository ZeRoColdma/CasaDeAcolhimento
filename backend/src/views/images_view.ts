import Image from '../models/Image';

export default {
  render(images: Image) {
    return {
      id: images.id,
      url: `http://192.168.0.13:3333/uploads/${images.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
