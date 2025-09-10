import * as React from 'react'
import { useEditor } from '@grapesjs/react'
import {
  mdiArrowULeftTop,
  mdiArrowURightTop,
  mdiBorderRadius,
  mdiFullscreen,
  mdiPublish,
  mdiXml,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useEffect, useState } from 'react'
import { BTN_CLS, MAIN_BORDER_COLOR, cx } from './common'

interface CommandButton {
  id: string
  iconPath: string
  options?: Record<string, any>
  disabled?: () => boolean
}

export default function TopbarButtons({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const editor = useEditor()
  const [, setUpdateCounter] = useState(0)
  const { UndoManager, Commands } = editor
  const cmdButtons: CommandButton[] = [
    {
      id: 'core:component-outline',
      iconPath: mdiBorderRadius,
    },
    {
      id: 'core:fullscreen',
      iconPath: mdiFullscreen,
      options: { target: '#root' },
    },
    {
      id: 'core:open-code',
      iconPath: mdiXml,
    },
    {
      id: 'core:undo',
      iconPath: mdiArrowULeftTop,
      disabled: () => !UndoManager.hasUndo(),
    },
    {
      id: 'core:redo',
      iconPath: mdiArrowURightTop,
      disabled: () => !UndoManager.hasRedo(),
    },
  ]

  useEffect(() => {
    const cmdEvent = 'run stop'
    const updateEvent = 'update'
    const updateCounter = () => setUpdateCounter((value) => value + 1)
    const onCommand = (id: string) => {
      cmdButtons.find((btn) => btn.id === id) && updateCounter()
    }
    editor.on(cmdEvent, onCommand)
    editor.on(updateEvent, updateCounter)

    return () => {
      editor.off(cmdEvent, onCommand)
      editor.off(updateEvent, updateCounter)
    }
  }, [])

  const handlePublish = () => {
    // ✅ Get full project JSON
    const projectData = editor.getProjectData()

    // Just log it OR download as file
    // console.log(projectData)

    // Convert to file and trigger download
    const blob = new Blob([JSON.stringify(projectData, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'project.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className={cx('flex gap-3', className)}>
      {cmdButtons.map(({ id, iconPath, disabled, options = {} }) => (
        <button
          key={id}
          type="button"
          className={cx(
            BTN_CLS,
            MAIN_BORDER_COLOR,
            Commands.isActive(id) && 'text-sky-300',
            disabled?.() && 'opacity-50',
          )}
          onClick={() => (Commands.isActive(id) ? Commands.stop(id) : Commands.run(id, options))}
          disabled={disabled?.()}
        >
          <Icon path={iconPath} size={1} />
        </button>
      ))}

      <button
        onClick={handlePublish}
        type="button"
        className={cx(BTN_CLS, MAIN_BORDER_COLOR, 'cursor-pointer')}
      >
        <Icon path={mdiPublish} size={1} />
      </button>
    </div>
  )
}
