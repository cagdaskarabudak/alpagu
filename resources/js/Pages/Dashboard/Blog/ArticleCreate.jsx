import DashboardLayout from "@/Layouts/DashboardLayout";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Bold, Essentials, Italic, Underline, Link, Strikethrough, Image, ImageToolbar, ImageCaption, ImageStyle, Paragraph, Heading, List, BlockQuote, Code, CodeBlock, Table, TableToolbar, } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useForm } from "@inertiajs/react";

export default function ArticleCreate(){
    const [slug, setSlug] = useState(''); 

    const {
        data: articleForm,
        setData: setArticleForm,
    } = useForm({
        title: '',
        slug: '',
        content: '',
        view_count: 0,
        banner: null,
    });

    const setName = (e) => {
        setArticleForm('title', e.target.value);
        createSlug(e.target.value);
    }

    function createSlug(text) {
        let slugtext = text
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ç/g, 'c')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

            setSlug(slugtext);
    }

    const articleFormSubmit = async (e) => {
        e.preventDefault();

        let response = await axios.post(route('article.create'), articleForm, {
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        });

        if(response.data.status == true){
            console.log(response.data)
        }
        else{
            console.log(response.data);
        }
    }

    useEffect(() => {
        setArticleForm('slug', slug);
    }, [slug]);
    
    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={articleFormSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" value={articleForm.title} onChange={setName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Slug</label>
                                    <input type="text" className="form-control" value={slug}  readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Başlangıç Görüntülenme</label>
                                    <input type="number" className="form-control" value={articleForm.view_count} onChange={(e) => setArticleForm('view_count', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Banner</label>
                                    <input type="file" className="form-control" onChange={(e) => {let file = e.target.files[0]; setArticleForm('banner', file);}} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Content</label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            plugins: [
                                            Essentials, Bold, Italic, Underline, Link, Image, ImageToolbar, 
                                            ImageCaption, ImageStyle, Paragraph, Heading, List, BlockQuote, 
                                            Code, CodeBlock, Table, TableToolbar, Strikethrough
                                            ],
                                            toolbar: {
                                            items: [
                                                'heading',
                                                '|',                  
                                                'bold', 'italic', 'underline',
                                                '|',
                                                'link',
                                                'bulletedList', 'numberedList',
                                                'blockQuote',
                                                'insertTable',
                                                'code', 'codeBlock',
                                                'strikeThrough',
                                                '|',
                                                'undo', 'redo'
                                            ],
                                            },
                                            image: {
                                            toolbar: [
                                                'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
                                            ]
                                            },
                                            table: {
                                            contentToolbar: [
                                                'tableColumn', 'tableRow', 'mergeTableCells'
                                            ]
                                            }
                                        }}
                                        onChange={(event, editor) => {
                                             setArticleForm('content', editor.getData());
                                        }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">Oluştur</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
        
    );
}