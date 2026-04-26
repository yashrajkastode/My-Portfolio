import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-800">
          Get In Touch
        </h2>

        <p className="text-center text-slate-600 mb-12 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:yashrajkastode@gmail.com"
            className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="p-3 bg-blue-600 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Email</div>
              <div className="font-semibold text-slate-800">yashrajkastode@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+918767770548"
            className="flex items-center gap-4 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="p-3 bg-cyan-600 rounded-lg">
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Phone</div>
              <div className="font-semibold text-slate-800">+91 8767770548</div>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg mb-12">
          <div className="p-3 bg-slate-600 rounded-lg">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <div className="text-sm text-slate-600 mb-1">Location</div>
            <div className="font-semibold text-slate-800">Bhopal, Madhya Pradesh, India</div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yashrajkastode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all hover:shadow-lg hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/yashraj-kastode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://codeforces.com/profile/yashrajkastode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all hover:shadow-lg hover:-translate-y-1"
              aria-label="Codeforces"
            >
              <Code2 size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-200">
        <p className="text-center text-slate-600">
          © {new Date().getFullYear()} Yashraj Kastode. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}