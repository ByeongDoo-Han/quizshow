// window.addEventListener('DOMContentLoaded', () => {
//     const quizLinks = document.querySelectorAll('.quiz-link');
//     quizLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             // 클릭한 링크에 대한 추가적인 처리를 여기에 작성합니다.
//             // 예를 들어, 퀴즈 페이지로 이동하거나 다른 동작을 수행할 수 있습니다.
//         });
//     });
// });
function getPageByCode(){
    console.log("a");
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('code-input-button').addEventListener('click', function (){
        fetch("/speedquiz1",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title:"code",
                body:
                }
            )
        })
})});
    // var code = document.getElementById('input-code').value;
    //
    // getPageByCode(code);