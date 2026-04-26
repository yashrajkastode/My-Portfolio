import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  isHighlighted: boolean;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: 'Integrated M.Tech Artificial Intelligence',
      institution: 'VIT Bhopal University, Bhopal',
      period: '2022-27',
      grade: 'CGPA: 8.54',
      isHighlighted: true
    },
    {
      degree: 'Senior Secondary Education (Class 12)',
      institution: 'Vivekanand College, Aurangabad, Maharashtra',
      period: '2022',
      grade: 'Percentage: 77.67%',
      isHighlighted: false
    },
    {
      degree: 'Secondary Education (Class 10)',
      institution: 'Kendriya Vidyalaya, Aurangabad, Maharashtra',
      period: '2020',
      grade: 'Percentage: 92.4%',
      isHighlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`${
                edu.isHighlighted
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200'
                  : 'bg-white'
              } p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 ${
                    edu.isHighlighted
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600'
                      : 'bg-slate-600'
                  } rounded-xl flex-shrink-0`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-600 mb-3">{edu.institution}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Award size={16} className="text-blue-600" />
                        <span className="font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}