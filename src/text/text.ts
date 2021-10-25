import * as StringKit from 'string-kit';

const ucase = (text: string) : string => {
    return text.toUpperCase();
};

const escapeHtml = (text: string): string => {
    return StringKit.escape.html(text);
};

export { ucase, escapeHtml }