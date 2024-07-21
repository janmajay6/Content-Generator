"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_component/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import { ChatSession } from '@google/generative-ai'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import  moment, { isMoment } from 'moment';
import { totalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS{
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props:PROPS) {
  
  const selectedTemplate : TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])

  const [loading, setLoading]= useState(false);
  const [aiOutput,setAiOutPut] = useState<string>("")
  const{user}= useUser();
  const router = useRouter();
  const{totalUsage, setTotalUsage}=useContext(totalUsageContext);

  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

  /**
   * Used to generate content from AI
   * @param formData 
   * @returns 
   */

  const GenerateAIContent= async (formData:any)=>{
    if(totalUsage>=10000)
    {
      console.log("Please Upgrade");
      router.push('/dashboard/billing')
      return ;
    }
    setLoading(true);
    const selectedPrompt= selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData)+", "+selectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt)

    setAiOutPut(result?.response.text())
    await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now());

     



  }

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result = await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/yyyy'),
    })
    console.log(result)
  }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowBigLeft/> Back</Button>
        </Link>
     
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 py-5' >
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate}
      userFormInput={(v:any)=> GenerateAIContent(v)} loading={loading}/>
      <div className='col-span-2'>
        {/* OutPutSection */}
      <OutputSection aiOutput={aiOutput}/>

      </div>
      
    </div>
    </div>
  )
}

export default CreateNewContent


