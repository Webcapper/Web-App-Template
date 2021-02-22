 exports.Get = (req, res, next) => {
    var Model = require('../model/user');
    Model.findOne({ userid: req.body.userid, password: req.body.password }, function (err, docs) {
        if (err || !docs) {
            res.json({ success: 'False' });
        } else {
            res.json({ success: 'True' });
        }
    });
};

exports.Post = (req, res, next) => {
    var Model = require('../model/user');
    Model.findOne({ userid: req.body.userid, password: req.body.password }, function (err, docs) {
        if (err || !docs) {
            res.json({ success: 'False' });
        } else {
            res.json({ success: 'True' });
        }
    });
};