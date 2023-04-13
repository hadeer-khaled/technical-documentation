let allCodeElem = document.querySelectorAll("code")

Array.from(allCodeElem).forEach(codeElem => {
    var copyBtn = document.createElement("button")
    copyBtn.classList.add("copyBtn")
    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i>`
    copyBtn.style.cssText = "background-color:transparent; outline:none;border:none; position:absolute ; right: 5px ; cursor:pointer; font-size:1em; color:white;"
    codeElem.before(copyBtn)
})

let allCopyBtns = document.querySelectorAll(".copyBtn")

Array.from(allCopyBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.currentTarget.nextSibling)
        navigator.clipboard.writeText(e.currentTarget.nextSibling.innerHTML)
        e.currentTarget.innerHTML = `<i class="fa-solid fa-check"></i>`
    })
})


