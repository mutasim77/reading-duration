# Reading Duration 📖⌛

Estimate the reading duration of your blog posts or articles. This lightweight npm package calculates the 
approximate time it takes for an average reader to consume your content, helping you provide readers with an 
insightful glance at the commitment required.

## Installation 📦
```sh
npm install reading-duration
```

## Usage ⚙️

```ts
import readingDuration from 'reading-duration';

const text = 'Hello World...';

const readingTime = readingDuration(text);
console.log(readingTime); // => '⌛ 1 min read'
```

> It can also calculate the duration even if your content contains HTML tags(by ignoring them), especially when you're building a blog website with MDX

```ts
import readingDuration from 'reading-duration';

const htmlContent = `
      <h1>Hello World!</h1>
    <p>Here your content...</p>
`;

const readingTime = readingDuration(htmlContent, {
  wordsPerMinute: 100
  emoji: false
});
console.log(readingTime); // => '1 min read'
```

## API 🎩

```readingDuration(content: string, options?: ReadingOptions): string```

**_Parameters_**
- **htmlContent** (string): The HTML content of your blog post or article.
- **options** (optional): An object with the following optional properties:
  - **wordsPerMinute** (number, default: 200): The average words per minute read rate.
  - **emoji** (boolean, default: true): Whether to include an emoji in the output.

**_Returns_**

A string representing the estimated reading time, including an optional emoji.

