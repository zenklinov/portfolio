$(document).ready(function() {
    general_utils();
    blog_posts();
});

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

//function blog_posts() {
    var post_html = []; // Inisialisasi array untuk HTML posting
    var post_template = `<div class="experience-item">Experience Post</div>`; // Ganti "Blog" menjadi "Experience"

    post_html.push(post_template); // Tambahkan template ke array

    $('#rss-feeds').html(post_html.join('')); // Gabungkan array dan tampilkan
}

//function blog_link_click(url) {
    window.location = url;
}

function blog_posts() {
    // Data pengalaman kerja
    var workExperiences = [
        { title: "Lecturer in the Statistics Department (Fulltime)", organization: "Matana University", date: "Aug 2024 - Present" },
        { title: "Software Engineering for AI Training Data Python (Independent Contractor)", organization: "Outlier AI", date: "Jun 2024 - Nov 2024" },
        { title: "Data Analyst (Internship)", organization: "Direktorat Jenderal Pajak RI", date: "Nov 2019 - Dec 2019" },
        { title: "Data Warehouse Administrator (Freelance)", organization: "Partai Amanat Nasional", date: "May 2017 - Oct 2017" },
        { title: "Surveyor (Internship)", organization: "Badan Pusat Statistik", date: "Feb 2017 - Mar 2017" }
    ];

    // Data pendidikan
    var educations = [
        { title: "M.Stat., Magister's Degree of Statistics", organization: "Institut Teknologi Sepuluh Nopember", date: "Jan 2022 - April 2024" },
        { title: "S.Stat., Bachelor's Degree of Statistics", organization: "Universitas Muhammadiyah Semarang", date: "Sep 2019 - May 2021" },
        { title: "Amd.Stat., Diploma III or Associate’s Degree of Statistics", organization: "Akademi Statistika Muhammadiyah Semarang", date: "Sep 2016 - Sep 2019" }
    ];

    // Fungsi untuk menghasilkan HTML setiap item pengalaman
    function generateExperienceItem(experience) {
        return `
            <div class="experience-item">
                <h3>${experience.title}</h3>
                <p>${experience.organization}</p>
                <p>${experience.date}</p>
            </div>
        `;
    }

    // Bangun HTML untuk pengalaman kerja
    var workHtml = workExperiences.map(generateExperienceItem).join('');

    // Bangun HTML untuk pendidikan
    var eduHtml = educations.map(generateExperienceItem).join('');

    // Gabungkan semua HTML dengan judul untuk setiap bagian
    var fullHtml = '<h2>Work Experience</h2>' + workHtml + '<h2>Education</h2>' + eduHtml;

    // Tampilkan di elemen dengan id 'rss-feeds'
    $('#rss-feeds').html(fullHtml);
}
