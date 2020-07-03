const aws = require('aws-sdk')
const multers3 = require('multer-s3')
const multer = require('multer')
const path = require('path')
require('dotenv').config()

const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})



module.exports = multer({
    storage: multers3({
        s3:s3,
        bucket: "sports-app-rodrigoonetto",
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.fieldname})
        },
        key: function(req, file, cb){
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname)

            cb(null, `${name.replace(/\s/g, '')}-${Date.now()}${ext}`)
        }
    })
})