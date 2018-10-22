var disableHosts = [
    "*.sinaimg.cn"
];

var disableUrls = [
    "*/vipgg/*"
];

var direct = "DIRECT";
var disableProxy = "PROXY 8.8.8.8:53";
var charlesProxy = "PROXY 127.0.0.1:8888";

function FindProxyForURL(url, host) {
    for (var i = 0; i < disableHosts.length; i++) {
        if (shExpMatch(host, disableHosts[i])) {
            return disableProxy;
        }
    }

    for (var j = 0; j < disableUrls.length; j++) {
        if (shExpMatch(url, disableUrls[j])) {
            return disableProxy;
        }
    }

    return direct;
}
