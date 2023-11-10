/*!
 * reading-duration
 * Copyright (c) Mutasim
 * MIT Licensed
*/

import { ReadingOptions } from "./types";

declare module 'reading-duration' {
    export default function readingDuration(htmlContent: string, options?: ReadingOptions): string;
}
