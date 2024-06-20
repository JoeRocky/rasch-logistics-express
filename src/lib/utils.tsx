import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { For } from "solid-js"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function insertLineBreaks(str: string) {
  // For demonstration, insert a <br> after each word
  return (
    <For each={str.split(' ')}> 
    {(word, index) => (
      <>
        {word}    
        <br/>
      </>
    )}
    </For>
  )
};