
const nav = ['Overview', 'Skills', 'Projects']
const skillsPart1 = [
  {
    name: 'Figma',
    level: 'Basic'
  },
  {
    name: 'HTML',
    level: 'Advanced'
  },
  {
    name: 'CSS',
    level: 'Advanced'
  },
  {
    name: 'SASS',
    level: 'Advanced'
  }
]
const skillsPart2 = [
  {
    name: 'Tailwind',
    level: 'Intermediate'
  },
  {
    name: 'Bootstrap',
    level: 'Intermediate'
  },
  {
    name: 'JavaScript',
    level: 'Advanced'
  },
  {
    name: 'TypeScript',
    level: 'Intermediate'
  }
]
const skillsPart3 = [
  {
    name: 'React Js',
    level: 'Intermediate'
  },
  {
    name: 'Next Js',
    level: 'Intermediate'
  },
  {
    name: 'REST API',
    level: 'Intermediate'
  },
  {
    name: 'Git/ Github/Gitlab',
    level: 'Intermediate'
  }
]
const skillsPart4 = [
  {
    name: 'C/C++',
    level: 'Basic'
  },
  {
    name: 'PHP',
    level: 'Basic'
  },
  {
    name: 'MySQL',
    level: 'Basic'
  },
  {
    name: 'Third-party libraries',
    level: 'Intermediate'
  }
]
const liveProjects: { name: string, link?: string, images: string[], style?: string }[] = [
  {
    name: 'Satu Data Kota Palembang',
    link: 'http://satudata.palembang.go.id/',
    images: [],
  },
  {
    name: 'CMS Satu Data Kota Palembang',
    images: [
      '/cms-satu-data/cms-satu-data-1.png',
      '/cms-satu-data/cms-satu-data-2.png',
      '/cms-satu-data/cms-satu-data-3.png',
      '/cms-satu-data/cms-satu-data-4.png',
      '/cms-satu-data/cms-satu-data-5.png'
    ],
    style: 'w-full h-[85vh]'
  },
  {
    name: 'Dinas Pemadam Kebakaran dan Penyelamatan Kota Palembang',
    link: 'https://damkar.palembang.go.id/',
    images: []
  },
  {
    name: 'Dinas Koperasi dan UMKM Kota Palembang',
    link: 'https://diskopukm.palembang.go.id/',
    images: []
  },
  {
    name: 'Dinas Kependudukan dan Pencatatan Sipil Kota Palembang',
    link: 'https://disdukcapil.palembang.go.id/',
    images: []
  },
  {
    name: 'Dinas Pendidikan Kota Palembang',
    link: 'https://disdik.palembang.go.id/',
    images: []
  },
  {
    name: 'Badan Koordinasi Hubungan Masyarakat Kota Palembang',
    link: 'https://bako-humas.palembang.go.id/',
    images: []
  },
  {
    name: 'Dinas Pemuda dan Olahraga Kota Palembang',
    link: 'https://dispora.palembang.go.id/',
    images: []
  },
  {
    name: 'Sidemang Dukcapil Kota Palembang',
    images: [
      '/sidemang-dukcapil/sidemang-dukcapil-1.png',
      '/sidemang-dukcapil/sidemang-dukcapil-2.png',
      '/sidemang-dukcapil/sidemang-dukcapil-3.png',
      '/sidemang-dukcapil/sidemang-dukcapil-4.png',
      '/sidemang-dukcapil/sidemang-dukcapil-5.png',
      '/sidemang-dukcapil/sidemang-dukcapil-6.png',
      '/sidemang-dukcapil/sidemang-dukcapil-7.png',
      '/sidemang-dukcapil/sidemang-dukcapil-8.png'
    ],
    style: 'w-full h-[85vh]'
  },
  {
    name: 'SANJO Kota Palembang',
    link: 'https://sanjo.palembang.go.id/',
    images: []
  },
  {
    name: 'PERINTIS Kota Palembang',
    link: 'https://perintis.palembang.go.id/',
    images: []
  },
  {
    name: 'SIMPAN Kota Palembang',
    images: [
      '/simpan/simpan-1.png',
      '/simpan/simpan-2.png',
      '/simpan/simpan-3.png',
      '/simpan/simpan-4.png'
    ],
    style: 'w-full h-[85vh]'
  }
]
const historyProjects: { cover: string, category: string, name: string, link?: string, video?: string, images: string[], style?: string }[] = [
  {
    cover: '/custom-enquiry/index.png',
    category: 'With API',
    name: 'Custom Enquiry',
    video: '/custom-enquiry/index.mp4',
    images: []
  },
  {
    cover: '/e-commerce/e-commerce-1.png',
    category: 'Just template',
    name: 'E-commerce Estetico Home',
    images: [
      '/e-commerce/e-commerce-1.png',
      '/e-commerce/e-commerce-2.png',
      '/e-commerce/e-commerce-3.png',
      '/e-commerce/e-commerce-4.png',
      '/e-commerce/e-commerce-5.png',
      '/e-commerce/e-commerce-6.png'
    ],
    style: 'w-full h-[85vh]'
  },
  {
    cover: '/wm/wm-1.png',
    category: 'With API',
    name: 'Warehouse Management',
    images: [
      '/wm/wm-1.png',
      '/wm/wm-2.png',
      '/wm/wm-3.png',
      '/wm/wm-4.png',
      '/wm/wm-5.png',
      '/wm/wm-6.png',
      '/wm/wm-7.png'
    ],
    style: 'w-full h-[85vh]'
  },
  {
    cover: '/enver/index.png',
    category: 'Just template',
    name: 'Enver',
    link: 'https://enver.vercel.app/',
    images: []
  },
  {
    cover: '/qyftah/qyftah-4.jpg',
    category: 'Just template',
    name: 'QYFTAH',
    images: [
      '/qyftah/qyftah-1.png',
      '/qyftah/qyftah-2.png',
      '/qyftah/qyftah-3.jpg',
      '/qyftah/qyftah-4.jpg',
      '/qyftah/qyftah-5.jpg',
      '/qyftah/qyftah-6.jpg',
      '/qyftah/qyftah-7.jpg',
      '/qyftah/qyftah-8.png',
      '/qyftah/qyftah-9.png'
    ],
    style: 'w-[90%] h-[1400px] mx-auto'
  },
  {
    cover: '/my-school/index-cut.jpg',
    category: 'Just template',
    name: 'MySchool',
    images: [
      '/my-school/index.jpg',
    ],
    style: 'w-full h-[1400px]'
  },
  {
    cover: '/infinity/index-cut.jpg',
    category: 'Just template',
    name: 'Infinity',
    images: [
      '/infinity/index.jpg',
    ],
    style: 'w-full h-[1400px]'
  },
  {
    cover: '/rainfall/rainfall-2.jpg',
    category: 'Just template',
    name: 'Monitoring Rainfall',
    images: [
      '/rainfall/rainfall-1.jpg',
      '/rainfall/rainfall-2.jpg',
      '/rainfall/rainfall-3.jpg'
    ],
    style: 'w-full h-[1400px]'
  },
]

export {
  nav,
  skillsPart1,
  skillsPart2,
  skillsPart3,
  skillsPart4,
  liveProjects,
  historyProjects
}