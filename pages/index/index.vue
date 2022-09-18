<template>
	<view class="index">
		<musichead title="网易云音乐" :icon="false"> </musichead>
		<view class="container">
			<scroll-view scroll-y="true" >
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont icon-sousuo"></text>
					<input type="text" placeholder="搜索歌曲"/>
				</view>
				<view v-if="isLoading">
				   <m-for-skeleton
				        :avatarSize="200"
				        :row="3"
				        :loading="isLoading"
				        isarc="square"
				        v-for="(item,key) in 4"
						:titleStyle='{}'
						:title="false"
				        :key="key">
				</m-for-skeleton>
				</view>
				
				
				<view class="index-list" v-else>
					<view class="index-list-item" v-for="(item,index) in topList" :key="index" @tap="handleToList(item.id)"> 
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="indxe-list-text" >
							<view  v-for="(item,index) in item.tracks" :key="index">
								<text class="text-content">{{index+1}}.{{item.first}}-{{item.second}}</text>
							</view>
						</view>
					</view>
				
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {topList,test} from '../../common/api.js'
	import musichead from '../../components/musichead/musichead.vue'
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton";
	export default {
		components:{musichead,mForSkeleton},
		data() {
			return {
				topList:[],   //四个榜单数据  
				 isLoading:true
			}
		},
		onLoad() {
			topList().then(res=>{
				if(res.length){
					this.topList=res
					this.isLoading=false
				}
			});
		},
		methods: {
			handleToList(id){
				uni.navigateTo({
					url:`/pages/list/list?listId=${id}`
				})
			},
			handleToSearch(){
				uni.navigateTo({
					url:`/pages/search/search`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.index{}
.index-search{
	display: flex;
	align-items: center;
	height: 70rpx;
	margin: 70rpx 30rpx 30rpx 30rpx;
	background: #f7f7f7;
	border-radius: 50rpx;
	}
.index-search text{
	font-size: 26rpx;
	margin-right: 26rpx;
	margin-left: 28rpx;}
.index-search input{ font-size: 28rpx;flex:1 ;}

.index-list{margin: 0 30rpx;}
.index-list-item{
	margin-bottom: 34rpx;
	display: flex;
	
}
.index-list-img{
	width: 212rpx;
	height: 212rpx;
	position: relative;
	border-radius: 30rpx;
	overflow: hidden;
	margin-right: 22rpx;
	}
	.index-list-img image{
		width: 100%;
		height: 100%;
	}
	.index-list-img text{
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;
	}
.indxe-list-text{
	font-size: 24rpx;
	line-height: 66rpx;
	width: 456rpx;
	
}
.text-content{
	display: -webkit-box; /*弹性伸缩盒子模型显示*/
		-webkit-box-orient: vertical; /*排列方式*/ 
		-webkit-line-clamp: 1; /*显示文本行数(这里控制多少行隐藏)*/
		overflow: hidden; /*溢出隐藏*/
	}
</style>
