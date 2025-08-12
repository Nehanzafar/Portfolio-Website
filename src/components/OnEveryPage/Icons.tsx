// LazyIcon.tsx
import React from "react";
import { iconMap } from "../../utils/iconmap";

type IconName = keyof typeof iconMap;

interface LazyIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

const DynamicIcon = ({ name, ...props }: LazyIconProps) => {
  const IconComponent = iconMap[name as IconName];
  return (
    <React.Suspense fallback={<span />}>
      <IconComponent {...props} />
    </React.Suspense>
  );
};

export default DynamicIcon;
