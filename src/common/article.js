export function normalizeHTML(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    let text = div.innerText.replace(/href/g, '')
    return text.replace(/style=\"border-bottom-width:1px;border-bottom-style:dashed\;\"/g, '')
}


export default class article {
    constructor({ id, article_author, article_content, article_title, rand_cover, time}){
        this.id = id,
        this.author = article_author,
        this.content = normalizeHTML(article_content),
        this.title = normalizeHTML(article_title),
        this.src = 'https://angelswing.com.cn' + rand_cover,
        this.time = time
    }
}

export function createArticle(arti) {
    return new article(arti)   
}