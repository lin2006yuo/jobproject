
import { replaceSrc, randomRange } from '@/common/util'
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
        this.content = replaceSrc(normalizeHTML(article_content)),
        this.title = normalizeHTML(article_title),
        this.src = (/mmbiz.qlogo.cn/i.test(rand_cover) ? `http://img01.store.sogou.com/net/a/04/link?appid=100520029&url=${rand_cover}` : rand_cover), // if(rand_cover.test)
        this.time = new Date(randomRange(1541756723000,1483200000000))
        this.view = randomRange(30000, 50000)
        this.like = randomRange(500, 5000)
    }
}

export function createArticle(arti) {
    return new article(arti)   
}