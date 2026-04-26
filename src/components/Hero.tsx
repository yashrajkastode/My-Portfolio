import { Github, Linkedin, Code2, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 opacity-70"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-5xl font-bold text-white">YK</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
          Yashraj Kastode
        </h1>

        <p className="text-2xl md:text-3xl text-slate-700 mb-6 font-light">
          AI Engineer & Full-Stack Developer
        </p>

        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          M.Tech AI student passionate about NLP, Deep Learning, and building production-ready solutions
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/yashrajkastode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/yashraj-kastode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://codeforces.com/profile/yashrajkastode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            <Code2 size={20} />
            <span>Codeforces</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-600">
          <a href="mailto:yashrajkastode@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Mail size={18} />
            <span>yashrajkastode@gmail.com</span>
          </a>
          <a href="tel:+918767770548" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Phone size={18} />
            <span>+91 8767770548</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}