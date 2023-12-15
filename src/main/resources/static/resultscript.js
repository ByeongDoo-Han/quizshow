document.addEventListener("DOMContentLoaded", function () {

    // var zero = localStorage.getItem(Object.keys(localStorage)[0]);
    // var one = localStorage.getItem(Object.keys(localStorage)[1]);
    // var two = localStorage.getItem(Object.keys(localStorage)[2]);
    // var three = localStorage.getItem(Object.keys(localStorage)[3]);
    // var four = localStorage.getItem(Object.keys(localStorage)[4]);
    // var five = localStorage.getItem(Object.keys(localStorage)[5]);
    // var six = localStorage.getItem(Object.keys(localStorage)[6]);
    // var seven = localStorage.getItem(Object.keys(localStorage)[7]);
    // var eight = localStorage.getItem("민선");
    // var nine = localStorage.getItem("태이");
    // var ten = localStorage.getItem("승범");
    // var eleven = localStorage.getItem("지은");
    // const twelve =localStorage.getItem("솔");
    // var thirteen = localStorage.getItem("성현");
    // var fourteen = localStorage.getItem("세인");
    // let fifteen = localStorage.getItem("수");

    //
    // var alldata = Object.keys(localStorage);
    // document.getElementById("one").innerText = one;

});
function clear(){
    document.getElementById("clear").addEventListener("click", function () {
        localStorage.clear();
    });
}
function refresh(){
    document.getElementById("one").innerText ="";
    Object.keys(localStorage).forEach(function(key) {
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
        const pa = document.createElement('p');
        pa.textContent = `${item.key} : ${item.value}`;
        document.getElementById("one").append(`${key}: ${value}\n`);
    });
}

function refresh2(){
    let oldstoredData = Object.keys(localStorage).map(key => {
        return { key: key, value : localStorage.getItem(key)};
    });
    console.log(oldstoredData);
    if (oldstoredData !== null && oldstoredData !== undefined) {
        let storedData = oldstoredData.sort((a, b) => b.key.localeCompare(a.value));
        const sortedDataDiv = document.getElementById("one");
        storedData.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `${item.key} : ${item.value}`;
            sortedDataDiv.appendChild(p);
        });
    }else{
        console.log('sorted data is undefined')
    }
};

function toSpeed2(){

}

function toResult(){
    window.location.href="resultPage.html";
}

