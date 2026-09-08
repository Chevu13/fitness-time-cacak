import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // projekat živi izvan repo-a sa lock fajlom iznad njega — fiksiramo koren
  turbopack: { root: __dirname },
};

export default nextConfig;
