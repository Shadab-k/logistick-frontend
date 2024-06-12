"use client";
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const data =  {heading:'Frequently Asked <br/>Questions', description:' What type of sexual wellness treatments does Nirvasa offer ?'};

const faskequetions = [
    {itemkey:'1', label:'Accordion 1', title:' What type of sexual wellness treatments does Nirvasa offer ?', discription:'Nirvasa is the digital healthcare provider for both men and women who are experiencing health issues or want to improve or support their health and prefer to do so from the comfort of their homes, eliminating long queues and delays.'},

    {itemkey:'2', label:'Accordion 2', title:' Will my information remain secured ?', discription:'It’s quite simple! Take an online self-assessment test to provide information about your symptoms and medical history to your online doctor. We will then connect you with a qualified and skilled doctor that specializes in that specific issue and will study the information you provide and evaluate your treatment options. Your doctor may ask you questions, to which you can respond via our safe online message system. Suppose your tailored treatment plan includes a prescription. In that case, it will be shipped in discreet packaging to the delivery address you supplied a few days after your therapist completes your evaluation. If your provider thinks that medication is not appropriate for you, they will notify you of your next steps.'},

    {itemkey:'3', label:'Accordion 3', title:'How is Nirvasa care plan shipped ?', discription:'It’s quite simple! Take an online self-assessment test to provide information about your symptoms and medical history to your online doctor. We will then connect you with a qualified and skilled doctor that specializes in that specific issue and will study the information you provide and evaluate your treatment options. Your doctor may ask you questions, to which you can respond via our safe online message system. Suppose your tailored treatment plan includes a prescription. In that case, it will be shipped in discreet packaging to the delivery address you supplied a few days after your therapist completes your evaluation. If your provider thinks that medication is not appropriate for you, they will notify you of your next steps.'},

    {itemkey:'4', label:'Accordion 4', title:'Is there some other thing, which I should expect when I receive my care plan?', discription:'Indeed, following your purchase, our experienced doctor will thoroughly review your issues, history, and lifestyle to tailor the plan to your specific needs. The plans discussed to provide an outline of what to expect in your plan, but each individual&#39;s needs vary, and our doctors are experts at leading you on your personal route to wellness.'},

    {itemkey:'5', label:'Accordion 5', title:'How quickly can I see results?', discription:'We at Nirvasa follow a holistic approach to wellbeing that integrates 4 Wellness Pillars, helping to understand individual concerns and recommend personalised treatments.'},
]
export default function Faqs(){
    return(
        <>
        <section className='faqs_sec common_sec_gap bg_white space_top'>
            <div className='max_container'>
                <div className='text_left'>
                    <div className='heading_title text_secondry'><h2 dangerouslySetInnerHTML={{__html: `${data.heading}`}}></h2></div>
                </div>
                    <Accordion className="mt-10 home_accodion w-full">
                       {faskequetions.map((item, index:any) =>(
                        <AccordionItem key={index} className="pt-0 w-full position_index fadeIn"
                            aria-label={item.label}
                            subtitle={
                            <h3 className="d_flex align_items_center justify_between w-full position_index">
                               {item.title}
                            </h3>
                            }
                        >
                            <div className="ml-auto max-w-4xl">
                                <p>
                                    {item.discription}
                                </p>
                            </div>
                        </AccordionItem>
                        ))}
                        
      
                    </Accordion>
            </div>
        </section>
        </>
    )
}