export default {
    setAudio(state, audio) {
        // console.log(audio);
        state.audio = audio;
    },
    setCurSong(state, song) {
        state.curSong = song;
    },
    setPlayList(state, list) {
        state.playList = list;
    }
}