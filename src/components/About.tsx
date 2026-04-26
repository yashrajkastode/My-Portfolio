import { Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">Achievements</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Microsoft Office Specialist: PowerPoint 2013</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Codeforces Rating: 1107</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Ranked 132 in Amazon ML Challenge 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>CGPA: 8.54 in M.Tech AI program</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-600 rounded-lg">
                <users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">Leadership</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>President & Founder, Eureka Club - VIT Bhopal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">•</span>
                <span>Volunteer in AI Conclave 2.0 in AI Club - VIT Bhopal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}