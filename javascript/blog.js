var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });



  
const postContent = document.getElementById('post-content');

const blogPosts = [
  {
    title: "Leveraging AI For Effective Classroom Instructions",
    image2: "/images/GodwinInyang.jpg",
    author: "Godwin Essang",
    profession: "L&D, Instructional Designer",
    category: "Teaching tips",
    date: "Oct. 10, 2023",
    image: "/images/AItraining.jpg",
    content: `This area can be used only if the post content does not need subtitles`,
    subheadings: [
      {title: "Introduction", content: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
    facilis ducimus repellat architecto amet, enim, officiis 
    reiciendis molestiae vel cumque sunt numquam aliquam?`},

      {title: "Benefits of AI in Education", content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
      facilis ducimus repellat architecto amet, enim, officiis 
      reiciendis molestiae vel cumque sunt numquam aliquam?`}
    ]
  },

  {
    title: "Self-improvement Habits for Teachers",
    image2: "/images/JosephEffiong.jpg",
    author: "Joseph Effiong",
    profession: "Educator",
    category: "Teaching tips",
    date: "Oct. 10, 2023",
    image: "/Images/attendee1.jpg",
    content: `This area can be used only if the post content does not need subtitles`,
    subheadings: [
      {title: "Introduction", content: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
    facilis ducimus repellat architecto amet, enim, officiis 
    reiciendis molestiae vel cumque sunt numquam aliquam?`},

      {title: "Habit Number one", content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
      facilis ducimus repellat architecto amet, enim, officiis 
      reiciendis molestiae vel cumque sunt numquam aliquam?`}
    ]
  },

  {
    title: "Finding your Purpose as a Teacher",
    image2: "/Images/OkonRachael.jpg",
    author: "Okon, Rachael",
    profession: "Educator",
    category: "Teaching tips",
    date: "Oct. 10, 2023",
    image: "/Images/womenDay.jpg",
    content: `This area can be used only if the post content does not need subtitles`,
    subheadings: [
      {title: "Introduction", content: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
    facilis ducimus repellat architecto amet, enim, officiis 
    reiciendis molestiae vel cumque sunt numquam aliquam?`},

      {title: "Aligning Purpose, Passion And Value", content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Accusantium facere repudiandae eos dolor laudantium ipsam cum, 
      facilis ducimus repellat architecto amet, enim, officiis 
      reiciendis molestiae vel cumque sunt numquam aliquam?`}
    ]
  },
  // ... other blogPosts
];


//search function -----------------------------

const searchInput = document.getElementById('search-input');
document.getElementById('search-button').addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  postContent.innerHTML = '';
  const matchingPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm));

  if (matchingPosts.length > 0) {
    matchingPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';

      const postTitle = document.createElement('div');
      postTitle.className = 'post-title';
      const titleH2 = document.createElement('h2');
      titleH2.textContent = post.title;
      postTitle.appendChild(titleH2);
      postCard.appendChild(postTitle);

//social media share in search result--------
const socialMediaShare = document.createElement('div');
socialMediaShare.className = 'social-media-share';
socialMediaShare.innerHTML=`
      <a class="share-button" href"#" onclick="shareOnFacebook('${post.url}')" title="Share on Facebook"><i class="fab fa-facebook"></i></a>
      <a class="share-button" href"#" onclick="shareOnLinkedIn('${post.url}')" title="Share on LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a class="share-button" href"#" onclick="shareOnWhatsApp('${post.url}')" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
      `;
//sear result conentsith mo
postCard.appendChild(socialMediaShare);
    const postData = document.createElement('div');
    postData.className = 'post-data';
    const authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    const authorImage = document.createElement('img');
    authorImage.src = post.image2;
    authorImage.alt = 'Author Image';
    const authorDetails = document.createElement('div');
    authorDetails.className = 'author-details';
    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = post.author;
    const authorProfessionP = document.createElement('p');
    authorProfessionP.textContent = post.profession;

    const categoryDate = document.createElement('div');
    categoryDate.className = 'category-date';
    const categorySpan = document.createElement('span');
    categorySpan.textContent = post.category;
    const dateP = document.createElement('p');
    dateP.textContent = post.date;

    authorDetails.appendChild(authorNameSpan);
    authorDetails.appendChild(authorProfessionP);
    authorDiv.appendChild(authorImage);
    authorDiv.appendChild(authorDetails);
    postData.appendChild(authorDiv);
    categoryDate.appendChild(categorySpan);
    categoryDate.appendChild(dateP);
    postCard.appendChild(postData);
    postData.appendChild(categoryDate);

    const postImage = document.createElement('div');
    postImage.className = 'post-image';
    const image = document.createElement('img');
    image.src = post.image;
    image.alt = 'Post Image';
    postImage.appendChild(image);
    postCard.appendChild(postImage);


      // Create and append content
      const postContentDiv = document.createElement('div');
      postContentDiv.className = 'post-text';
      const contentP = document.createElement('p');
      contentP.textContent = post.content;
      postContentDiv.appendChild(contentP);

      if (post.subheadings && post.subheadings.length > 0) {
        post.subheadings.forEach(subheading => {
          const subheadingDiv = document.createElement('div');
          subheadingDiv.className = 'subheading';

          const subheadingTitle = document.createElement('h3');
          subheadingTitle.textContent = subheading.title;
          subheadingDiv.appendChild(subheadingTitle);

          const subheadingContent = document.createElement('p');
          subheadingContent.textContent = subheading.content;
          subheadingDiv.appendChild(subheadingContent);
          postContentDiv.appendChild(subheadingDiv);
        });
      }

      postCard.appendChild(postContentDiv);

      postContent.appendChild(postCard);
    });
  } else {
    postContent.innerHTML = '<p>No matching posts found. Try a different search term.</p>';
  }
}

//-----blog content section
function loadPost(postId = 1, event) {
  const post = blogPosts[postId - 1];
  if (post) {
    postContent.innerHTML = '';

    const postCard = document.createElement('div');
    postCard.className = 'post-card';

    const postTitle = document.createElement('div');
    postTitle.className = 'post-title';
    const titleH2 = document.createElement('h2');
    titleH2.textContent = post.title;
    postTitle.appendChild(titleH2);
    postCard.appendChild(postTitle);

//social media share
const socialMediaShare = document.createElement('div');
socialMediaShare.className = 'social-media-share';
socialMediaShare.innerHTML=`
      <a class="share-button" href"#" onclick="shareOnFacebook('${post.url}')" title="Share on Facebook"><i class="fab fa-facebook"></i></a>
      <a class="share-button" href"#" onclick="shareOnLinkedIn('${post.url}')" title="Share on LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a class="share-button" href"#" onclick="shareOnWhatsApp('${post.url}')" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
      `;
postCard.appendChild(socialMediaShare);

    const postData = document.createElement('div');
    postData.className = 'post-data';
    const authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    const authorImage = document.createElement('img');
    authorImage.src = post.image2;
    authorImage.alt = 'Author Image';
    const authorDetails = document.createElement('div');
    authorDetails.className = 'author-details';
    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = post.author;
    const authorProfessionP = document.createElement('p');
    authorProfessionP.textContent = post.profession;

    const categoryDate = document.createElement('div');
    categoryDate.className = 'category-date';
    const categorySpan = document.createElement('span');
    categorySpan.textContent = post.category;
    const dateP = document.createElement('p');
    dateP.textContent = post.date;

    authorDetails.appendChild(authorNameSpan);
    authorDetails.appendChild(authorProfessionP);
    authorDiv.appendChild(authorImage);
    authorDiv.appendChild(authorDetails);
    postData.appendChild(authorDiv);
    categoryDate.appendChild(categorySpan);
    categoryDate.appendChild(dateP);
    postCard.appendChild(postData);
    postData.appendChild(categoryDate);

    const postImage = document.createElement('div');
    postImage.className = 'post-image';
    const image = document.createElement('img');
    image.src = post.image;
    image.alt = 'Post Image';
    postImage.appendChild(image);
    postCard.appendChild(postImage);

    const postText = document.createElement('div');
    postText.className = 'post-text';
    const contentP = document.createElement('p');
    contentP.textContent = post.content;
    postText.appendChild(contentP);

if (post.subheadings && post.subheadings.length > 0) {
  post.subheadings.forEach(subheading => {
    const subheadingDiv = document.createElement('div');
    subheadingDiv.className = 'subheading';

    const subheadingTitle = document.createElement('h3');
    subheadingTitle.textContent = subheading.title;
    subheadingDiv.appendChild(subheadingTitle);

    const subheadingContent = document.createElement('p');
    subheadingContent.textContent = subheading.content;
    subheadingDiv.appendChild(subheadingContent);
    postText.appendChild(subheadingDiv);
  })
}
    postCard.appendChild(postText);

    postContent.appendChild(postCard);
  }
}

loadPost();

function shareOnFacebook(postUrl) {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
  window.open(facebookShareUrl, '_blank');
}

function shareOnLinkedIn(postUrl) {
  const linkedInShareUrl = `https://www.linkedin.com/sharerArticle?mini=true&url=${postUrl}`;
  window.open(linkedInShareUrl, '_blank');
}

function shareOnWhatsApp(postUrl) {
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20blog%20post:%20${postUrl}`;
  window.open(whatsappShareUrl, '_blank');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//SLIDER SECTION

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentPosition = 0;
const cardWidth = document.querySelector('.slider-card').offsetWidth;
const numCards = document.querySelectorAll('.slider-card').length;
const numVisibleCards = Math.min(Math.floor(window.innerWidth / cardWidth), numCards);
const numHiddenCards = numCards - numVisibleCards;
const maxPosition = numHiddenCards;

nextButton.addEventListener('click', () => {
  currentPosition = (currentPosition +1) % (maxPosition + 1);
  updateSliderPosition();
});

prevButton.addEventListener('click', () => {
  currentPosition = (currentPosition -1 + maxPosition + 1) % (maxPosition + 1);
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateX = -currentPosition * cardWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

updateSliderPosition();

