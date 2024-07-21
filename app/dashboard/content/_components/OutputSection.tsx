import React, { useCallback, useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  aiOutput :string;
}


function OutputSection({aiOutput}:props) {
  const editorRef:any = useRef()
  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);

  },[aiOutput])
  const copyText= useCallback(()=>{
   
  
    window.navigator.clipboard.writeText(editorRef.current.getInstance().getMarkdown())

  },[editorRef])
  return (
    <div className='bg-white shadow-lg border rounded-lg'> 
    <div className='flex justify-between items-center p-4'>
      <h2 className='font-bold'>Your Result</h2>
      <Button id='copy' className='flex gap-2'onClick={copyText} ><Copy className='w-4 h-4' /> Copy</Button>
    </div>
    <Editor
    ref={editorRef}
    initialValue="Your result will apear here"
       initialEditType="wysiwyg"
 
    height="600px"
 
    useCommandShortcut={true}
    // onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /></div>
  )
} 

export default OutputSection