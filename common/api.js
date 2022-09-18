import {baseUrl} from './config.js'

/**触底加载音乐评论***/
export function songAfterComment(songId,offset){
	return uni.request({
		url:`${baseUrl}/comment/hot?id=${songId}&type=0&offset=${offset}`,
		method:'GET'
	})
}


/**获取热门搜索***/
export function searchHot(){
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method:'GET'
	})
}
/**获取搜索结果***/
export function searchWord(word){
	return uni.request({
		url:`${baseUrl}/search?keywords=${word}`,
		method:'GET'
	})
}
/**获取搜索下拉提示***/
export function searchSuggest(word){
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET'
	})
}


/**获取音乐评论***/
export function songComment(songId){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}`,
		method:'GET'
	})
}


/**获取音乐url***/
export function songUrl(songId){
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}`,
		method:'GET'
	})
}


/**获取音乐歌词***/
export function songLyric(songId){
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}`,
		method:'GET'
	})
}

/**获取相似音乐***/
export function songSimi(songId){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}`,
		method:'GET'
	})
}

/**请求歌曲详情***/
export function songDetail(songId){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}`,
		method:'GET'
	})
}

/**请求热榜数据***/
export function list(listId){
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${listId}`,
		method:'GET'
	})
}

/**请求热歌、飙升、新歌、原创榜**/
export function topList(){
	return new Promise(function(resolve,reject){
		uni.request({
		url:`${baseUrl}/toplist/detail`,
		method:'GET',
		data:{},
		success:res=>{
			let result=res.data.list;
			result.length=4;
			resolve(result);
		},
		fail:()=>{},
		complete: () => {
		}
	})
	})
}

