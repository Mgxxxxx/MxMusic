import { getAlbum } from "@/api"

//过滤歌曲信息
export function formatSong(music) {
    return {
        id: music.id || null,
        name: music.name || null,
        singer: music.artists ? music.artists[0] : null,
        album: music.album.name || null,
        albumId: music.album.id || null,
        alias: music.alias ? music.alias[0] : null
    }
}

//获取专辑封面
export function getAlbumPic(id) {
    let picUrl = '';
    getAlbum(id).then(res => {
        picUrl = res.songs[0].al.picUrl;
        return Promise.resolve(picUrl);
    }).catch(e => {
        console.log(e);
    })
}

//创建歌曲列表
export function createSongList(list) {
    const songs = list.map(item => {
        return formatSong(item);
    })
    return songs;
}
