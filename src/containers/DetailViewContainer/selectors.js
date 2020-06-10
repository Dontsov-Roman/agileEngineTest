// @flow

export const selectHiResImage = (state: Object, imageId: number) =>
  state.detailViewReducer.data[imageId];
