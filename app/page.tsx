export default function Portfolio() {
  const skills = [
    "PySpark",
    "Databricks",
    "Airflow",
    "AWS",
    "DBT",
    "Snowflake",
    "PostgreSQL",
    "Oracle PL/SQL",
    "Power BI",
    "Python",
  ];

  const projects = [
    {
      title: "Canadian Logistics Route Optimization",
      year: "2026",
      stack: "Databricks, PySpark, Delta Lake, Airflow",
      description:
        "Scalable parcel optimization platform using Databricks and PySpark with Bronze-Silver-Gold architecture.",
      highlights: [
        "Built Spark-based ETL workflows",
        "Implemented route optimization logic",
        "Created analytics-ready datasets",
      ],
      desc:
        "Scalable parcel optimization platform using Databricks and PySpark with Bronze-Silver-Gold architecture.",
    },
    {
      title: "E-Commerce Lakehouse Pipeline",
      year: "2026",
      stack: "AWS S3, Databricks, Delta Lake, SQL",
      description:
        "Built incremental ETL workflows processing 180K+ transactions using Delta Lake and AWS S3.",
      highlights: [
        "Processed 180K+ transaction records",
        "Implemented Medallion Architecture",
        "Automated incremental data processing",
      ],
      desc:
        "Built incremental ETL workflows processing 180K+ transactions using Delta Lake and AWS S3.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Open to Data Engineering Opportunities
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
              Danish
              <span className="block text-cyan-400">Khan</span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Building scalable data platforms and cloud-driven ETL pipelines
              with PySpark, Databricks, Airflow, and modern lakehouse
              architectures.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://github.com/itzdanish93"
                target="_blank"
                className="bg-cyan-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://linkedin.com/in/danish-khan-026a65109"
                target="_blank"
                className="border border-white/20 bg-white/5 backdrop-blur px-7 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-gray-400 text-sm">Current Focus</p>
                  <h3 className="text-2xl font-bold mt-2">
                    Data Engineering
                  </h3>
                </div>

                <div className="bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-xl text-sm">
                  3+ Years Experience
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <p className="text-gray-400 text-sm mb-2">
                    Enterprise Experience
                  </p>
                  <h4 className="text-xl font-semibold">
                    Accenture India
                  </h4>
                  <p className="text-gray-400 mt-1 text-sm">
                    Oracle Applications & Automation
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <p className="text-gray-400 text-sm mb-2">
                    Education
                  </p>
                  <h4 className="text-xl font-semibold">
                    MSc Computational Science
                  </h4>
                  <p className="text-gray-400 mt-1 text-sm">
                    Laurentian University
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <h4 className="text-3xl font-bold text-cyan-400">
                      180K+
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Records Processed
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <h4 className="text-3xl font-bold text-cyan-400">
                      60%
                    </h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Manual Effort Reduced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-5">
              About Me
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Transitioning from Oracle Consulting to Modern Data Engineering.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in building scalable ETL workflows, optimizing data
              operations, and designing analytics-ready pipelines using
              Databricks, PySpark, Airflow, and cloud-native technologies.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-7 hover:translate-y-[-4px] transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="text-cyan-400 text-sm">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-4xl font-bold mb-10">Professional Experience</h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Accenture India
              </h3>
              <p className="text-gray-400">
                Packaged Application Development Analyst
              </p>
            </div>

            <span className="bg-zinc-800 px-4 py-2 rounded-xl text-sm">
              Oct 2021 - Dec 2024
            </span>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>
              • Performed root cause analysis on enterprise data-related issues
              and improved application stability.
            </p>
            <p>
              • Automated business processes reducing manual effort by 60%.
            </p>
            <p>
              • Built and maintained Oracle EBS solutions using Forms, Reports,
              and OAF.
            </p>
            <p>
              • Collaborated with cross-functional teams to optimize business
              workflows and data operations.
            </p>
            <p>
              • Worked in Agile teams using Git and Jira.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-green-400 text-sm mb-5">
                {project.stack}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-3">
                {project.highlights.map((point) => (
                  <div
                    key={point}
                    className="text-sm text-gray-400 flex gap-3"
                  >
                    <span className="text-green-400">▹</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AWS Certified Cloud Practitioner",
            "Oracle Cloud Infrastructure Foundation Associate",
            "Databricks Fundamentals Accreditation",
          ].map((cert) => (
            <div
              key={cert}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold leading-relaxed">
                {cert}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-4xl font-bold mb-10">Education</h2>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-semibold">
              MSc in Computational Science
            </h3>
            <p className="text-gray-400 mt-2">
              Laurentian University • 2025 - 2026 • CGPI 9.22
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-semibold">
              Bachelor of Engineering in Computer Engineering
            </h3>
            <p className="text-gray-400 mt-2">
              Mumbai University • 2018 - 2021
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Danish Khan</h3>
            <p className="text-gray-400 mt-1">
              Data Engineering • Cloud • Analytics
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="mailto:danishdsk6699@gmail.com">Email</a>
            <a href="https://github.com/itzdanish93" target="_blank">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/danish-khan-026a65109"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
