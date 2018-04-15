/**
 * Created by flp on 2018/4/14.
 */

document.onclick=function () {
    axios.get('/index/addition')
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(err) {
            console.log(err);
        });
};