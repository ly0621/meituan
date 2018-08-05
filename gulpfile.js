var gulp = require('gulp');
var server = require('gulp-webserver');

//console.log(data);
var fs = require('fs');
var path = require('path');
var data = fs.readFileSync('./src/data/data.json');
gulp.task('server', function() {
    gulp.src('./src/')
        .pipe(server({
            port: 8000,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') { return };
                var pathname = require('url').parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (pathname === '/api/index') {
                    res.end(data.toString());
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})