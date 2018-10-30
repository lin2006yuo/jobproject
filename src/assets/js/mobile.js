export function isMobile() {
    var ua = navigator.userAgent.toLowerCase();
    var StringPhoneReg = "\\b(ip(hone|od)|android|opera m(ob|in)i"
        + "|windows (phone|ce)|blackberry"
        + "|s(ymbian|eries60|amsung)|p(laybook|alm|rofile/midp"
        + "|laystation portable)|nokia|fennec|htc[-_]"
        + "|mobile|up.browser|[1-4][0-9]{2}x[1-4][0-9]{2})\\b";
    var StringTableReg = "\\b(ipad|tablet|(Nexus 7)|up.browser"
        + "|[1-4][0-9]{2}x[1-4][0-9]{2})\\b";

    console.log(ua);
    var isIphone = ua.match(StringPhoneReg),
        isTable = ua.match(StringTableReg),
        isMobile = isIphone || isTable;

    if (isMobile) {
        console.log('移动端')
        window.location.href = "https://m.angelswing.com.cn";
        return true;
    } else {
        console.log('PC')
        return 
    }
}
