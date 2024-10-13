import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '../conf/conf.js'

export default function RTE({name,control,label,defaultValue=''}) {
  return (
    <div className='w-full'>
        {
            label && <label className='flex flex-wrap mb-1 pl-1'>{label}</label>
        }
        <Controller 
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            apiKey='yv2jyglrsgx2l098uypy0niuuraisr9qzp98f0was0vt4dmj'
            init={{ 
                initialValue:{defaultValue},
                height: 500,
                menubar: false,
                plugins: [
                    "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
                ],
                toolbar:
                "undo redo | formatselect | bold italic backcolor forecolor underline| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

