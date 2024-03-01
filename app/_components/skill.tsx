import SkillChart from './skill-chart';

export default function Skill() {
  return (
    <section id="skill" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">Skill</h2>
      <div className="flex justify-center space-x-4 mt-4">
       <SkillChart />
      </div>
    </section>
  );
}
