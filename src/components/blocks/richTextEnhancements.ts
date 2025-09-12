import { Editor } from 'grapesjs'

/**
 * Adds rich text editor enhancements including font size selector
 * @param editor - GrapesJS editor instance
 */
export const addRichTextEnhancements = (editor: Editor) => {
  try {
    console.log('Adding rich text enhancements...')

    // Wait for editor to be ready
    editor.on('load', () => {
      console.log('Editor loaded, adding RTE enhancements...')
      const rte = editor.RichTextEditor

      // Check if RTE exists
      if (!rte) {
        console.error('RichTextEditor not found')
        return
      }

      // Add font size selector dropdown
      rte.add('fontSize', {
        icon: `<select class="gjs-field" style="min-width: 80px; padding: 2px;">
                 <option value="">Size</option>
                 <option value="1">8px</option>
                 <option value="2">10px</option>
                 <option value="3">12px</option>
                 <option value="4">14px</option>
                 <option value="5">18px</option>
                 <option value="6">24px</option>
                 <option value="7">36px</option>
               </select>`,
        event: 'change',
        result: (rte, action) => {
          console.log('Font size selector clicked', action)
          if (action.btn?.firstChild) {
            const selectElement = action.btn.firstChild as HTMLSelectElement
            const selectedValue = selectElement.value
            console.log('Font size changed to:', selectedValue)
            if (selectedValue) {
              rte.exec('fontSize', selectedValue)
            }
          }
        },
        update: (rte, action) => {
          const value = rte.doc.queryCommandValue(action.name)
          console.log('Updating font size selector, current value:', value)
          if (value !== 'false' && action.btn?.firstChild) {
            const selectElement = action.btn.firstChild as HTMLSelectElement
            selectElement.value = value
          }
          return 0 // Return a number as expected by the type
        },
      })

      console.log('Font size selector added successfully')
    })

    console.log('Rich text enhancements setup completed')

    // You can add more RTE enhancements here in the future
    // For example: font family selector, text color picker, etc.
  } catch (error) {
    console.error('Error adding rich text enhancements:', error)
  }
}

/**
 * Add font family selector to the Rich Text Editor
 * @param editor - GrapesJS editor instance
 */
export const addFontFamilySelector = (editor: Editor) => {
  try {
    const rte = editor.RichTextEditor

    rte.add('fontName', {
      icon: `<select class="gjs-field">
               <option value="Arial">Arial</option>
               <option value="Helvetica">Helvetica</option>
               <option value="Times New Roman">Times New Roman</option>
               <option value="Georgia">Georgia</option>
               <option value="Verdana">Verdana</option>
               <option value="Courier New">Courier New</option>
             </select>`,
      event: 'change',
      result: (rte, action) => {
        if (action.btn?.firstChild) {
          const selectElement = action.btn.firstChild as HTMLSelectElement
          rte.exec('fontName', selectElement.value)
        }
      },
      update: (rte, action) => {
        const value = rte.doc.queryCommandValue(action.name)
        if (value !== 'false' && action.btn?.firstChild) {
          const selectElement = action.btn.firstChild as HTMLSelectElement
          selectElement.value = value
        }
        return 0
      },
    })
  } catch (error) {
    console.error('Error adding font family selector:', error)
  }
}
