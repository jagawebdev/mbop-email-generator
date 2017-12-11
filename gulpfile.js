var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var watch = require("gulp-watch");

gulp.task("watch", function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch("./app/index.html", function() {
		browserSync.reload();
	});

	watch("./app/styles/style.css", function() {
		browserSync.reload()
	});
});
