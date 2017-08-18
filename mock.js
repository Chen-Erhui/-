// 使用 Mock
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
//	"top":{
//		'list|31': [{
//      'id|+1': 1,
//      'categoryName':'@ctitle(3)',
//  	}]
//	},
//	'focusMap':{
//		'img|5':[{
//			'id|+1': 1,
//			'name':"@ctitle(2-4)",
//			'img':'@image(320x142,@color,@ctitle(3))'
//		}]
//	},
//	'firstPage':{
//		'list|8':{
//			'text':'@ctltle(4)',
//			[]
//		}
//	}
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

fs.writeFile('db.json', JSON.stringify(data, null, 4),  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});