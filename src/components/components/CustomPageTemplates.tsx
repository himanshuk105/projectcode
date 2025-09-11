import { useEditor } from '@grapesjs/react'

export const CustomPage = ({ prData }: any) => {
  const editor = useEditor()

  // const [drag, setDrag] = useEffect(null);

  // useEffect(() => {
  //   console.log(editor.Canvas.getLastDragResult())
  //   // if(drag!=null){

  //   // }
  // }, [editor])

  const handleSelectTempalte = (id: string) => {
    const data = structuredClone(prData)
    if (data != null) {
      const pageData = data.find((d: any) => d.id == id)
      editor.loadProjectData(pageData['Template_Code'])
    }
  }
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Template Gallery</h2>
      <div className="grid grid-cols-2 gap-6">
        {prData !== null &&
          prData.map((template: any) => (
            <div
              key={template.id}
              className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={
                  'https://plus.unsplash.com/premium_photo-1720503242868-4ef325ea70bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'Gym'}
                className="w-full h-30 object-cover"
              />
              <div className="p-3 flex flex-col items-center">
                <p className="font-medium text-gray-800">{template['Template_Name']}</p>
                <button
                  draggable
                  className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleSelectTempalte(template.id)}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
