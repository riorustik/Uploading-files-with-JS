import {upload} from "./upload.js";
import { createClient } from '@supabase/supabase-js'
import {supabaseUrl, supabaseKey } from './config.js'

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)

upload('#file', {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif'],
    async onUpload(files, blocks) {
        for (const [index, file] of files.entries()) {
            const block = blocks[index]
            try {
                const { data, error } = await supabase.storage
                    .from('upload-file')
                    .upload(`${file.name}`, file)

                if (error) {
                    console.error(error)
                } else {
                    const element = block.firstElementChild

                    element.classList.add('preview-info-progress')
                    element.textContent = 'successful'
                        //'copy link'
                    //процесс получения ссылки и отдачи её пользователю для использования. проблема в соответсвии ссылок и картинок
                    // const { data } = supabase.storage
                    //     .from('upload-file')
                    //     .getPublicUrl(`${file.name}`)
                    //
                    // block.addEventListener('click', async (e) => {
                    //     await navigator.clipboard.writeText(data.publicUrl)
                    //
                    // })
                }
            } catch (error) {
                console.error('Ошибка загрузки файла:', error)
            }

        }
    }
})


