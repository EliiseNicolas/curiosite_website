import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inclure les billets Markdown dans toutes les pages générées à la demande
  outputFileTracingIncludes: {
    '/**/*': ['./content/**/*'],
  },
};

export default nextConfig;