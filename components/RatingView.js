import React from 'react';
import { Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

const commaNumber = require('comma-number');

let filledIconName = 'ios-star';
let emptyIconName = 'ios-star-outline';
if (Platform.OS === 'android') {
  filledIconName = 'md-star';
  emptyIconName = 'md-star-outline';
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 2
  },
  text: {
    marginLeft: 4,
    color: '#ccc',
    fontWeight: '600',
    fontSize: 12,
  }
};
const MAX_RATING = 5;
const RatingView = ({ rating, reviewCount, style }) => {
  const { wrapper } = styles;
  return (<View style={[wrapper, style]}>
    {
      range(MAX_RATING).map(
        index => (
          <Icon
            name={rating > index ? filledIconName : emptyIconName}
            size={18}
            color="#FFD700"
            style={styles.icon}
          />
        )
      )
    }
    <Text style={styles.text}>{`(${commaNumber(reviewCount)})`}</Text>
  </View>);
};

RatingView.propTypes = {
  rating: PropTypes.object,
  reviewCount: PropTypes.number,
  style: PropTypes.object
};

export default RatingView;
