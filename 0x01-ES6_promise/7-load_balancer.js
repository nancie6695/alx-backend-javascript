export default function LoadBalancer (chinaDownload, USDownload){
    return Promise
    .race([chinaDownload, USDownload])
    .then((value) => value);
}