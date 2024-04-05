---
title: My test blog title!
description: What an amazing description
date: 2024-04-05
category: javascript
---

<script>
    import Button from '$lib/components/ui/button/button.svelte'

    let message = "";
</script>

This is markdown content with Svelte components inside

<Button on:click={() => message = "Hello friend!"} class="mr-2">Say hello</Button>{message}

Svelte and React are both popular choices in the world of JavaScript frameworks and libraries. However, Svelte has some unique features that make it stand out.

## Simplicity

Svelte is designed to be simple and easy to understand. Unlike React, which requires understanding of JSX and the React lifecycle methods, Svelte uses plain JavaScript and HTML. This makes it a great choice for beginners and experienced developers alike.

## Performance

Svelte compiles your code to tiny, framework-less vanilla JavaScript. This means your app starts fast and stays fast. No virtual DOM, no diffing, just straightforward updates whenever state changes.

## Reactive Statements

In Svelte, reactivity is baked into the language. You don't need to call a function to update your state, like you do with React's `setState` or `useEffect`. Instead, you just assign a new value to your variable, and Svelte takes care of the rest.

## No Virtual DOM

React uses a virtual DOM to track changes and update the UI. While this is a powerful feature, it can also be a source of performance issues. Svelte, on the other hand, compiles your code into imperative code that updates the DOM, which can lead to more efficient updates and better performance.

In conclusion, while React has its strengths and is a great choice for many projects, Svelte's simplicity, performance, and built-in reactivity make it a compelling alternative.
