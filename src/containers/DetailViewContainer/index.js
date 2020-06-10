// @flow
import * as React from 'react';
import DetailView from '../../screens/DetailView';
import {connect} from 'react-redux';
import {fetchPictureDetails} from './actions';
import {selectHiResImage} from './selectors';
import withBackButton from '../../hocs/withBackButton';
import Share from 'react-native-share';

export interface Props {
  navigation: any;
  fetchPictureDetails: Function;
  isLoading: boolean;
  hiResImage: Function;
}
export interface State {
  imageUrl: string;
}

class DetailViewContainer extends React.Component<Props, State> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      height: 50,
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    const {fetchPictureDetails, hiResImage} = this.props;
    if (!hiResImage(id)) {
      fetchPictureDetails(id);
    }
  }

  share = (imageId: number): void => {
    const {pictureDetails} = this.props;
    if (pictureDetails) {
      const {
        author: title,
        camera: message,
        full_picture: url,
      } = pictureDetails;
      Share.open({title, message, url});
    }
  };

  applyFilter = (type): void => {
    // TODO: implement apply image filter function
  };

  render() {
    const {pictureDetails} = this.props;
    const imageURL = pictureDetails && pictureDetails.full_picture;
    const {isLoading} = this.props;
    return (
      <DetailView
        imageUrl={imageURL}
        pictureDetails={pictureDetails}
        shareCallback={this.share}
        fetching={!pictureDetails || isLoading}
        applyFilterCallback={this.applyFilter}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchPictureDetails: (imageId) => dispatch(fetchPictureDetails(imageId)),
  };
}

const mapStateToProps = (
  state,
  {
    match: {
      params: {id},
    },
  },
) => ({
  hiResImage: (imageId) => selectHiResImage(state, imageId),
  pictureDetails: selectHiResImage(state, id),
  isLoading: state.detailViewReducer.fetching,
});

export default connect(
  mapStateToProps,
  bindAction,
)(withBackButton(DetailViewContainer));
