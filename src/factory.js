class JQuery{
    constructor(selector){
        const dom = document.querySelectorAll(selector)
        const slice = Array.prototype.slice
        const domList = slice.call(dom)
        const len = domList? domList.length:0
        for(let i = 0; i < len; i++){
            this[i] = domList[i]
        }
        this.length = len
        this.selector = selector || ''
    }
}
window.jq = function(selector){
    return new JQuery(selector)
}