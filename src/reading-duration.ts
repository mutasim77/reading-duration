/*!
 * reading-duration
 * Copyright (c) Mutasim
 * MIT Licensed
*/
interface ReadingOptions {
    wordsPerMinute?: number;
    emoji?: boolean | string;
}

interface Emojis {
    [index: string]: string;
}

const emojis: Emojis = {
    hourglass_done: '⌛ ',
    hourglass_not_done: '⏳ ',
    stopwatch: '⏱ ',
    clock: '🕒 ',
    watch: '⌚ ',
    timer: '⏲ ',
    alarm: '⏰ ',
    books: '📚 ',
    open_book: '📖 ',
    closed_book: '📕 ',
    blue_book: '📘 ',
    green_book: '📗 ',
    orange_book: '📙 ',
    notebook: '📓 ',
    notebook_alt: '📔 ',
}

export default function readingDuration(htmlContent: string, options: ReadingOptions = {}): string {
    const { wordsPerMinute = 200, emoji = true } = options;

    // Remove HTML tags (e.g., if text was converted from Markdown)
    const plainText = htmlContent.replace(/<[^>]*>/g, '');
    const words = plainText.split(/\s+/).length;

    /*! 
     *  Assuming an average reader reads around 200-230 words per minute, 
     *  research can be found here: https://scholarwithin.com/average-reading-speed
    */
    const minutes = (words / wordsPerMinute);

    // Round up to the nearest minute
    const readingTime = Math.ceil(minutes);

    const emojiChoice = typeof emoji === 'string'
        ? emojis[emoji]
        : emoji ? '⌛ ' : ''

    return `${emojiChoice}${readingTime} min read`;
};
