import React, { useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

const MyEditor = () => {
  const editor1 = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Slate
        editor={editor1}
        value={[
          {
            type: 'paragraph',
            children: [{ text: 'This editor is styled using the style prop.' }],
          },
        ]}
      >
        <Editable
        />
      </Slate>
    </div>
  )
}

export default MyEditor