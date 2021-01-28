<template>
	<view class="container">
		<view class="avator">
			<u-image width='226rpx' height='226rpx' :src="src" @click="slectImage()"></u-image>
		</view>
		<view class="login-form">
			<u-form class="login-form" :model="loginForm" ref="loginForm">
				<view class="item-view">
					<u-form-item label="手机号" label-position="top" label-style="labelStyle" >
						<view class="input-view">
							<u-input v-model="loginForm.phone" placeholder='请输入手机号'></u-input>
						</view>
					</u-form-item>
				</view>
				<view class="item-view">
					<u-form-item label="验证码" label-position="top" :label-style="labelStyle">
						<view>
							<u-input v-model="loginForm.verifyCode" placeholder='请输入验证码'></u-input>
						</view>
						<view>
							<u-button :custom-style='verifyCodeButtonStyle' @click='onVerifyCodeButtonClick()' :disabled="verifyCodeButtonDisabled">
								{{verifyCodeTip}}
							</u-button>
						</view>
					</u-form-item>
				</view>
			</u-form>
		</view>

		<view>
			<u-button :custom-style='loginButtonStyle' @click="onLoginButtonClick()">登录</u-button>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				src: 'https://uviewui.com/common/logo.png',
				labelStyle: {
					fontSize: '26rpx',
				},
				verifyCodeButtonStyle: {
					float: 'right',
					color: '#20BF8EFF',
					backgroundColor: '#20BF8E0D',
					verticalAlign: 'middle'
				},
				loginButtonStyle: {
					marginTop: '88rpx',
					height: '88rpx',
					width: '100%',
					backgroundColor: '#20BF8EFF',
					fontSize: '34rpx',
					color: '#FFFFFF'
				},
				loginForm: {
					phone: '',
					verifyCode: ''
				},
				verifyCodeTimer: 5,
				verifyCodeTip: '获取验证码',
				verifyCodeButtonDisabled: false
			}
		},
		onLoad: function() {
			uni.getSystemInfo({
				success: function(res) {}
			})
		},
		methods: {
			slectImage: function() {
				var self = this;
				uni.chooseImage({
					count: 1,
					// sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						self.src = res.tempFilePaths[0]
					}
				});
			},
			onVerifyCodeButtonClick: function() {
				this.$u.toast("验证码发送成功");
				let self = this
				self.verifyCodeButtonDisabled = true;
				let timer = setInterval(function() {
					self.verifyCodeTimer--;
					self.verifyCodeTip = `${self.verifyCodeTimer}s重新获取`
					if (self.verifyCodeTimer <= 0) {
						clearInterval(timer)
						self.verifyCodeTimer = 5
						self.verifyCodeButtonDisabled = false
						self.verifyCodeTip = '获取验证码'
					}
				}, 1000)
			},
			onLoginButtonClick: function() {
				this.$store.hasLogin = !this.$store.hasLogin
				console.log(this.$store.hasLogin)
				uni.navigateTo({
					url: './search'
				})
			}
		}
	}
</script>
<style scoped>
	
	.container {
		display: flex;
		flex-direction: column;
		margin: auto 32rpx;
	}

	.avator {
		display: flex;
		margin: 0 auto;
		margin-top: 98rpx;
		width: 256rpx;
		height: 256rpx;
	}
	
	.login-form {
		margin-top: 94rpx;
		width: 100%;
	}
	.item-view{
		height: 119rpx;
	}
	.input-view{
	
	}
	
</style>
