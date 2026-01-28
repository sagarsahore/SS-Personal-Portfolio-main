import React from 'react';
import { useThree } from '@react-three/fiber';
import { PresentationControls } from '@react-three/drei';

type SafePresentationControlsProps = React.ComponentProps<typeof PresentationControls>;

export const SafePresentationControls: React.FC<SafePresentationControlsProps> = ({
  children,
  enabled = true,
  ...props
}) => {
  const { size } = useThree();
  const safeEnabled = enabled && size.width > 0 && size.height > 0;

  return (
    <PresentationControls enabled={safeEnabled} {...props}>
      {children}
    </PresentationControls>
  );
};
