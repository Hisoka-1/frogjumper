import text from './text.json';

export function params(){
    var queryDict = {};
    location.search.substr(1).split("&").forEach(function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1];
        });
    return queryDict;
};

export function getText(prop){
    let language = params()['lang'];
    if(params()['lang'] == undefined){
        language = 'german';
    }
    return text[language][prop];
};
