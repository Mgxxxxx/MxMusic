import axios from "../utils/axios"

//搜索
export function search(keywords, page = 0, limit = 30) {
    return axios.get("/search", {
        params: {
            limit,
            keywords,
            offset: page * limit
        }
    })
}

//获取播放源
export function getMusicUrl(id) {
    return axios.get("/song/url", {
        params: { id }
    })
}

//获取专辑信息
export function getAlbum(id) {
    return axios.get("/album", {
        params: { id }
    })
}