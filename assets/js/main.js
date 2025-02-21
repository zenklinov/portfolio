$(document).ready(function() {
    general_utils();
    blog_posts();
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


 function blog_posts() {
    var post_html = []; // Inisialisasi array untuk HTML posting
    var post_template = `<div class="experience-item">Experience Post</div>`; // Ganti "Blog" menjadi "Experience"

    post_html.push(post_template); // Tambahkan template ke array

    $('#rss-feeds').html(post_html.join('')); // Gabungkan array dan tampilkan
}

// function blog_link_click(url) {
    window.location = url;
}

