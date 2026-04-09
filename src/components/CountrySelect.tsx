const countries = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Ivory Coast", flag: "🇨🇮" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "India", flag: "🇮🇳" },
  { name: "China", flag: "🇨🇳" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Other", flag: "🌍" },
];

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function CountrySelect({ value, onChange, required }: CountrySelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      title="Select your country"
      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/30 transition-all text-foreground"
    >
      <option value="">🌍 Select your country</option>
      {countries.map((c) => (
        <option key={c.name} value={c.name}>
          {c.flag} {c.name}
        </option>
      ))}
    </select>
  );
}