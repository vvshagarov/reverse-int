module.exports = function reverse (n) {
    var strnum = String(n);
    revnum = '';
    var i = String(n).length;
    if (n >= 0) {
        while (i > 0) {
            revnum = revnum + strnum[i - 1];
            i--;
        }
    return +revnum;
    }
    else {
        while (i > 1) {
            revnum = revnum + strnum[i - 1];
            i--;
        }
    return +revnum;
    }
}
