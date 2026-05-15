import { InputLabel as InputLabelDS, Typography } from "@getsoren/design-system";
import { PropsWithChildren } from "react";

export interface InputLabelProps extends PropsWithChildren {
  required?: boolean;
}

const InputLabel = ({ children, required }: InputLabelProps) => (
  <Typography variant="h5" component={InputLabelDS} required={required} color="text.primary" whiteSpace="initial">
    {children}
  </Typography>
);

export default InputLabel;
