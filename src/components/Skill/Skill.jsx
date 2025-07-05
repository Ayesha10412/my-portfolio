// Skill data
const skills = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "Tailwind CSS", icon: "🌈" },
    { name: "DaisyUI", icon: "🌼" },
  ],
  Backend: [
    { name: "Node.js", icon: "🌳" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "TypeScript", icon: "🔵" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Mongoose", icon: "🟥" },
  ],
  Tools: [
    { name: "Git", icon: "🔧" },
    { name: "Webpack", icon: "📦" },
    { name: "Figma", icon: "🎨" },
    { name: "Firebase", icon: "🔥" },
  ],
  ProgrammingLanguages: [
    { name: "C", icon: "🔵" },
    { name: "C++", icon: "➕➕" },
    { name: "Java", icon: "☕" },
    { name: "C#", icon: "🎯" },
  ],
};

const Skill = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
        My <span className="text-primary">Skills</span>
      </h1>

      {/* Skills Section */}
      <div className="space-y-16">
        {Object.keys(skills).map((category) => (
          <div key={category}>
            {/* Category Title with Badge */}
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">
              <span className="badge badge-lg badge-primary">{category}</span>
            </h2>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills[category].map((skill) => (
                <div
                  key={skill.name}
                  className="card w-full bg-gradient-to-br from-indigo-200 to-purple-300 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="card-body items-center text-center p-6 bg-opacity-95 bg-white">
                    {/* Skill Icon */}
                    <span className="text-5xl mb-4 text-indigo-600">
                      {skill.icon}
                    </span>
                    {/* Skill Name */}
                    <h3 className="card-title text-xl font-bold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
