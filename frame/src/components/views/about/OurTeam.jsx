import React from 'react';

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "15+ years in e-commerce and product development"
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Ensures seamless customer experiences"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Director", 
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Curates our exceptional product selection"
  },
  {
    name: "Emma Williams",
    role: "Customer Success",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Your advocate for any questions or concerns"
  }
];

const OurTeam = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Meet Our Team</h2>
        <p className="mt-2 text-blue-700">The passionate people behind ODO</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-64 bg-blue-100 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="mt-2 text-blue-700 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;