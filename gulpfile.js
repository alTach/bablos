var gulp = require("gulp"), // Подключаем Gulp
  sass = require("gulp-sass")(require("sass")), //Подключаем Sass пакет,
  pug = require("gulp-pug"),
  browserSync = require("browser-sync"), // Подключаем Browser Sync
  autoprefixer = require("gulp-autoprefixer"); // Подключаем библиотеку для автоматического добавления префиксов

gulp.task("sass", function() {
  return gulp
    .src("app/sass/style.scss") // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true
      })
    ) // Создаем префиксы
    .pipe(gulp.dest("./app")) // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task("pug", function() {
  return gulp
    .src("app/pug/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./app"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function(done) {
  // Создаем таск browser-sync
  browserSync({
    // Выполняем browserSync
    server: {
      // Определяем параметры сервера
      baseDir: "app" // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  }, done);
});

gulp.task("serve", gulp.series("browser-sync", function(done) {
  gulp.watch("./app/sass/**/*.scss", gulp.series("sass")); // Наблюдение за sass файлами в папке sass
  gulp.watch("./app/pug/**/*.pug", gulp.series("pug")); // Наблюдение за HTML файлами в корне проекта
  gulp.watch("./app/script.js").on('change', browserSync.reload); // Наблюдение за JS файлами в папке js
  done();
}));

gulp.task("default", gulp.series("serve"));