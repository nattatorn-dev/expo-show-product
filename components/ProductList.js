import React, { Component } from 'react';
import { FlatList, View, Platform } from 'react-native';
import Listitem from './Listitem';
import data from '../data/data.json';
import ListHeader from './ListHeader';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.data
    };
    // console.log('data is', data);
  }


  _keyExtractor(item, index) {
    return `${item.url}-${index}`;
  }


  _renderItem({ item }) {
    return <Listitem {...item} />;
  }

  render() {
    const { products } = this.state;
    return (
      <FlatList
        ItemSeparatorComponent={Platform.OS === 'android' && (() => (
          <View style={{ elevation: 2, borderWidth: 2, borderColor: '#ccc' }} />
        ))}
        ListHeaderComponent={ListHeader}
        data={products}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

ProductList.propTypes = {

};
ProductList.defaultProps = {};

export default ProductList;
