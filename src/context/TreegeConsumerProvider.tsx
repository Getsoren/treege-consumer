import { LicenseInfo } from "@mui/x-license";
import { ReactNode, useLayoutEffect, useMemo, createContext } from "react";

interface TreegeConsumerProviderContext {
  countryAutocompleteService?: string | string[];
  googleApiKey?: string;
  licenseMuiX?: string;
  prefixResponseImageUriAutocomplete?: string;
  adapterLocale?: string;
  headers?: HeadersInit;
}

export interface TreegeConsumerProviderProps extends TreegeConsumerProviderContext {
  children: ReactNode;
}

export const TreegeConsumerContext = createContext<TreegeConsumerProviderContext>({
  adapterLocale: "",
  countryAutocompleteService: "",
  googleApiKey: "",
  headers: undefined,
  licenseMuiX: "",
  prefixResponseImageUriAutocomplete: "",
});

export const TreegeConsumerProvider = ({
  children,
  licenseMuiX,
  countryAutocompleteService,
  prefixResponseImageUriAutocomplete,
  googleApiKey,
  adapterLocale,
  headers,
}: TreegeConsumerProviderProps) => {
  // Set license key for mui x if provided
  useLayoutEffect(() => {
    if (licenseMuiX) {
      LicenseInfo.setLicenseKey(licenseMuiX);
    }
  }, [licenseMuiX]);

  const value = useMemo(
    () => ({
      adapterLocale,
      countryAutocompleteService,
      googleApiKey,
      headers,
      licenseMuiX,
      prefixResponseImageUriAutocomplete,
    }),
    [countryAutocompleteService, googleApiKey, headers, licenseMuiX, prefixResponseImageUriAutocomplete, adapterLocale],
  );

  return <TreegeConsumerContext.Provider value={value}>{children}</TreegeConsumerContext.Provider>;
};

export default TreegeConsumerProvider;
