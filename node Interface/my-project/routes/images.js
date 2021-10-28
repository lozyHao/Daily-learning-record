var express = require('express');
var router = express.Router();

const { } = require('../service/studentsServices')
//导入上传图片的插件封装的方法
const { uploadFiles } = require('../utils/handleFiles')

// 上传图片
router.post('/uploadImages', function (req, res, next) {
    let upload = uploadFiles({
        path: './public/temp', //上传成功后的图片路径
        key: 'file', //和前端的 formData.append("file", files[ 0 ]) 中的file相匹配
        size: 10000
    })
    upload(req, res, (err) => {
        if (err) {
            console.log("图片上传失败");
        } else {
            console.log("图片上传成功", req.files);
            res.send({
                message: '图片上传成功',
                status: 1,
                data: req.files[ 0 ].filename
            });
        }
    })
});

module.exports = router;