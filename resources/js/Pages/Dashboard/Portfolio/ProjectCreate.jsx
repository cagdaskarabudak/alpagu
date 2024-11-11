import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";

export default function ProjectCreate({project_status}){

    const [slug, setSlug] = useState('');

    const [attributeModal, setAttributeModal] = useState(false);

    const [technologyModal, setTechnologyModal] = useState(false);

    const [contributorModal, setContributorModal] = useState(false);

    const [attributeDoms, setAttributeDoms] = useState([]);

    const [technologyDoms, setTechnologyDoms] = useState([]);

    const [contributorDoms, setContributorDoms] = useState([]);

    const [imageDoms, setImageDoms] = useState([]);

    const {
        data: projectForm,
        setData: setProjectForm,
    } = useForm({
        name: '',
        slug: '',
        open_source: 0,
        content: '',
        price: 0,
        github_link: '',
        demo_link: '',
        view_count: 0,
        status_id: 1,
        technologies: [],
        images: [],
        contributors: [],
        attributes: [],
    });

    const setName = (e) => {
        setProjectForm('name', e.target.value);
        createSlug(e.target.value);
    }

    const addAttribute = (content) => {
        setProjectForm('attributes', [...projectForm.attributes, {content: content}]);
        setAttributeModal(false);
    }

    const addTechnology = (content) => {
        setProjectForm('technologies', [...projectForm.technologies, content]);
        setTechnologyModal(false);
    }

    const addContributor = (content) => {
        setProjectForm('contributors', [...projectForm.contributors, content]);
        setContributorModal(false);
    }

    const addImages = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
    
        let imagePromises = fileArray.map((file, index) => {
            return new Promise((resolve, reject) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = () => resolve(<img key={index} src={reader.result} width="200px" className="my-3" />);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                } else {
                    resolve(null); // Eğer dosya resim değilse null döndür
                }
            });
        });
    
        Promise.all(imagePromises).then((imageElements) => {
            setImageDoms(imageElements.filter(img => img !== null)); // `null` olanları filtrele
        });
    
        setProjectForm('images', fileArray);
    };

    useEffect(() => {
        let attributeElements = projectForm.attributes.map((attribute, index) => (
            <li key={index}>
                {attribute.content}
                <span style={{cursor: 'pointer'}} type="button" className="link-danger" onClick={(e) => {projectForm.attributes.splice(index, 1); e.currentTarget.parentElement.remove();}}>Delete</span>
            </li>
        ));

        setAttributeDoms(attributeElements);
    }, [projectForm.attributes]);

    useEffect(() => {
        let technologyElements = projectForm.technologies.map((technology, index) => (
            <li key={index}>
                <h5 className="title">{technology.name}</h5>
                {technology.content}
                <span style={{cursor: 'pointer'}} type="button" className="link-danger" onClick={(e) => {projectForm.technologies.splice(index, 1); e.currentTarget.parentElement.remove();}}>Delete</span>
            </li>
        ));

        setTechnologyDoms(technologyElements);
    }, [projectForm.technologies]);


    useEffect(() => {
        let contributorElements = projectForm.contributors.map((contributor, index) => (
            <li key={index}>
                <h5 className="title">{contributor.name}</h5>
                {contributor.content}
                {contributor.url}
                <span style={{cursor: 'pointer'}} type="button" className="link-danger" onClick={(e) => {projectForm.contributors.splice(index, 1); e.currentTarget.parentElement.remove();}}>Delete</span>
            </li>
        ));

        setContributorDoms(contributorElements);
    }, [projectForm.contributors]);

    useEffect(() => {
        setProjectForm('slug', slug);
    }, [slug]);

    const projectCreateFormSubmit = async (e) => {
        e.preventDefault();
        console.log('gönderilen: ', projectForm);

        let response = await axios.post(route('project.create'), projectForm, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });

        console.log('response: ', response.data);
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

    return (
        <DashboardLayout>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={projectCreateFormSubmit}>
                                <h5 className="title">Main</h5>
                                <hr />
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" value={projectForm.name} onChange={setName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Slug</label>
                                    <input type="text" className="form-control" value={slug} readOnly />
                                </div>
                                <div className="mb-3">
                                    <input type="checkbox" className="btn-check" id="open_source" autoComplete={"off"} checked={projectForm.open_source} onChange={(e) => {e.target.checked ? setProjectForm('open_source', 1) : setProjectForm('open_source', 0)}} />
                                    <label className="btn btn-outline-info btn-sm me-2" htmlFor="open_source">
                                        <i className="fa-solid fa-code"></i> Open Source
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className={'form-label'}>Açıklama</label>
                                    <textarea className={'form-control'} value={projectForm.content} onChange={(e) => {setProjectForm('content', e.target.value)}}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fiyat</label>
                                    <input type="number" className="form-control" value={projectForm.price} onChange={(e) => setProjectForm('price', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Github Url</label>
                                    <input type="text" className="form-control" value={projectForm.github_link} onChange={(e) => setProjectForm('github_link', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Demo Url</label>
                                    <input type="text" className="form-control" value={projectForm.demo_link} onChange={(e) => setProjectForm('demo_link', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Start View Count</label>
                                    <input type="number" className="form-control" value={projectForm.view_count} onChange={(e) => setProjectForm('view_count', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select className="form-select" defaultValue={project_status[0].id} onChange={(e) => setProjectForm('status_id', e.target.value)}>
                                        {
                                            project_status.map((pstatus, index) => (
                                                <option key={index} value={pstatus.id}>{pstatus.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <h5 className="title">Attributes&nbsp;<button className="btn btn-outline-success rounded-circle btn-sm" type="button" onClick={() => {setAttributeModal(!attributeModal)}}><i className="fa-solid fa-plus"></i></button></h5>
                                        <Modal show={attributeModal}>
                                            <Modal.Header>
                                                Add Attribute
                                            </Modal.Header>
                                            <Modal.Body>
                                                <CreateAttributeForm onSubmit={addAttribute} />
                                            </Modal.Body>
                                        </Modal>
                                <hr />
                                <ul>
                                    {attributeDoms}
                                </ul>

                                <h5 className="title">Technologies&nbsp;<button className="btn btn-outline-success rounded-circle btn-sm" type="button"  onClick={() => {setTechnologyModal(!technologyModal)}}><i className="fa-solid fa-plus"></i></button></h5>
                                        <Modal show={technologyModal}>
                                            <Modal.Header>
                                                Add Technology
                                            </Modal.Header>
                                            <Modal.Body>
                                                <CreateTechnologyForm onSubmit={addTechnology} />
                                            </Modal.Body>
                                        </Modal>
                                <hr />
                                {technologyDoms}

                                <h5 className="title">Contributors&nbsp;<button className="btn btn-outline-success rounded-circle btn-sm" type="button"  onClick={() => {setContributorModal(!contributorModal)}}><i className="fa-solid fa-plus"></i></button></h5>
                                        <Modal show={contributorModal}>
                                            <Modal.Header>
                                                Add Contributor
                                            </Modal.Header>
                                            <Modal.Body>
                                                <CreateContributorForm onSubmit={addContributor} />
                                            </Modal.Body>
                                        </Modal>
                                <hr />

                                        {contributorDoms}

                                <h5 className="title">Images</h5>
                                <hr />
                                <input type="file" className="form-control" onChange={addImages} multiple />
                                {imageDoms}
                                <hr />
                                <button className="btn btn-outline-success" type="submit">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function CreateAttributeForm({onSubmit}){

    const {
        data: attribute,
        setData: setAttribute,
        reset: attributeReset,
    } = useForm({
        content: '',
    });

    const createAttribute = (e) => {

        e.preventDefault();
        onSubmit(attribute.content);
        attributeReset();
    };

    return (
        <form onSubmit={createAttribute}>
            <label className="form-label">Content</label>
            <input type="text" className="form-control" value={attribute.content} onChange={(e) => setAttribute('content', e.target.value)} required/>
            <button type="submit" className={'btn btn-outline-success my-3'}>Add</button>
        </form>
    );
}

function CreateTechnologyForm({onSubmit}){

    const {
        data: technology,
        setData: setTechnology,
        reset: technologyReset,
    } = useForm({
        name: '',
        image: '',
        content: '',
    });

    const createTechnology = (e) => {

        e.preventDefault();

        onSubmit(technology);
        technologyReset();
    };

    return (
        <form onSubmit={createTechnology}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={technology.name} onChange={(e) => setTechnology('name', e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Content</label>
                <input type="text" className="form-control" value={technology.content} onChange={(e) => setTechnology('content', e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" className="form-control" value={technology.image} onChange={(e) => setTechnology('image', e.target.value)}/>
            </div>
            <button type="submit" className={'btn btn-outline-success my-3'}>Add</button>
        </form>
    );
}

function CreateContributorForm({onSubmit}){

    const {
        data: contributor,
        setData: setContributor,
        reset: contributorReset,
    } = useForm({
        name: '',
        url: '',
        content: '',
    });

    const createContributor = (e) => {

        e.preventDefault();

        onSubmit(contributor);
        contributorReset();
    };

    return (
        <form onSubmit={createContributor}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={contributor.name} onChange={(e) => setContributor('name', e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Url</label>
                <input type="text" className="form-control" value={contributor.url} onChange={(e) => setContributor('url', e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Content</label>
                <input type="text" className="form-control" value={contributor.content} onChange={(e) => setContributor('content', e.target.value)}/>
            </div>
            <button type="submit" className={'btn btn-outline-success my-3'}>Add</button>
        </form>
    );
}