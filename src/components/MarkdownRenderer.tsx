'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown-like rendering for demonstration
  // In a real app, you'd use a library like react-markdown or marked

  const renderContent = (text: string) => {
    // Split content into lines for processing
    const lines = text.trim().split('\n')
    const elements: React.ReactElement[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let codeBlockLanguage = ''

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ').trim()
        if (paragraphText) {
          elements.push(
            <p key={elements.length} className="mb-4 leading-relaxed text-gray-700">
              {renderInlineElements(paragraphText)}
            </p>
          )
        }
        currentParagraph = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{codeBlockContent.join('\n')}</code>
          </pre>
        )
        codeBlockContent = []
        codeBlockLanguage = ''
      }
    }

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
        } else {
          flushParagraph()
          inCodeBlock = true
          codeBlockLanguage = line.slice(3).trim()
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // Handle headings
      if (line.startsWith('# ')) {
        flushParagraph()
        elements.push(
          <h1 key={elements.length} className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        flushParagraph()
        elements.push(
          <h2 key={elements.length} className="text-2xl font-semibold text-gray-900 mb-3 mt-8">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        flushParagraph()
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold text-gray-900 mb-2 mt-6">
            {line.slice(4)}
          </h3>
        )
      }
      // Handle images
      else if (line.startsWith('![')) {
        flushParagraph()
        const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
        if (match) {
          const [, alt, src] = match
          elements.push(
            <img
              key={elements.length}
              src={src}
              alt={alt}
              className="w-full rounded-lg shadow-md mb-6"
            />
          )
        }
      }
      // Handle lists
      else if (line.startsWith('- ')) {
        flushParagraph()
        // Look ahead to collect all list items
        const listItems = [line.slice(2)]
        let nextIndex = index + 1
        while (nextIndex < lines.length && lines[nextIndex].startsWith('- ')) {
          listItems.push(lines[nextIndex].slice(2))
          nextIndex++
        }

        elements.push(
          <ul key={elements.length} className="list-disc list-inside mb-4 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i} className="mb-2">{renderInlineElements(item)}</li>
            ))}
          </ul>
        )

        // Skip the processed lines
        for (let i = index + 1; i < nextIndex; i++) {
          lines[i] = '' // Mark as processed
        }
      }
      // Handle empty lines
      else if (line.trim() === '') {
        flushParagraph()
      }
      // Regular paragraph content
      else if (line.trim()) {
        currentParagraph.push(line.trim())
      }
    })

    // Flush any remaining content
    flushParagraph()
    flushCodeBlock()

    return elements
  }

  const renderInlineElements = (text: string) => {
    // Handle inline code
    text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>')

    // Handle bold text
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')

    // Handle links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>')

    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  return (
    <div className="prose max-w-none">
      {renderContent(content)}
    </div>
  )
}
