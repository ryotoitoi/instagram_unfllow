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

    // 1000秒ごとにモーダル内をスクロール（約16分40秒）
    if (now - lastScrollTime >= 1000000) {
        if (modalContent) {
            modalContent.scrollTop += 500; // モーダル内を500ピクセル下へスクロール
        }
        lastScrollTime = now;
    }

    // "フォロー中"ボタンを探してクリック
    const followButton = findButtonByText("フォロー中");
    if (followButton) {
        followButton.click();

        // 少し待ってから"フォローをやめる"ボタンをクリック（100秒後）
        setTimeout(() => {
            const unfollowButton = findButtonByText("フォローをやめる");
            if (unfollowButton) {
                unfollowButton.click();
            }
        }, 100000); // 100秒待つ
    } else {
        console.log('フォロー中ボタンが見つかりません。');
    }
}, 300000); // 300秒（5分）ごとにチェック

// 実行を停止する場合
// clearInterval(interval);
