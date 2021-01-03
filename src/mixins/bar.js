import { mapGetters } from "vuex";

export default {
    methods: {
        ...mapGetters(["getCurSong", "getAudio", "getPlayList"]),
    },
    computed: {
        isSearching() {
            return /search/.test(this.$route.path);
        }
    },
}