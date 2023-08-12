"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Testimonials = [
  {
    name: "Ben",
    avatar: "B",
    title: "Software Engineer",
    description: "This is the best application i have ever used!",
  },
  {
    name: "Ellie",
    avatar: "E",
    title: "Business Owner",
    description: "This application helped take my business to the next level!",
  },
 {
    name: "John",
    avatar: "J",
    title: "Web Developer",
    description: "Genius is amazing, it helped me finally center a <div>!",
  },
  {
    name: "Dave",
    avatar: "D",
    title: "Administrator",
    description: "Genius has saved me hours working out excel formulas.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cold-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
