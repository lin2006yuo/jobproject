export function normalizeHTML(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div.innerText
}


export default class article {
    constructor({ id, article_author, article_content, article_title, rand_cover, time}){
        this.id = id,
        this.author = article_author,
        this.content = article_content,
        this.title = normalizeHTML(article_title),
        this.src = 'https://angelswing.com.cn' + rand_cover,
        this.time = time
    }
}

export function createArticle(arti) {
    return new article(arti)   
}