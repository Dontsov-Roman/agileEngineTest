import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import DefaultImage from './defaultImage.jpg';
import styles from '../styles';

type Props = {
  imageUrl: string,
  imageId: number,
  openPicture: Function,
  imageStyle: Object,
};

class ListItem extends React.PureComponent<Props> {
  render() {
    const {imageUrl, imageId, openPicture, imageStyle} = this.props;
    return (
      <TouchableOpacity
        onPress={() => openPicture(imageId)}
        style={styles.item}>
        <Image
          style={imageStyle}
          resizeMode="cover"
          resizeMethod="scale"
          source={{uri: imageUrl}}
          defaultSource={DefaultImage}
        />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
