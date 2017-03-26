'use strict';

module.exports = function () {
	$.gulp.task('sprite:png', function () {
		var spriteData = $.gulp.src('./source/sprite/*.{png,gif,jpg}').pipe($.gp.spritesmith({
			imgName: 'sprite.png', // итоговый спрайт
			cssName: 'sprite.scss', // файл стилей
			algorithm: 'left-right',
			cssFormat: 'css',
			imgPath: 'sprite.png',
			padding: 70
		}));
		var imgStream = spriteData.img
			.pipe($.gulp.dest($.config.root + '/assets/css')); // путь куда записываем спрайт

		var cssStream = spriteData.css
			.pipe($.gulp.dest('./source/style/sprite')); // путь куда записываем файл стилей для спрайта


		return $.merge(imgStream, cssStream);
	});

};