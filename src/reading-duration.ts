/*!
 * reading-duration
 * Copyright (c) Mutasim
 * MIT Licensed
*/

import { ReadingOptions } from "./types";

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

    return `${emoji ? '⌛ ' : ''}${readingTime} min read`;
};
