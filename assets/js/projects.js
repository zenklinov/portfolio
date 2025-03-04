$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Database_Python/main/Integrate-pg-in-py.png',
            link: 'https://github.com/zenklinov/Database_Python',
            title: 'Connecting Python to PostgreSQL',
            demo: false,
            technologies: ['Python', 'PostgreSQL'],
            description: "Integrating Python to PostgreSQL",
            categories: ['bigdata']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Deep-Learning-CNN-vs-RNN/main/cnnrnnfminst.png',
            link: 'https://github.com/zenklinov/Deep-Learning-CNN-vs-RNN',
            title: 'Comparing CNN and RNN in FMNIST Data',
            demo: false,
            technologies: ['Python', 'Object Detection'],
            description: "CNN outperforms RNN in recognizing spatial patterns in FMNIST images, while RNN is less optimal as it is designed for sequential data.",
            categories: ['mldl']
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
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Image-recognition/main/resnet50classifier.png',
            link: 'https://github.com/zenklinov/Image-recognition',
            title: 'Image Classifier with ResNet 50',
            demo: false,
            technologies: ['Python', 'Torch', 'Streamlit'],
            description: "An image classifier built with ResNet-50 using Python, Torch, and Streamlit Cloud",
            categories: ['mldl']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Streamlit-Ollama-Llama3.2-Chat/main/ollama2.png',
            link: 'https://github.com/zenklinov/Streamlit-Ollama-Llama3.2-Chat',
            title: 'Local LLM Chatbot with Ollama',
            demo: false,
            technologies: ['Python', 'Streamlit', 'Ollama', 'LangChain'],
            description: "Local LLM Chatbot with Ollama, running on Streamlit.",
            categories: ['llm']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Streamlit-CSV-excel-xlsx-Llama3-Ollama-PandasAI/main/analyzellm.png',
            link: 'https://github.com/zenklinov/Streamlit-CSV-excel-xlsx-Llama3-Ollama-PandasAI',
            title: 'Local LLM to Analyze Data with Ollama',
            demo: false,
            technologies: ['Python', 'Streamlit', 'Ollama', 'PandasAI'],
            description: "Analyzing CSV and Excel (.xlsx) data using LLM, Ollama, and PandasAI",
            categories: ['llm']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Hotelling-T-Square/main/hotellingt2.png',
            link: 'https://iptek.its.ac.id/index.php/inferensi/article/view/18751',
            title: 'Multivariate Control Chart Hotelling T-Square with Dimension Reduction using FAMD and Autoencoder',
            demo: false,
            technologies: ['Multivariate Analysis', 'Dims. Reduc.'],
            description: "Compare the performance of conventional T2 with T2 integrated with FAMD and Autoencoder",
            categories: ['research']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/Predicting_Apple_Stock_Price_using_LSTM_with_Keras_Tuner/main/lstmpredictapple.png',
            link: 'https://github.com/zenklinov/Predicting_Apple_Stock_Price_using_LSTM_with_Keras_Tuner',
            title: 'Predicting Apple Stock Price using LSTM with Keras Tuner',
            demo: false,
            technologies: ['Python', 'Tensorflow', 'YFinance', 'Keras'],
            description: "Long Short-Term Memory (LSTM) neural networks to predict Apple’s stock price using historical market data",
            categories: ['mldl']
        },   
        {
            image: 'https://raw.githubusercontent.com/zenklinov/PCA/main/pca.png',
            link: 'https://github.com/zenklinov/PCA',
            title: 'Principal Component Analysis or PCA',
            demo: false,
            technologies: ['R', 'Dims. Reducs.'],
            description: "PCA is a statistical technique for reducing the dimensionality of a dataset",
            categories: ['mldl']
        },    
        {
            image: 'https://raw.githubusercontent.com/zenklinov/google-play-scraper/main/gplayscrap.png',
            link: 'https://github.com/zenklinov/google-play-scraper',
            title: 'Scraping Google Play Store Reviews',
            demo: false,
            technologies: ['Python', 'Google Play', 'Scraping'],
            description: "Scraping Google Play Store Reviews, The final DataFrame includes Review ID, Content, and Score",
            categories: ['bigdata']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/nasapower/main/output_map.png',
            link: 'https://github.com/zenklinov/nasapower',
            title: 'Scraping NASA Power Data',
            demo: false,
            technologies: ['R', 'Python', 'GeoPandas', 'Scraping'],
            description: "Getting Data NASA POWER, in Regional by Single Point approach. ",
            categories: ['bigdata']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/tweepy/main/tweepy.png',
            link: 'https://github.com/zenklinov/tweepy',
            title: 'Scraping Twitter/X Data',
            demo: false,
            technologies: ['R', 'Python', 'Tweepy', 'Scraping'],
            description: "Getting Official Data Twitter/X. ",
            categories: ['bigdata']
        },
        {
            image: 'https://raw.githubusercontent.com/zenklinov/IBM_Machine_Learning_Capstone/main/recommend.jpg.png',
            link: 'https://github.com/zenklinov/IBM_Machine_Learning_Capstone',
            title: 'Various-Based Recommender Systems',
            demo: false,
            technologies: ['Python', 'Recommender Sys.'],
            description: "Content-Based, Clustering-Based, KNN-Based, NMF-Based, and NN-Based Recommender System associated IBM Coursera",
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
