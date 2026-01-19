// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-2-5-years-at-ual",
        
          title: "2.5 Years at UAL",
        
        description: "Marking the completion of a 2.5-year research journey at the Urban Analytics Lab.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/UAL/";
          
        },
      },{id: "post-master-39-s-commencement",
        
          title: "Master&#39;s commencement",
        
        description: "Marking the completion of a two-year Master’s journey at NUS.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/graduation/";
          
        },
      },{id: "post-talk-visiting-university-of-cambridge",
        
          title: "Talk: Visiting University of Cambridge",
        
        description: "Members of the NUS Urban Analytics Lab visited the University of Cambridge for a sharing session with the Sustainable Design group.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/visit-cam/";
          
        },
      },{id: "post-talk-presentation-at-the-cupum-2025-conference",
        
          title: "Talk: Presentation at the CUPUM 2025 Conference",
        
        description: "Presenting our paper in the Smart Mobility session at CUPUM 2025.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cupum/";
          
        },
      },{id: "post-new-paper-designing-effective-image-based-surveys-for-urban-visual-perception",
        
          title: "New Paper: Designing effective image-based surveys for urban visual perception",
        
        description: "Landscape and Urban Planning publishes our work on establishing visual perception survey design guidelines supported by statistics and experiments.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/paper-survey/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-paper-global-urban-visual-perception-varies-across-demographics-and-personalities",
          title: 'New paper: Global urban visual perception varies across demographics and personalities',
          description: "",
          section: "News",},{id: "news-concluded-my-role-as-a-research-engineer-at-the-urban-analytics-lab-national-university-of-singapore",
          title: 'Concluded my role as a Research Engineer at the Urban Analytics Lab, National...',
          description: "",
          section: "News",},{id: "news-officially-start-as-a-phd-student-at-mobility-science-lab-university-of-leeds",
          title: 'Officially start as a PhD student at Mobility Science Lab, University of Leeds....',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%76%66%73%30%38%34%36@%6C%65%65%64%73.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FgsR5QgAAAAJ", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Youlong-Gu/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/youlong-gu-238096285", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-9580-6417", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/youlonggu", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_YG.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
