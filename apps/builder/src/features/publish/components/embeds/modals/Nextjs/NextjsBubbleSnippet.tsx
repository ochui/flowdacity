import { CodeEditor } from '@/components/inputs/CodeEditor'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { BubbleProps } from '@flowdacity/nextjs'
import parserBabel from 'prettier/parser-babel'
import prettier from 'prettier/standalone'
import { parseReactBubbleProps } from '../../snippetParsers'

export const NextjsBubbleSnippet = ({
  theme,
  previewMessage,
}: Pick<BubbleProps, 'theme' | 'previewMessage'>) => {
  const { typebot } = useTypebot()

  const snippet = prettier.format(
    `import { Bubble } from "@flowdacity/nextjs";

      const App = () => {
        return <Bubble ${parseReactBubbleProps({
          typebot: typebot?.publicId ?? '',
          theme,
          previewMessage,
        })}/>
      }`,
    {
      parser: 'babel',
      plugins: [parserBabel],
    }
  )

  return <CodeEditor value={snippet} lang="javascript" isReadOnly />
}
