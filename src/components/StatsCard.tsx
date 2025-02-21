interface StatsCardProps {
    title: string;
    value: string;
  }
  
  export default function StatsCard({ title, value }: StatsCardProps) {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }
  