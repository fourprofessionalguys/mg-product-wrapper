import React from 'react';
import MediaWrapper from './media-wrapper';
import Checkout from './checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      products: [],
    };
  }

  // Declare a new state variable, which we'll call "count"
  fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => this.setState({ images: data }))
      .catch(err => console.log(err));
  }

  fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { images, products } = this.state;
    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images}
        />
        <Checkout
          fetchImages={this.fetchImages}
          fetchProducts={this.fetchProducts}
          products={products}
        />
      </div>
    );
  }
}

export default App;
