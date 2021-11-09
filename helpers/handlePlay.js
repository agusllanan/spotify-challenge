export const handlePlay = () => {
    chooseTrack(track)
    if (track.uri === playingTrack.uri) {
        setPlay (!play);
  }
};