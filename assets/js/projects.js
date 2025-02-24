$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Streamlit-Ollama-Llama3.2-Chat/main/ollama2.png',
            link: 'https://github.com/zenklinov/Streamlit-Ollama-Llama3.2-Chat',
            title: 'Local LLM Chatbot with Ollama',
            demo: false,
            technologies: ['Python', 'Streamlit', 'Ollama'],
            description: "Local LLM Chatbot with Ollama, running on Streamlit.",
            categories: ['featured', 'llm']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Clustering_K-Means_Metrics_PCA/main/cluster_kmeans_metrics_pca.jpg',
            link: 'https://github.com/zenklinov/Clustering_K-Means_Metrics_PCA',
            title: 'Comparing Metrics in K-Means with PCA',
            demo: false,
            technologies: ['Python', 'Cluster', 'Dims. Reduc.'],
            description: "Comparing Euclidean, Manhattan, and Cosine in K-Means with PCA",
            categories: ['mldl']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
