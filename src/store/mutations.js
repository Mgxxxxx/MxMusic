export default {
    setAudio(state, audio) {
        // console.log(audio);
        state.audio = audio;
    },
    setShowTabbar(state, flag) {
        state.showTabbar = flag;
    },
    setCurSong(state, song) {
        state.curSong = song;
    },
    setPlayList(state, list) {
        state.playList = list;
    }
}