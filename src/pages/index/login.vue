<template>
	<view class="body">
		<u-image :width="width" :height="height" :src="src" mode="aspectFill"></u-image>
		<u-form :model="loginModel" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item prop="phone">
				<u-input :custom-style="inputStyle" placeholder="请输入手机号" v-model="loginModel.phone" type="text"></u-input>
			</u-form-item>
			<u-form-item :border="false" prop="code">
				<u-input :custom-style='inputStyle' placeholder="请输入验证码" v-model="loginModel.code" type="text"></u-input>
				<u-button :custom-style="verifyCodeButtonStyle" slot='right' type="success" size="medium">获取验证码</u-button>
			</u-form-item>
			<u-button :custom-style='logiButtonStyle' @click="onLoginButtonClick()">
				登录
			</u-button>
		</u-form>
		<view class="label phone-label">手机号</view>
		<view class="label verifyCode-label">验证码</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				inputStyle: {
					fontSize: '30rpx'
				},
				verifyCodeButtonStyle: {
					width: '174rpx',
					height: '64rpx',
	
					backgroundColor: this.$globalTheme.backgroundColor,
					color: this.$globalTheme.color,
					fontSize: '30rpx',
					paddingTop: '21rpx',
					paddingBottom: '20rpx'
				},
				logiButtonStyle: {
					marginTop: '88rpx',
					height: '88rpx',
					backgroundColor: '#20BF8E',
					color: '#FFFFFF',
					fontSize: '34rpx'
				},
				loginModel: {
					phone: '',
					code: '',
				},
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						}
					],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: ['change', 'blur'],
						},
						{
							type: 'number',
							message: '验证码只能为数字',
							trigger: ['change', 'blur'],
						}
					],
				},
				errorType: ['message'],
				width: '256rpx',
				height: '256rpx',
				src: 'https://uviewui.com/common/logo.png',



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
					url: './index'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.u-image {
		margin: 0rpx auto;
		margin-top: 89rpx;
	}

	.label {
		padding: 0;
		font-size: 26rpx;
		height: 34rpx;
	}

	.u-form {
		/* margin-top: 88rpx; */
		position: absolute;
		width: 686rpx;
		top: 442rpx;
	}

	.phone-label {
		position: absolute;
		top: 448rpx;
	}

	.verifyCode-label {
		position: absolute;
		top: 567rpx;
	}

	.u-form-item {
		height: 119rpx;
		justify-content: center;
		border-bottom-color: #DDDDDD;
	}

	.u-input {
		margin-top: 48rpx;
		margin-bottom: 32rpx;
		width: 323rpx;
	}
</style>
