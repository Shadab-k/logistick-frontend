"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const maintitle={heading:'Our Team'}
const ourteamembers =[
    {img:'/assets/images/team_pic1.jpg', name:'Lakshman Kumar',  altname:'Lakshman Kumar', designation:'CEO',
        socialIcon:[
            {icon:'icon-linkedin2'},
            {icon:'icon-instagram'}
        ]
    },
    {img:'/assets/images/team_pic2.jpg', name:'Govind Mishra',  altname:'Govind Mishra', designation:'Product Manager',
        socialIcon:[
            {icon:'icon-linkedin2'},
            {icon:'icon-instagram'}
        ]
    },
    {img:'/assets/images/team_pic3.jpg', name:'Rahul Singh',  altname:'Rahul Singh', designation:'Software Engineer',
        socialIcon:[
            {icon:'icon-linkedin2'},
            {icon:'icon-instagram'}
        ]
    }
]
export default function OurTeam(){
    return(
        <section className='our_team common_sec_gap pt-0'>
            <div className='max_container position_index'>
                <div className='text_center'>
                    <div className="heading_title under_line center"><h2 className='text_secondry'>{maintitle.heading}</h2></div>
                </div>
                <div className='d_grid grid3 grid_sm2 grid_xs100 gap20 w-full'>
                    {ourteamembers.map((item, index:any)=>(
                   <div key={index} className='box_team'>
                        <div className='team_img_box overflow_hidden border_radius10'>
                            <Image className='w-full h-full boject_fill' src={item.img} height={350} width={500} alt={item.altname}/>
                            <span className="view_icon icon-eye"></span>
                        </div>
                        <div className='px-20 py-20 team_data'>
                            <div><h4>{item.name}</h4>
                            <span className='designation'>{item.designation}</span></div>
                            <ul>
                            {item.socialIcon.map((item, index:any)=>(
                                <li key={index}><Link href=''><span className={item.icon}></span></Link></li>
                            ))}
                            </ul>
                        </div>
                   </div>
                   ))}
                </div>
            </div>
        </section>
    )
}