import { browserHistory } from 'react-router';

export const goToUrl = (url: string, event?: any) => {
    if (!event) {
        return (event: any) => {
            event.preventDefault();
            browserHistory.push(url)
        }
    }

    event.preventDefault();
    browserHistory.push(url);  
    return(0);

};

export function showOrHide(p: boolean) {
    if (p) {
        return '';
    }
    return 'hidden';
}

export function newObject(...objs: any[]): any {
    let result: any = {};
    objs.forEach(o => Object.assign(result, o));
    return result;
}