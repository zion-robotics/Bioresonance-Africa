const countries = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Ethiopia", "Tanzania",
  "Uganda", "Senegal", "Ivory Coast", "Morocco", "Egypt", "Zambia",
  "Zimbabwe", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Italy", "Spain", "Netherlands", "India",
  "China", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Other",
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
      <option value="">Select your country</option>
      {countries.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}