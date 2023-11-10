import { describe, expect, test } from '@jest/globals';
import readingDuration from '../src/reading-duration';

describe('readingDuration()', () => {
    test('calculates reading time with longer text and default options', () => {
        const text = `
            Abilities forfeited situation extremely my to he resembled. Old had conviction discretion understood put principles you. Match means keeps round one her quick. She forming two comfort invited. Yet she income effect edward. Entire desire way design few. Mrs sentiments led solicitude estimating friendship fat. Meant those event is weeks state it to or. Boy but has folly charm there its. Its fact ten spot drew.
            Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all.
            Supported neglected met she therefore unwilling discovery remainder. Way sentiments two indulgence uncommonly own. Diminution to frequently sentiments he connection continuing indulgence. An my exquisite conveying up defective. Shameless see the tolerably how continued. She enable men twenty elinor points appear. Whose merry ten yet was men seven ought balls.
            Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
        `;

        const readingTime = readingDuration(text);
        expect(readingTime).toBe('⌛ 2 min read');
    });

    test('calculates reading time with custom options and html content', () => {
        const htmlContent = `
            <h1>Welcome!</h1>
            <h2>The Impact of Artificial Intelligence on Society 🤖</h2>
            <p>Artificial Intelligence (AI) is transforming various aspects of our society...</p>
            <!-- More HTML content -->
        `;

        const options = {
            wordsPerMinute: 220,
            emoji: false,
        };

        const readingTime = readingDuration(htmlContent, options);
        expect(readingTime).toBe('1 min read');
    });
});
