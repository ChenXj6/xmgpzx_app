let _debounceTimeout = null,
	_throttleRunning = false

/**
 * 防抖
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms   
 */
export const debounce = (fn, delay = 500) => {
	clearTimeout(_debounceTimeout);
	_debounceTimeout = setTimeout(() => {
		fn();
	}, delay);
}
/**
 * 节流
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms  
 */
export const throttle = (fn, delay = 500) => {
	if (_throttleRunning) {
		return;
	}
	_throttleRunning = true;
	fn();
	setTimeout(() => {
		_throttleRunning = false;
	}, delay);
}
/**
 * toast
 */
export const msg = (title = '', param = {}) => {
	if (!title) return;
	uni.showToast({
		title,
		duration: param.duration || 1500,
		mask: param.mask || false,
		icon: param.icon || 'none'
	});
}
/**
 * 检查登录
 * @return {Boolean}
 */
export const isLogin = (options = {}) => {
	const token = uni.getStorageSync('uniIdToken');
	
	if (token) {
		return true;
	}
	return false;
}
/**
 * 生成sign 
 * 注意:带小数点的不可以使用
 */
export const makeSign = (data={}) => {
	var timestamp = Date.parse(new Date()) / 1000;
	data.timestamp = timestamp
	var newkey = Object.keys(data).sort();
	var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
	for (let i = 0; i < newkey.length; i++) { //遍历newkey数组
		newObj[newkey[i]] = data[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
	}
	var arr = JSON.stringify(newObj)
	let len = arr.length;
	var data1 = arr.substring(1, len - 1); //截取字符串中不包括‘{}’部分
	var data2 = data1.split(','); //以','分割字符串
	var jsonArr = []; //创建一个新数组
	for (let i = 0; i < data2.length; i++) {
		var str2 = data2[i].replace(/"/g, ""); //去掉data2数据中每一项的""
		var str3 = str2.replace(/:/, '='); //将str2数据中的每一项中':'替换为'='
		jsonArr.push(str3); //将str3数据存入数组里面
	}
	var result = jsonArr.join('&'); //将两个数据拼接起来
	return result;
}
/**
 * 获取页面栈
 * @param {Number} preIndex为1时获取上一页
 * @return {Object} 
 */
export const prePage = (preIndex = 1) => {
	const pages = getCurrentPages();
	const prePage = pages[pages.length - (preIndex + 1)];

	return prePage.$vm;
}
/**
 * 格式化时间戳 Y-m-d H:i:s
 * @param {String} format Y-m-d H:i:s
 * @param {Number} timestamp 时间戳   
 * @return {String}
 */
export const date = (format, timeStamp) => {
	if ('' + timeStamp.length <= 10) {
		timeStamp = +timeStamp * 1000;
	} else {
		timeStamp = +timeStamp;
	}
	let _date = new Date(timeStamp),
		Y = _date.getFullYear(),
		m = _date.getMonth() + 1,
		d = _date.getDate(),
		H = _date.getHours(),
		i = _date.getMinutes(),
		s = _date.getSeconds();

	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;
	H = H < 10 ? '0' + H : H;
	i = i < 10 ? '0' + i : i;
	s = s < 10 ? '0' + s : s;

	return format.replace(/[YmdHis]/g, key => {
		return {
			Y,
			m,
			d,
			H,
			i,
			s
		} [key];
	});
}
//二维数组去重
export const getUnique = array => {
	let obj = {}
	return array.filter((item, index) => {
		let newItem = item + JSON.stringify(item)
		return obj.hasOwnProperty(newItem) ? false : obj[newItem] = true
	})
}
// 判断类型集合
export const checkStr = (str, type) => {
	switch (type) {
		case 'mobile': //手机号码
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
		case 'tel': //座机
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'card': //身份证
			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
		case 'mobileCode': //6位数字验证码
			return /^[0-9]{6}$/.test(str)
		case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
			return /^([a-zA-Z0-9_]){6,18}$/.test(str)
		case 'payPwd': //支付密码 6位纯数字
			return /^[0-9]{6}$/.test(str)
		case 'postal': //邮政编码
			return /[1-9]\d{5}(?!\d)/.test(str);
		case 'QQ': //QQ号
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'email': //邮箱
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'money': //金额(小数点2位)
			return /^\d*(?:\.\d{0,2})?$/.test(str);
		case 'URL': //网址
			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
		case 'IP': //IP
			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
		case 'date': //日期时间
			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/
				.test(str)
		case 'number': //数字
			return /^[0-9]$/.test(str);
		case 'english': //英文
			return /^[a-zA-Z]+$/.test(str);
		case 'chinese': //中文
			return /^[\\u4E00-\\u9FA5]+$/.test(str);
		case 'lower': //小写
			return /^[a-z]+$/.test(str);
		case 'upper': //大写
			return /^[A-Z]+$/.test(str);
		case 'HTML': //HTML标记
			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
		default:
			return true;
	}
}
