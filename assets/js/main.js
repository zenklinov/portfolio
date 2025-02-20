$(document).ready(function() {
    general_utils();
    data_scientist_profile();
})

function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function data_scientist_profile() {
    let profile_content = `
    <div class="profile-section">
        <h2>Data Scientist</h2>

        <div class="section work-experiences">
            <h3>Work Experiences</h3>
            <div class="experience-item">
                <strong>Lecturer @ Matana University (August 2024 - Present)</strong>
                <ul>
                    <li>Active in the three pillars of higher education (Education, Research, and Community Service)</li>
                    <li>Focus Research on (AI/ML/DL/NLP)</li>
                    <li>Courses:
                        <ul>
                            <li>Algorithm and Programming
                                <ul>
                                    <li>Programming Language in R and Python</li>
                                </ul>
                            </li>
                            <li>Database and Data Retrieval
                                <ul>
                                    <li>Structured Query Language (SQL)</li>
                                </ul>
                            </li>
                            <li>Database in Big Data Technologies
                                <ul>
                                    <li>Intro to Big Data</li>
                                </ul>
                            </li>
                            <li>Data Exploration and Visualization</li>
                            <li>Introduction to Data Science</li>
                            <li>Numerical Methods</li>
                            <li>Profession Ethic in Statistics and Data Science</li>
                            <li>Statistical Computation</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="section education">
            <h3>Education</h3>
            <ul>
                <li><strong>M.Stat., Magister's Degree of Statistics</strong> | Institut Teknologi Sepuluh Nopember (April 2024)</li>
                <li><strong>S.Stat., Bachelor's Degree of Statistics</strong> | Universitas Muhammadiyah Semarang (May 2021)</li>
            </ul>
        </div>

        <div class="section publications">
            <h3>Publications</h3>
            <ol>
                <li>Rifki K.A.F., Rosyadi N., Zenklinov A.P., Suhermi N. (2024). 
                    <em>Intrusion Detection Systems (IDSs) using Multivariate Control Chart Hotelling’s T2 with Dimensional Reduction of Factorial Analysis of Mixed Data (FAMD) and Autoencoder</em>. 
                    DOI: <a href="http://dx.doi.org/10.12962/j27213862.v7i1.18751" target="_blank">http://dx.doi.org/10.12962/j27213862.v7i1.18751</a>
                </li>
            </ol>
        </div>
    </div>
    `;

    $('#rss-feeds').html(profile_content); // Ganti elemen target sesuai kebutuhan Anda
}
