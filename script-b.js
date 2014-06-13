jQuery(function ($) {

	/*
	 * preventDefault / stopPropagation を使わない例 (不具合あり)
	 */

	$('.btnOpen').click(function () {
		// ボタンが押されたら、モーダルウィンドウを表示
		$('.windowBg').show();
		return false;
	});

	$('.windowBg').click(function () {
		// 背景がクリックされたら、ウィンドウを閉じる
		$('.windowBg').hide();
		return false;
	});
});
