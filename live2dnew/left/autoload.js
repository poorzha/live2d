// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/poorzha/live2d/live2dnew/left/";

//const live2d_path = "/live2d-widget/";
//const live2d_path="https://api.itggg.cn/live2dnew/left/";
//const live2d_path = "https://cdn.jsdelivr.net/gh/poorzha/live2d-widget/";


// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.min.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.min.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			//cdnPath: "https://live2d-api.vercel.app/"
            //cdnPath: "https://npm.elemecdn.com/akilar-live2dapi@latest/"
			apiPath:"https://api.itggg.cn/live2d_api/"
		});
	});
}




// function loadExternalResource(url,type){return new Promise((resolve,reject)=>{let tag;if(type==="css"){tag=document.createElement("link");tag.rel="stylesheet";tag.href=url}else if(type==="js"){tag=document.createElement("script");tag.src=url}if(tag){tag.onload=()=>resolve(url);tag.onerror=()=>reject(url);document.head.appendChild(tag)}})}if(screen.width>=768){Promise.all([loadExternalResource(live2d_path+"waifu.min.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.min.js","js")]).then(()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",apiPath:"https://api.itggg.cn/live2d_api/",})})}