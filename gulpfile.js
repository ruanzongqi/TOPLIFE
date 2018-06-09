var gulp = require("gulp");
var sass = require("gulp-sass");

//复制html文件
gulp.task("copy-index",function(){
	gulp.src("./*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\TOPLIFE"));
});
//复制js
gulp.task("jsfile",function(){
	gulp.src("js/**/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\TOPLIFE\\js"));
});
//sass编译
gulp.task("sassfile",function(){
	gulp.src("scss/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\TOPLIFE\\css"));
});
//复制图片
gulp.task("images",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\TOPLIFE\\img"));
});

//启动监听器
gulp.task("watchall",function(){
	gulp.watch("./*.html",["copy-index"]);
	gulp.watch("js/**/*.js",["jsfile"]);
	gulp.watch("scss/**/*.scss",["sassfile"]);
	gulp.watch("img/**/*",["images"]);
});