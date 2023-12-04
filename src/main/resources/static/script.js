window.addEventListener('DOMContentLoaded', () => {
    const quizLinks = document.querySelectorAll('.quiz-link');
    quizLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 클릭한 링크에 대한 추가적인 처리를 여기에 작성합니다.
            // 예를 들어, 퀴즈 페이지로 이동하거나 다른 동작을 수행할 수 있습니다.
        });
    });
});