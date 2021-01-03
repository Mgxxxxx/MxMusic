import { mapGetters } from "vuex";

export default {
    methods: {
        ...mapGetters(["getShowTabbar", "getCurSong", "getAudio", "getPlayList"]),
    },
    computed: {
        isShowTabbar() {
            return this.getShowTabbar();
        },
        isSearching() {
            return function (which) {
                let flag = this.getShowTabbar();
                if (which === "musicControl") return flag ? "" : `-49px`;
                else if (which === "appbarMt") return flag ? "" : "-49px";
                else if (which === "appbarPb") return flag ? "" : "54px";
                else if (which === "main") return flag ? "49px" : "0";
                else return "";
            };
        },
    },
}