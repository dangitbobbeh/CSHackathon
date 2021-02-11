document.addEventListener("DOMContentLoaded", function (){
    document.getElementById('cuteify').addEventListener('click', cutieClick, false)
    document.getElementById('codeify').addEventListener('click', codieClick, false)
    document.getElementById('confetti').addEventListener('click', confetti, false)

    function cutieClick(){
        chrome.tabs.query({currentWindow: true, active: true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, 'cuties')
        })
    }
    function codieClick(){
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'codies')
            })
        }
    function confetti() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'confetti')
            })
    }
},false)
