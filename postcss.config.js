module.exports = {
    plugins : [
        require('autoprefixer')({
            // browsers : ["> 0.01%"]
            browsers : ['last 10 versions','Firefox >= 20','Android >= 4.0','iOS >= 8']
        })
    ]
}