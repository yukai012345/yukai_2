// ナビゲーションのトグル機能
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});

// Swiperの設定
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 16,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
    });
});

// フォームの送信イベント
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    alert('メッセージが送信されました！');
    // ここにフォーム送信のロジックを追加できます
});
