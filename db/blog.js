var mongoose = require('./config');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "tags": Array,
    "creatTime": String,
    "textCount": Number,
    "readDuration": Number,
    "readTimes": Number,
    "title": String,
    "subtitle": String,
    "description": String,
    "comments": Array,
    "content": String
}, {
    timestamps: {
        createdAt: 'createtime',   // 创建时间
        updatedAt: 'updattime'     // 升级时间
    }
});
var schema = mongoose.model('Blog', userSchema);

module.exports = {
    //1.增
    //1）插入多条数据：单个数据可以是json对象，多个数据放在数组中；
    insertMany: function (aryjson) {
        return schema.insertMany(aryjson)
    },
    //2.删
    //1）删除满足条件的一条数据：
    deleteOne: function (filter) {
        return schema.deleteOne(filter)
    },
    //2）删除满足条件的所有数据：
    deleteMany: function (filter) {
        return schema.deleteMany(filter)
    },
    //3.改
    //1）修改满足条件的一条数据：
    updateOne: function (filter, updatejson) {
        return schema.updateOne(filter, updatejson)
    },
    //2）修改满足条件的多条数据：
    updateMany: function (filter, updatejson) {
        return schema.updateMany(filter, updatejson)
    },
    //4.查
    //1）查找，排序，分页
    find: function (filter, sortcur) {
        //sortcur:{"sort":{"age":-1},page,pageamount}
        var filter = filter || {}
        var sortcur = sortcur || {}
        var sort = sortcur.sort || {};
        var page = Number(sortcur.page) || 0;
        var pageamount = Number(sortcur.pageamount) || 0;
        return schema.find(filter).sort(sort).limit(pageamount).skip(page * pageamount);
        // 
    },
    //2）获取满足条件的数据总个数
    count: function (filter) {
        return schema.countDocuments(filter)
    },
    //3) 通过id查询数据单条数据
    findById: function (id) {
        return schema.findById(id);
    },
};