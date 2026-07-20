export default function Stats() {
  const stats = [
    {
      number: "250,000+",
      label: "Happy Customers",
    },
    {
      number: "120+",
      label: "Branches Nationwide",
    },
    {
      number: "500,000+",
      label: "Accounts Opened",
    },
    {
      number: "25+",
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Banking By The Numbers
          </h2>

          <p className="mt-4 text-blue-100">
            Trusted by thousands of individuals and businesses across the country.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold text-yellow-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}