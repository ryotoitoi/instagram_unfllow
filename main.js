// テキストを基に特定のボタンを探す関数
function findButtonByText(text) {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.find(button => button.textContent.includes(text));
}

let lastScrollTime = Date.now();

// モーダル要素を特定
const modalContent = document.querySelector('div._aano');

// ボタンを定期的にチェックして操作を行う
const interval = setInterval(() => {
    // 現在の時刻
    const now = Date.now();

    // 10秒ごとにモーダル内をスクロール
    if (now - lastScrollTime >= 10000) {
        if (modalContent) {
            modalContent.scrollTop += 500; // モーダル内を500ピクセル下へスクロール
        }
        lastScrollTime = now;
    }

    // "フォロー中"ボタンを探してクリック
    const followButton = findButtonByText("フォロー中");
    if (followButton) {
        followButton.click();

        // 少し待ってから"フォローをやめる"ボタンをクリック
        setTimeout(() => {
            const unfollowButton = findButtonByText("フォローをやめる");
            if (unfollowButton) {
                unfollowButton.click();
            }
        }, 1000); // 1秒待つ
    } else {
        console.log('フォロー中ボタンが見つかりません。');
    }
}, 3000); // 3秒ごとにチェック

// 実行を停止する場合
// clearInterval(interval);
