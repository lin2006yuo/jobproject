export function replaceSrc(str) {
    return str.replace(/src=\"([^\"]*?)\"/g, "src=\"http://img01.store.sogou.com/net/a/04/link?appid=100520029&url=$1\"")
}

export function randomRange(max, min){
    return parseInt(Math.floor(Math.random()*(max-min+1)+min))
}