import React from 'react';
import { Image, View, Text } from 'react-native';
import rn from 'random-number';
import PropTypes from 'prop-types';
import RatingView from './RatingView';
import PriceText from './PriceText';
import ProductName from './ProductName';

const styles = {
  wrapper: {
    marginTop: 10,
    flexDirection: 'row',
    height: 170,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 5,
    padding: 5,
    paddingRight: 10


  },
  thumbnailView: {
    width: 120,
    marginRight: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: 100,
    height: 90
  },
  detailsView: {
    flex: 1,
  },

  shipping: {
    position: 'absolute',
    bottom: 10,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 12
  },
  shippingText: {
    fontSize: 13,
    color: '#C0C0C0',
  },
  rating: {
    marginTop: 10
  },
  priceText: {
    marginTop: 5
  }

};


const Listitem = (props) => {
  const { name, offer, reviewScore, reviewCount } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.thumbnailView}>
        <Image source={{ uri: props.image.thumbUrl }} style={styles.thumbnail} />
      </View>
      <View style={styles.detailsView}>
        <ProductName name={name} />
        <RatingView rating={reviewScore} reviewCount={reviewCount} style={styles.rating} />
        <PriceText price={offer.price} salePrice={offer.salePrice} style={styles.priceText} />
        <View style={styles.shipping}>
          <Text style={styles.shippingText}>{`${rn({ min: 2, max: 7, integer: true })} Days Shipping`}</Text>
        </View>
      </View>

    </View>
  );
};

Listitem.propTypes = {
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewScore: PropTypes.number,
  reviewCount: PropTypes.number,
  image: PropTypes.object
};

Listitem.defaultProps = {
  reviewCount: 0
};


export default Listitem;
