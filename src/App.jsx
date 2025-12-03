import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Mail, 
  Github, 
  FileText, 
  GraduationCap, 
  MapPin, 
  ChevronRight, 
  ArrowLeft,
  ExternalLink,
  Code,
  BookOpen,
  Layers,
  Moon,
  Sun
  ,Cpu
} from 'lucide-react';

// --- 导入数据文件 ---
import profileData from './data/profile.json';
import publicationsData from './data/publications.json';
import projectsData from './data/projects.json';
import educationData from './data/education.json';
import industryData from './data/industry.json';

// 使用导入的数据
const profile = {
  ...profileData,
  // 如果 enBio 是数组，合并成字符串
  enBio: Array.isArray(profileData.enBio) 
    ? profileData.enBio.join('\n\n') 
    : profileData.enBio,
  bio: Array.isArray(profileData.bio) 
    ? profileData.bio.join('\n\n') 
    : profileData.bio
};
const publications = publicationsData;
const projects = projectsData;
const education = educationData;
const industry = industryData;
// Blogs temporarily disabled — use empty list to avoid rendering
const blogs = [];

// --- 组件 (Components) ---

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-200 border-b-2 border-stone-800/10 dark:border-stone-200/20 pb-2 mb-8 mt-12 flex items-center font-serif tracking-tight">
    {children}
  </h2>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-red-800 dark:hover:text-red-400 transition-colors group text-base font-medium"
  >
    <span className="p-2 rounded-md bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200 dark:group-hover:bg-stone-700 transition-colors">
      <Icon size={20} />
    </span>
    <span>{label}</span>
  </a>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700 mr-2">
    {children}
  </span>
);

// --- 主页面视图 ---

const HomeView = ({ onReadBlog }) => {
  return (
    <div className="animate-fade-in">
      {/* Bio Section */}
      <section className="mb-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4 shrink-0">
          <div className="relative aspect-[4/5] w-full max-w-[200px] mx-auto md:mx-0 bg-stone-200 dark:bg-stone-700 overflow-hidden rounded-sm shadow-sm border-4 border-stone-400 dark:border-stone-500 rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src={profile.avatar} 
              alt={profile.enName} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-6 flex flex-col gap-3 items-start ml-14">
            <div className="mt-4 flex flex-row flex-wrap gap-3">
              <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Email" />
              <SocialLink href={profile.googleScholar} icon={GraduationCap} label="Scholar" />
              <SocialLink href={profile.github} icon={Github} label="GitHub" />
              {/* <SocialLink href={profile.cv} icon={FileText} label="CV" /> */}
            </div>
            <div className="mt-8 flex items-center text-stone-500 dark:text-stone-400 text-sm">
                <MapPin size={14} className="mr-1" /> {profile.location}
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 pt-2">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 font-serif mb-2 tracking-tight">
            {profile.enName} <span className="text-2xl font-normal text-stone-500 dark:text-stone-400 ml-2">{profile.name}</span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-serif italic mb-6">
            {profile.title} @ {profile.university}
          </p>
          
          <div className="prose prose-stone dark:prose-invert max-w-none text-justify leading-relaxed text-stone-700 dark:text-stone-300 font-serif">
            <div className="mb-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
              >
                {profile.enBio}
              </ReactMarkdown>
            </div>
            <div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
              >
                {profile.bio}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* News / Updates could go here */}



      {/* Publications Section */}
      <section id="publications">
        <SectionTitle><BookOpen className="mr-2 w-5 h-5" /> Publications & Preprints</SectionTitle>
        <div className="space-y-10">
          {publications.map((pub) => (
            <div key={pub.id} className="flex flex-col sm:flex-row gap-6 group">
              {/* Thumbnail */}
              <div className="sm:w-48 shrink-0">
                <div className="aspect-[16/10] w-full bg-stone-200 dark:bg-stone-700 rounded-sm overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm relative">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight mb-1 font-serif">
                  {pub.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-2 text-sm font-serif">
                  {pub.authors}
                </p>
                <p className="text-sm italic text-stone-500 dark:text-stone-500 mb-3 font-medium">
                  {pub.venue}, {pub.year}
                </p>
                {/* Abstract - visible on larger screens or just truncate */}
                <div className="text-stone-600 dark:text-stone-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
                  >
                    {pub.abstract}
                  </ReactMarkdown>
                </div>
                
                <div className="flex gap-3 text-xs font-bold uppercase tracking-wide font-sans">
                  {pub.paperLink ? (
                    <a href={pub.paperLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-500 dark:text-stone-400 hover:text-red-700 dark:hover:text-red-400 transition-colors">
                      <FileText size={12} className="mr-1" /> PDF
                    </a>
                  ) : null}

                  {pub.codeLink ? (
                    <a href={pub.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-stone-500 dark:text-stone-400 hover:text-red-700 dark:hover:text-red-400 transition-colors">
                      <Code size={12} className="mr-1" /> Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Experience Section */}
        <section id="industry">
          <SectionTitle><Cpu className="mr-2 w-5 h-5" /> Industry Experience</SectionTitle>
          <div className="space-y-8">
            {industry.map((exp) => (
              <div key={exp.id} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="sm:w-32 shrink-0">
                  <div className="aspect-square w-full bg-transparent rounded-sm overflow-hidden">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-2" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-stone-500">Logo</div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight mb-1 font-serif">
                    {exp.company} {exp.link ? (<a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-stone-500 dark:text-stone-400">↗</a>) : null}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 mb-0 text-sm font-serif">
                    {exp.role}
                  </p>
                  <p className="text-sm italic text-stone-500 dark:text-stone-500 mt-1 mb-3 font-medium">
                    {exp.start} {exp.end ? `— ${exp.end}` : ''}
                  </p>
                  {exp.description ? (
                    <div className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
                      >
                        {exp.description}
                      </ReactMarkdown>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* Education Section */}
      <section id="education">
        <SectionTitle><GraduationCap className="mr-2 w-5 h-5" /> Education</SectionTitle>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="sm:w-32 shrink-0">
                <div className="aspect-square w-full bg-transparent rounded-sm overflow-hidden">
                  {edu.logo ? (
                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain p-2" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-stone-500">Logo</div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight mb-1 font-serif">
                  {edu.school}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-0 text-sm font-serif">
                  {edu.degree} — {edu.major}
                </p>
                <p className="text-sm italic text-stone-500 dark:text-stone-500 mt-1 mb-3 font-medium">
                  {edu.start} {edu.end ? `— ${edu.end}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

        

      {/* Projects Section */}
      {/* <section id="projects">
        <SectionTitle><Layers className="mr-2 w-5 h-5" /> Side Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <a 
              key={proj.id} 
              href={proj.link}
              className="block p-6 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300 rounded-sm group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-stone-800 dark:text-stone-200 group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors font-serif">
                  {proj.title}
                </h3>
                <ExternalLink size={16} className="text-stone-400 dark:text-stone-500 group-hover:text-red-800 dark:group-hover:text-red-400" />
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                {proj.description}
              </p>
              <div className="flex flex-wrap">
                {proj.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section> */}

      {/*
        Blog Preview Section (temporarily removed)
        If you want to restore it later, uncomment this block.

      <section id="blog">
        <SectionTitle><span className="font-serif italic mr-2">Thoughts & Notes</span></SectionTitle>
        <div className="border-l-2 border-stone-200 dark:border-stone-700 pl-6 ml-2 space-y-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-stone-300 dark:bg-stone-600 rounded-full border-2 border-[#fdfbf7] dark:border-stone-900"></div>
              <div 
                onClick={() => onReadBlog(blog)}
                className="cursor-pointer group"
              >
                <span className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider font-sans">
                  {blog.date}
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-200 mt-1 group-hover:underline decoration-red-800/30 dark:decoration-red-400/30 underline-offset-4">
                  {blog.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mt-2 text-sm leading-relaxed max-w-2xl">
                  {blog.summary}
                </p>
                <div className="flex items-center text-red-800 dark:text-red-400 text-xs font-bold mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read Article <ChevronRight size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      */}
    </div>
  );
};

// --- 博客阅读视图 ---

const BlogPostView = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <div className="animate-fade-in max-w-2xl mx-auto pt-8">
      <button 
        onClick={onBack}
        className="group flex items-center text-sm font-bold text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 mb-8 transition-colors"
      >
        <span className="p-1 rounded-full bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200 dark:group-hover:bg-stone-700 mr-2 transition-colors">
           <ArrowLeft size={16} />
        </span>
        Back to Home
      </button>

      <article className="prose prose-stone dark:prose-invert prose-lg max-w-none font-serif">
        <div className="mb-8 border-b border-stone-200 dark:border-stone-700 pb-8">
          <p className="text-sm text-stone-500 dark:text-stone-400 font-sans uppercase tracking-widest mb-2">{blog.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-4">
            {blog.title}
          </h1>
        </div>
        
        {/* Markdown Content */}
        <div className="text-stone-800 dark:text-stone-200 leading-loose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" /> }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
      
      <div className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-700 mb-12">
        <p className="text-stone-400 dark:text-stone-500 text-center text-sm italic font-serif">End of Article</p>
      </div>
    </div>
  );
};

// --- 主入口 (Main App) ---

const App = () => {
  const [view, setView] = useState('home'); // 'home' or 'blog'
  const [activeBlog, setActiveBlog] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    // 从 localStorage 读取保存的主题，如果没有则检查系统偏好
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // 应用主题到 html 元素
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleReadBlog = (blog) => {
    setActiveBlog(blog);
    setView('blog');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setView('home');
    setActiveBlog(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-stone-900 text-stone-800 dark:text-stone-200 selection:bg-red-900/20 dark:selection:bg-red-400/20 selection:text-red-900 dark:selection:text-red-400 transition-colors duration-300">
      {/* 顶部导航 - 极简风格 */}
      <nav className="sticky top-0 z-50 bg-[#fdfbf7]/90 dark:bg-stone-900/90 backdrop-blur-sm border-b border-stone-200/50 dark:border-stone-700/50 supports-[backdrop-filter]:bg-[#fdfbf7]/50 dark:supports-[backdrop-filter]:bg-stone-900/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="font-serif font-bold text-lg tracking-tight cursor-pointer select-none text-stone-900 dark:text-stone-100"
            onClick={handleBack}
          >
            {profile.enName}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-sm font-medium text-stone-500 dark:text-stone-400 font-sans">
               {view === 'home' ? (
                 <>
                   <a href="#publications" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Research</a>
                   {/* <a href="#projects" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Projects</a> */}
                   {/* Blog link temporarily hidden */}
                   <a href="#industry" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Industry</a>
                   <a href="#education" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Education</a>
                 </>
               ) : (
                 <button onClick={handleBack} className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Home</button>
               )}
            </div>
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-stone-600 dark:text-stone-400"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 - 模拟纸张边缘留白 */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {view === 'home' ? (
          <HomeView onReadBlog={handleReadBlog} />
        ) : (
          <BlogPostView blog={activeBlog} onBack={handleBack} />
        )}
      </main>

      {/* 页脚 */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t-2 border-stone-200/50 dark:border-stone-700/50 text-center text-stone-400 dark:text-stone-500 text-sm font-serif transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} {profile.enName}. Built with React & Tailwind.</p>
        <p className="mt-2 text-xs">Simplicity is the ultimate sophistication.</p>
      </footer>

      {/* 简单的全局样式覆盖，确保字体加载 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Noto+Serif+SC:wght@300;400;700&family=Inter:wght@400;500;600&display=swap');
        
        :root {
          --font-serif: 'Merriweather', 'Noto Serif SC', serif;
          --font-sans: 'Inter', system-ui, sans-serif;
        }

        .font-serif { font-family: var(--font-serif); }
        .font-sans { font-family: var(--font-sans); }

        /* 模拟老式纸张的微弱噪点 (可选，这里用纯色保持简洁) */
        body {
          background-image: linear-gradient(#fdfbf7 2px, transparent 2px),
                            linear-gradient(90deg, #fdfbf7 2px, transparent 2px);
          background-size: 40px 40px;
          background-color: #fdfbf7;
          transition: background-color 0.3s ease, background-image 0.3s ease;
        }

        .dark body {
          background-image: linear-gradient(#1c1917 2px, transparent 2px),
                            linear-gradient(90deg, #1c1917 2px, transparent 2px);
          background-color: #1c1917;
        }
      `}</style>
    </div>
  );
};

export default App;