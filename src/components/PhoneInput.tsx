import { useState } from "react";

const countryCodes = [
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+233", country: "GH", flag: "🇬🇭" },
  { code: "+254", country: "KE", flag: "🇰🇪" },
  { code: "+251", country: "ET", flag: "🇪🇹" },
  { code: "+225", country: "CI", flag: "🇨🇮" },
  { code: "+221", country: "SN", flag: "🇸🇳" },
  { code: "+212", country: "MA", flag: "🇲🇦" },
  { code: "+20", country: "EG", flag: "🇪🇬" },
  { code: "+256", country: "UG", flag: "🇺🇬" },
  { code: "+255", country: "TZ", flag: "🇹🇿" },
  { code: "+260", country: "ZM", flag: "🇿🇲" },
  { code: "+263", country: "ZW", flag: "🇿🇼" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+1", country: "CA", flag: "🇨🇦" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function PhoneInput({ value, onChange, required }: PhoneInputProps) {
  const [selectedCode, setSelectedCode] = useState("+234");
  const [number, setNumber] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = number.replace(/\D/g, "").length >= 7;
  const showError = touched && number.length > 0 && !isValid;

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setNumber(val);
    onChange(`${selectedCode}${val}`);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
    onChange(`${e.target.value}${number}`);
  };

  return (
    <div>
      <div className={`flex rounded-xl border overflow-hidden transition-all ${
        showError ? "border-red-500 ring-2 ring-red-500/20" : "border-border focus-within:ring-2 focus-within:ring-deep-blue/30"
      }`}>
        <select
          value={selectedCode}
          onChange={handleCodeChange}
          className="bg-card text-sm font-body px-2 py-3 border-r border-border focus:outline-none text-foreground"
          title="Select country code"
        >
          {countryCodes.map((c, i) => (
            <option key={i} value={c.code}>
              {c.flag} {c.code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={number}
          onChange={handleNumberChange}
          onBlur={() => setTouched(true)}
          placeholder="8033030614"
          required={required}
          className="flex-1 px-4 py-3 bg-card font-body text-sm focus:outline-none text-foreground"
        />
      </div>
      {showError && (
        <p className="text-red-500 text-xs font-body mt-1">Please enter a valid phone number</p>
      )}
    </div>
  );
}