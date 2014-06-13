jQuery(function ($) {

	/*
	 * preventDefault / stopPropagation を使った例
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

	$('.windowBody').click(function (event) {
		// ウィンドウをクリックしても、閉じないようにする
		// (親である .windowBg への伝播を止める)
		event.stopPropagation();
	});

	$('.btnClose').click(function (event) {
		// 閉じるボタンのイベントをキャンセルする
		// (親である .windowBg への伝播は行う → ウィンドウは閉じられる)
		event.preventDefault();
	});
});
