const gulp = require("gulp");

//开启服务器
const connect = require("gulp-connect");

// 引入反向代理模块，处理跨域问题
const proxy = require("http-proxy-middleware");

// 引入压缩css及编译sass文件模块
// const scssToCss = require("gulp-sass");


// gulp.task("scssToCss",function(){
//     gulp.src("newegg/scss/*")
//         .pipe(scssToCss({
//             outputStyle:"expanded"
//         }))
//         .pipe(gulp.dest("newegg/css/*"))
// })

// // 监听sass文件变化
// gulp.task("watch-scss", function () {
//     gulp.watch("newegg/sass/*", ["scssToCss"]);
// });



//热更新
// gulp.task("watch-server",function(){
//     gulp.watch("src/**/*",function(){
//         gulp.src("src/**/*")
//             .pipe(connect.reload())
//     })
// })

gulp.task("server",function(){
    connect.server({
        root:"./src",
        port:8877,
        livereload:true,
        middleware:function(){
            return[
                proxy("/Ajax",{
                    target:"https://www.newegg.cn",
                    changeOrigin:true
              }),  
            ];
        }
    })
});

//监听总开关
gulp.task("F5",["server"]);
// ,"watch-server"