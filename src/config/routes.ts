import {
  Calculator,
  ToggleLeft,
  Lock,
  Type,
  Palette,
  TestTube,
} from "lucide-react";

export interface FeatureRoute {
  key: string;
  path: string;
  label: string;
  description: string;
  icon: typeof Calculator;
  color: string;
  showInNav?: boolean;
  showOnDashboard?: boolean;
}

export const featureRoutes: FeatureRoute[] = [
  {
    key: "counter",
    path: "/1",
    label: "Counter",
    description:
      "Interactive counter with increment, decrement, reset, and double functions",
    icon: Calculator,
    color: "from-green-500 to-emerald-500",
  },
  {
    key: "toggle",
    path: "/2",
    label: "Toggle",
    description: "Toggle between Hello and Goodbye with smooth animations",
    icon: ToggleLeft,
    color: "from-blue-500 to-cyan-500",
  },
  {
    key: "password",
    path: "/3",
    label: "Password",
    description: "Password input with show/hide toggle functionality",
    icon: Lock,
    color: "from-purple-500 to-pink-500",
  },
  {
    key: "form-state",
    path: "/4",
    label: "Form State",
    description: "Real-time form state tracking with character and word count",
    icon: Type,
    color: "from-orange-500 to-red-500",
  },
  {
    key: "color-picker",
    path: "/5",
    label: "Color Picker",
    description: "Interactive color picker component",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    key: "test",
    path: "/test",
    label: "Test",
    description: "Test page for development and experimentation",
    icon: TestTube,
    color: "from-indigo-500 to-blue-500",
  },
];

