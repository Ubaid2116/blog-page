"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import StudioNavbar from "@/components/studio-navbar";

// Define the configuration
export default defineConfig({
  basePath: "/studio",
  name: "Bloggers",
  title: "Bloggers Studio",
  projectId,
  dataset,
  schema,
  studio: {
  
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }), // Vision for querying with GROQ
  ],
});
